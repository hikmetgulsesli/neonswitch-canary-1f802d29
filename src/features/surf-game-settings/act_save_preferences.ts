import { actions, AppState } from '../neonswitch-canary/neonswitch-canary.store';

export function actSavePreferences(difficulty: AppState['difficulty']) {
  actions.saveAndReturn(difficulty);
}
