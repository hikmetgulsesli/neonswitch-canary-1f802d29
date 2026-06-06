import { repoSet } from '../neonswitch-canary/neonswitch-canary.repo';

export function actSavePreferences(difficulty: 'casual' | 'standard' | 'elite') {
  repoSet('savedDifficulty', difficulty);
}
