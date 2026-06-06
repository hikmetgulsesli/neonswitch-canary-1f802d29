import { createGameRuntime, GameRuntime, GameRuntimeState } from '../../game/game-runtime';

export type Screen = 'gameplay' | 'settings';

export interface AppState {
  screen: Screen;
  runtime: GameRuntimeState;
  difficulty: 'casual' | 'standard' | 'elite';
  highScore: number;
  storageError: string | null;
}

let runtime: GameRuntime | null = null;
let listeners: Set<(state: AppState) => void> = new Set();

function readHighScore(): number {
  try {
    const raw = localStorage.getItem('neonswitch-canary.highScore');
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return typeof parsed === 'number' ? parsed : 0;
  } catch {
    return 0;
  }
}

function writeHighScore(value: number) {
  try {
    localStorage.setItem('neonswitch-canary.highScore', JSON.stringify(value));
  } catch {
    // ignore
  }
}

function buildAppState(): AppState {
  const rt = runtime!;
  return {
    screen: currentScreen,
    runtime: rt.state,
    difficulty: rt.state.difficulty,
    highScore: readHighScore(),
    storageError: null,
  };
}

let currentScreen: Screen = 'gameplay';

function notify() {
  const state = buildAppState();
  listeners.forEach((cb) => cb(state));
}

function ensureRuntime(difficulty: AppState['difficulty'] = 'standard') {
  if (!runtime) {
    runtime = createGameRuntime(difficulty);
    runtime.subscribe(() => {
      if (runtime && runtime.state.gameOver) {
        const hs = readHighScore();
        if (runtime.state.score > hs) {
          writeHighScore(runtime.state.score);
        }
      }
      notify();
    });
  }
  return runtime;
}

export function getAppState(): AppState {
  ensureRuntime();
  return buildAppState();
}

export function subscribeAppState(cb: (state: AppState) => void): () => void {
  ensureRuntime();
  listeners.add(cb);
  cb(buildAppState());
  return () => listeners.delete(cb);
}

export const actions = {
  startGame() {
    const rt = ensureRuntime();
    rt.start();
  },
  pauseGame() {
    const rt = ensureRuntime();
    rt.pause();
  },
  resumeGame() {
    const rt = ensureRuntime();
    rt.resume();
  },
  restartGame() {
    const rt = ensureRuntime();
    rt.restart();
    rt.start();
  },
  abortMission() {
    const rt = ensureRuntime();
    rt.pause();
    currentScreen = 'gameplay';
    notify();
  },
  openSettings() {
    const rt = ensureRuntime();
    rt.pause();
    currentScreen = 'settings';
    notify();
  },
  closeSettings() {
    currentScreen = 'gameplay';
    notify();
  },
  backToGame() {
    currentScreen = 'gameplay';
    notify();
  },
  saveAndReturn(difficulty: AppState['difficulty']) {
    const rt = ensureRuntime();
    rt.restart(difficulty);
    currentScreen = 'gameplay';
    notify();
  },
  setDifficulty(difficulty: AppState['difficulty']) {
    const rt = ensureRuntime();
    rt.restart(difficulty);
    notify();
  },
  resetPreferences() {
    try {
      localStorage.removeItem('neonswitch-canary.highScore');
    } catch {
      // ignore
    }
    const rt = ensureRuntime();
    rt.restart('standard');
    notify();
  },
  moveLeft() {
    ensureRuntime().moveLeft();
  },
  moveRight() {
    ensureRuntime().moveRight();
  },
};

export function initStore() {
  ensureRuntime();
}
