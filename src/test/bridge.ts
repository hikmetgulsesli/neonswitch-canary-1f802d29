import { initStore, getAppState, subscribeAppState, actions, AppState } from '../features/neonswitch-canary/neonswitch-canary.store';

export interface TestBridge {
  state: AppState;
  actions: typeof actions;
  subscribe: typeof subscribeAppState;
}

export function mountTestBridge() {
  initStore();
  const bridge: TestBridge = {
    get state() {
      return getAppState();
    },
    actions,
    subscribe: subscribeAppState,
  };
  (window as unknown as Record<string, unknown>).app = bridge;
  (globalThis as unknown as Record<string, unknown>).app = bridge;
  return bridge;
}
