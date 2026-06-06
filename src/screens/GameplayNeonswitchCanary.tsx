// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - NeonSwitch Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Grid3X3, Heart, History, LogOut, Pause, Play, RefreshCw, Settings, SlidersHorizontal, User } from "lucide-react";


export type GameplayNeonswitchCanaryActionId = "pause-1" | "settings-2" | "start-game-3" | "restart-4" | "resume-protocol-5" | "abort-mission-6" | "dashboard-1" | "arsenal-2" | "circuits-3" | "archive-4" | "privacy-protocol-5" | "signal-resources-6";

export interface GameplayNeonswitchCanaryProps {
  actions?: Partial<Record<GameplayNeonswitchCanaryActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayNeonswitchCanary({ actions, runtime }: GameplayNeonswitchCanaryProps) {
  void runtime;
  return (
    <>
      {/* Top AppBar (from JSON) */}
      <header className="fixed top-0 w-full bg-surface-dim/80 backdrop-blur-md border-b border-primary shadow-[0_0_15px_rgba(0,243,255,0.4)] flex justify-between items-center px-margin-desktop py-4 z-50">
      <div className="font-headline-lg text-headline-lg text-primary tracking-widest uppercase flex items-center gap-4">
                  NEON_SWITCH
                  <span className="font-mono-data text-mono-data text-on-surface-variant border border-outline-variant px-2 py-1 rounded bg-surface-container-lowest/50 ml-4 hidden md:inline-block">SYS.CORE.ACTIVE</span>
      </div>
      <div className="flex items-center gap-6 font-headline-md text-headline-md font-bold text-primary">
      <button className="text-primary hover:text-primary hover:shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-colors active:scale-95 duration-75" title="Pause" type="button" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary hover:shadow-[0_0_8px_rgba(0,243,255,0.6)] transition-colors active:scale-95 duration-75" title="Settings" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Side Nav Bar (from JSON) - Rendered as Side HUD for Desktop */}
      <nav className="hidden md:flex fixed left-0 h-full w-64 bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant flex-col py-8 z-40 pt-24">
      <div className="px-6 mb-8">
      <div className="w-12 h-12 rounded bg-surface-variant border border-outline mb-4 overflow-hidden relative" data-alt="A futuristic, high-contrast avatar portrait of a cyberpunk pilot. The face is partially obscured by a sleek, glowing cyan visor against a stark black background. High fidelity digital art, sharp lines, cinematic lighting.">
      {/* Placeholder for Avatar */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-secondary-container/20"></div>
      <User className="text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="font-headline-md text-headline-md text-secondary-container">CANARY_O1</h2>
      <p className="font-mono-data text-mono-data text-outline mt-1">RANK: ELITE</p>
      </div>
      <div className="flex flex-col gap-2 px-4">
      <a className="flex items-center gap-4 px-4 py-3 border-l-2 border-primary text-primary bg-primary/10 cursor-pointer transition-colors duration-200" href="#" data-action-id="dashboard-1" onClick={(event) => { event.preventDefault(); actions?.["dashboard-1"]?.(); }}>
      <Grid3X3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">DASHBOARD</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest cursor-pointer transition-colors duration-200" href="#" data-action-id="arsenal-2" onClick={(event) => { event.preventDefault(); actions?.["arsenal-2"]?.(); }}>
      <Bolt aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">ARSENAL</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest cursor-pointer transition-colors duration-200" href="#" data-action-id="circuits-3" onClick={(event) => { event.preventDefault(); actions?.["circuits-3"]?.(); }}>
      <SlidersHorizontal aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">CIRCUITS</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest cursor-pointer transition-colors duration-200" href="#" data-action-id="archive-4" onClick={(event) => { event.preventDefault(); actions?.["archive-4"]?.(); }}>
      <History aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">ARCHIVE</span>
      </a>
      </div>
      </nav>
      {/* Main Game Canvas */}
      <main className="flex-1 relative mt-[80px] md:ml-[256px] overflow-hidden grid-bg flex flex-col">
      {/* Integrated Top HUD */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3/4 max-w-2xl hud-glass rounded-lg p-4 flex justify-between items-center z-30">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-outline">SCORE</span>
      <span className="font-headline-md text-headline-md text-primary font-bold">004250</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-outline">LEVEL</span>
      <span className="font-headline-lg text-headline-lg text-secondary-container font-bold">04</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="font-label-caps text-label-caps text-outline">LIVES</span>
      <div className="flex gap-1 mt-1 text-error">
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <Heart className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Playfield Area */}
      <div className="flex-1 relative w-full h-full p-margin-desktop flex items-center justify-center">
      {/* Central Circuit Board Container */}
      <div className="w-full max-w-4xl aspect-video relative border border-outline-variant bg-surface-container-lowest/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
      {/* Circuit Background Details */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-0"></div>
      {/* Routing Rails layer */}
      <div className="absolute inset-0 z-10 p-12">
      {/* Horizontal Rail 1 (Active) */}
      <div className="absolute top-1/4 left-[10%] right-[30%] h-[2px] rail-active">
      <div className="packet anim-p1" style={{top: "50%"}}></div>
      </div>
      {/* Junction */}
      <div className="junction" style={{top: "25%", left: "70%"}}></div>
      {/* Vertical Rail 1 (Active) */}
      <div className="absolute top-1/4 bottom-[20%] left-[70%] w-[2px] rail-active">
      <div className="packet anim-p2" style={{left: "50%"}}></div>
      </div>
      {/* Junction */}
      <div className="junction" style={{top: "80%", left: "70%"}}></div>
      {/* Horizontal Rail 2 (Dead) */}
      <div className="absolute bottom-[20%] left-[20%] right-[30%] h-[2px] rail-dead"></div>
      {/* Junction */}
      <div className="junction" style={{top: "80%", left: "20%", borderColor: "#849495"}}></div>
      {/* Diagonal/Complex Path (Active) */}
      <div className="absolute top-[50%] left-[30%] w-[40%] h-[2px] rail-active rotate-12 origin-left"></div>
      {/* Terminal Nodes */}
      <div className="absolute top-[25%] left-[10%] w-6 h-6 border-2 border-primary bg-surface-dim transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="w-2 h-2 bg-primary animate-pulse"></div>
      </div>
      <div className="absolute top-[80%] left-[20%] w-6 h-6 border-2 border-outline-variant bg-surface-dim transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      </div>
      </div>
      {/* Bottom Controls & Instructions */}
      <div className="w-full p-6 flex flex-col items-center gap-6 mt-auto z-30 bg-gradient-to-t from-surface-dim to-transparent">
      <div className="flex gap-4">
      <button className="btn-primary font-headline-md text-headline-md px-12 py-4 rounded font-bold uppercase tracking-widest flex items-center gap-3" type="button" data-action-id="start-game-3" onClick={actions?.["start-game-3"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          START GAME
                      </button>
      <button className="btn-secondary font-headline-md text-headline-md px-8 py-4 rounded font-bold uppercase tracking-widest flex items-center gap-2" type="button" data-action-id="restart-4" onClick={actions?.["restart-4"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                          RESTART
                      </button>
      </div>
      <div className="flex gap-8 font-mono-data text-mono-data text-outline">
      <div className="flex items-center gap-2">
      <kbd className="px-2 py-1 border border-outline-variant rounded bg-surface-container text-on-surface">Space</kbd>
      <span>Pause</span>
      </div>
      <div className="flex items-center gap-2">
      <kbd className="px-2 py-1 border border-outline-variant rounded bg-surface-container text-on-surface">R</kbd>
      <span>Restart</span>
      </div>
      <div className="flex items-center gap-2">
      <kbd className="px-2 py-1 border border-outline-variant rounded bg-surface-container text-on-surface">1-4</kbd>
      <span>Switch Rails</span>
      </div>
      </div>
      </div>
      {/* Hidden Pause Overlay */}
      <div className="absolute inset-0 bg-surface-dim/90 backdrop-blur-md z-40 hidden flex-col items-center justify-center border-[4px] border-primary-container" id="pause-overlay">
      <h1 className="font-display-lg text-display-lg text-primary-container tracking-[0.2em] mb-8 animate-pulse shadow-[0_0_20px_rgba(0,243,255,0.8)] px-4 py-2 border border-primary-container bg-primary-container/10">PAUSED</h1>
      <p className="font-mono-data text-mono-data text-outline mb-12 max-w-md text-center">SYSTEM SUSPENDED. ROUTING PACKETS HELD IN STASIS BUFFER.</p>
      <button className="btn-primary font-headline-md text-headline-md px-12 py-4 rounded font-bold uppercase tracking-widest mb-4" type="button" data-action-id="resume-protocol-5" onClick={actions?.["resume-protocol-5"]}>
                      RESUME PROTOCOL
                  </button>
      <button className="text-outline hover:text-primary transition-colors font-mono-data text-mono-data flex items-center gap-2" type="button" data-action-id="abort-mission-6" onClick={actions?.["abort-mission-6"]}>
      <LogOut className="text-[16px]" aria-hidden={true} focusable="false" /> ABORT MISSION
                  </button>
      </div>
      </main>
      {/* Footer (from JSON) */}
      <footer className="w-full py-4 bg-surface-dim border-t border-surface-variant flex justify-between items-center px-margin-desktop font-mono-data text-mono-data text-outline md:pl-[304px]">
      <div>© 2024 NEON_SWITCH_SYS. ALL RIGHTS RESERVED.</div>
      <div className="flex gap-6">
      <a className="text-outline hover:text-tertiary-fixed transition-colors underline-offset-4 hover:underline" href="#" data-action-id="privacy-protocol-5" onClick={(event) => { event.preventDefault(); actions?.["privacy-protocol-5"]?.(); }}>PRIVACY_PROTOCOL</a>
      <a className="text-outline hover:text-tertiary-fixed transition-colors underline-offset-4 hover:underline" href="#" data-action-id="signal-resources-6" onClick={(event) => { event.preventDefault(); actions?.["signal-resources-6"]?.(); }}>SIGNAL_RESOURCES</a>
      </div>
      </footer>
      
    </>
  );
}
