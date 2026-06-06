import { actions } from '../neonswitch-canary/neonswitch-canary.store';

export function actSavePreferences(difficulty: 'casual' | 'standard' | 'elite') {
  actions.saveAndReturn(difficulty);
}
