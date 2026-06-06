import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('exposes window.app with state and actions', () => {
    render(<App />);
    const app = (window as unknown as Record<string, unknown>).app as {
      state: Record<string, unknown>;
      actions: Record<string, unknown>;
    };
    expect(app).toBeDefined();
    expect(app.state).toBeDefined();
    expect(typeof app.actions).toBe('object');
  });

  it('starts the game and advances score via setInterval loop', () => {
    render(<App />);
    const app = (window as unknown as Record<string, unknown>).app as {
      state: { runtime: { score: number; paused: boolean } };
      actions: { startGame: () => void };
    };
    const startScore = app.state.runtime.score;
    app.actions.startGame();
    expect(app.state.runtime.paused).toBe(false);
    vi.advanceTimersByTime(200);
    expect(app.state.runtime.score).toBeGreaterThan(startScore);
  });

  it('opens and closes settings', () => {
    render(<App />);
    const app = (window as unknown as Record<string, unknown>).app as {
      state: { screen: string };
      actions: { openSettings: () => void; closeSettings: () => void };
    };
    app.actions.openSettings();
    expect(app.state.screen).toBe('settings');
    app.actions.closeSettings();
    expect(app.state.screen).toBe('gameplay');
  });
});
