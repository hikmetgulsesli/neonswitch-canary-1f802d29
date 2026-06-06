import { useEffect, useState, useMemo } from 'react';
import { GameplayNeonswitchCanary } from './screens';
import { GameSettingsNeonswitchCanary } from './screens';
import { AppState, subscribeAppState, actions, initStore } from './features/neonswitch-canary/neonswitch-canary.store';
import { mountTestBridge } from './test/bridge';

function useAppState() {
  const [state, setState] = useState<AppState | null>(null);
  useEffect(() => {
    initStore();
    const unsub = subscribeAppState(setState);
    return unsub;
  }, []);
  return state;
}

export default function App() {
  const appState = useAppState();

  useEffect(() => {
    mountTestBridge();
  }, []);

  const gameplayActions = useMemo(
    () => ({
      'pause-1': actions.pauseGame,
      'settings-2': actions.openSettings,
      'start-game-3': actions.startGame,
      'restart-4': actions.restartGame,
      'resume-protocol-5': actions.resumeGame,
      'abort-mission-6': actions.abortMission,
      'dashboard-1': () => {},
      'arsenal-2': () => {},
      'circuits-3': () => {},
      'archive-4': () => {},
      'privacy-protocol-5': () => {},
      'signal-resources-6': () => {},
    }),
    []
  );

  const settingsActions = useMemo(
    () => ({
      'close-settings-1': actions.closeSettings,
      'casual-2': () => actions.setDifficulty('casual'),
      'standard-3': () => actions.setDifficulty('standard'),
      'elite-4': () => actions.setDifficulty('elite'),
      'reset-preferences-5': actions.resetPreferences,
      'back-to-game-6': actions.backToGame,
      'save-and-return-7': () => actions.saveAndReturn(appState?.difficulty ?? 'standard'),
    }),
    [appState?.difficulty]
  );

  if (!appState) {
    return (
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
      />
    );
  }

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      {appState.screen === 'gameplay' && (
        <GameplayNeonswitchCanary
          actions={gameplayActions}
          runtime={{
            player: appState.runtime.player,
            obstacles: appState.runtime.obstacles,
            shards: appState.runtime.shards,
            score: appState.runtime.score,
            energy: appState.runtime.energy,
            lives: appState.runtime.lives,
            paused: appState.runtime.paused,
          }}
        />
      )}
      {appState.screen === 'settings' && (
        <GameSettingsNeonswitchCanary actions={settingsActions} />
      )}
    </div>
  );
}
