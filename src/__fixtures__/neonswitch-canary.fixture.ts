import { GameRuntimeState } from '../game/game-runtime';

export const fixtureRuntimeState: GameRuntimeState = {
  player: { lane: 1, position: 50 },
  obstacles: [
    { lane: 0, position: 300 },
    { lane: 2, position: 600 },
  ],
  shards: [
    { lane: 1, position: 450 },
  ],
  score: 120,
  energy: 80,
  lives: 2,
  paused: false,
  gameOver: false,
  difficulty: 'standard',
  level: 1,
};

export const fixturePausedState: GameRuntimeState = {
  player: { lane: 1, position: 50 },
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  paused: true,
  gameOver: false,
  difficulty: 'casual',
  level: 1,
};

export const fixtureGameOverState: GameRuntimeState = {
  player: { lane: 1, position: 50 },
  obstacles: [],
  shards: [],
  score: 850,
  energy: 0,
  lives: 0,
  paused: true,
  gameOver: true,
  difficulty: 'elite',
  level: 3,
};
