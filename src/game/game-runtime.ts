export interface GameEntity {
  lane: number;
  position: number;
}

export interface GameRuntimeState {
  player: GameEntity;
  obstacles: GameEntity[];
  shards: GameEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  difficulty: 'casual' | 'standard' | 'elite';
  level: number;
}

export const LANES = 3;
export const TRACK_LENGTH = 1000;

export function createInitialRuntime(difficulty: GameRuntimeState['difficulty'] = 'standard'): GameRuntimeState {
  return {
    player: { lane: 1, position: 50 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: 100,
    lives: 3,
    paused: true,
    gameOver: false,
    difficulty,
    level: 1,
  };
}

function spawnEntity(lane: number, position: number): GameEntity {
  return { lane, position };
}

function randomLane(): number {
  return Math.floor(Math.random() * LANES);
}

export function tickRuntime(state: GameRuntimeState): GameRuntimeState {
  if (state.paused || state.gameOver) return state;

  const speed = state.difficulty === 'elite' ? 2.5 : state.difficulty === 'casual' ? 1.0 : 1.6;
  const spawnChance = state.difficulty === 'elite' ? 0.08 : state.difficulty === 'casual' ? 0.03 : 0.05;

  let nextObstacles = state.obstacles
    .map((o) => ({ ...o, position: o.position - speed }))
    .filter((o) => o.position > -20);

  let nextShards = state.shards
    .map((s) => ({ ...s, position: s.position - speed }))
    .filter((s) => s.position > -20);

  if (Math.random() < spawnChance) {
    nextObstacles.push(spawnEntity(randomLane(), TRACK_LENGTH));
  }
  if (Math.random() < spawnChance * 0.6) {
    nextShards.push(spawnEntity(randomLane(), TRACK_LENGTH));
  }

  let nextScore = state.score + Math.round(speed);
  let nextEnergy = state.energy;
  let nextLives = state.lives;
  let nextGameOver: boolean = state.gameOver;

  const playerHitbox = 8;
  for (const o of nextObstacles) {
    if (o.lane === state.player.lane && Math.abs(o.position - state.player.position) < playerHitbox) {
      nextLives -= 1;
      nextEnergy = Math.max(0, nextEnergy - 20);
    }
  }

  for (const s of nextShards) {
    if (s.lane === state.player.lane && Math.abs(s.position - state.player.position) < playerHitbox) {
      nextScore += 50;
      nextEnergy = Math.min(100, nextEnergy + 10);
    }
  }

  nextShards = nextShards.filter(
    (s) => !(s.lane === state.player.lane && Math.abs(s.position - state.player.position) < playerHitbox)
  );

  if (nextLives <= 0) {
    nextGameOver = true;
    nextLives = 0;
  }

  return {
    ...state,
    obstacles: nextObstacles,
    shards: nextShards,
    score: nextScore,
    energy: nextEnergy,
    lives: nextLives,
    gameOver: nextGameOver,
  };
}

export function movePlayer(state: GameRuntimeState, direction: -1 | 1): GameRuntimeState {
  const nextLane = Math.max(0, Math.min(LANES - 1, state.player.lane + direction));
  return { ...state, player: { ...state.player, lane: nextLane } };
}

export type GameRuntime = {
  state: GameRuntimeState;
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: (difficulty?: GameRuntimeState['difficulty']) => void;
  moveLeft: () => void;
  moveRight: () => void;
  tick: () => void;
  subscribe: (cb: (state: GameRuntimeState) => void) => () => void;
};

export function createGameRuntime(initialDifficulty: GameRuntimeState['difficulty'] = 'standard'): GameRuntime {
  let state = createInitialRuntime(initialDifficulty);
  const listeners = new Set<(state: GameRuntimeState) => void>();
  let intervalId: ReturnType<typeof setInterval> | null = null;

  function notify() {
    listeners.forEach((cb) => cb(state));
  }

  function tick() {
    state = tickRuntime(state);
    notify();
  }

  function startLoop() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(tick, 50);
  }

  function stopLoop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  const api: GameRuntime = {
    get state() {
      return state;
    },
    start() {
      state = { ...state, paused: false, gameOver: false };
      startLoop();
      notify();
    },
    pause() {
      state = { ...state, paused: true };
      stopLoop();
      notify();
    },
    resume() {
      if (state.gameOver) return;
      state = { ...state, paused: false };
      startLoop();
      notify();
    },
    restart(difficulty = state.difficulty) {
      stopLoop();
      state = createInitialRuntime(difficulty);
      notify();
    },
    moveLeft() {
      state = movePlayer(state, -1);
      notify();
    },
    moveRight() {
      state = movePlayer(state, 1);
      notify();
    },
    tick,
    subscribe(cb) {
      listeners.add(cb);
      cb(state);
      return () => listeners.delete(cb);
    },
  };

  return api;
}
