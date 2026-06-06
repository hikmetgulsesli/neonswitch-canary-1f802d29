// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - NeonSwitch Canary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Gauge, Keyboard, SlidersHorizontal, X } from "lucide-react";


export type GameSettingsNeonswitchCanaryActionId = "close-settings-1" | "casual-2" | "standard-3" | "elite-4" | "reset-preferences-5" | "back-to-game-6" | "save-and-return-7";

export interface GameSettingsNeonswitchCanaryProps {
  actions?: Partial<Record<GameSettingsNeonswitchCanaryActionId, () => void>>;

}

export function GameSettingsNeonswitchCanary({ actions }: GameSettingsNeonswitchCanaryProps) {
  return (
    <>
      {/* Faux Gameplay Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105" data-alt="A high-speed, neon-drenched cyberpunk racing or reflex game environment. The scene is slightly motion-blurred, featuring glowing cyan and magenta geometric tracks against a deep black void. Bright data streams and neon HUD elements flash in the periphery. The overall lighting is dark but punctuated by intense, high-contrast neon light sources. The mood is fast-paced, digital, and electric." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxjE56ESSX5pTJ-pLSzCwKaYW_fd9ryP1QYPZX4gslhfRBCrim9kDiHTvfXbFpKZ43bhn9zOyTfO84u8Yc5mCT-FY3ToRdo2kVSf1nX7QwWf1CenpSNtFRxu_iz3OaSnPJIWJRsy5ZZhn_oyI8ssDC6Tp1vRf4yHmMfJ0FcawjCZ_IL9tSZsclXcc2fS_ceAmTmf0Jgyj3KOI_boz8HgolDb4VxF29VNMOiDGUM6TBbT5B8fh6THxMNCHMonepdoKVxYiwudsJWUqN')"}}></div>
      {/* Dark Overlay / Vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
      {/* Modal Container (Overlay over gameplay) */}
      <div className="relative z-50 flex items-center justify-center min-h-screen p-4">
      {/* Main Settings Panel (Tier 3 Elevation: Surface Rail + Cyan Border + Glow) */}
      <div className="w-full max-w-2xl bg-[#16161D]/90 backdrop-blur-xl border border-primary shadow-[0_0_15px_rgba(0,243,255,0.4)] flex flex-col relative">
      {/* Structural 'Active Rails' Decoration */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-primary"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30"></div>
      {/* ID Tag (Top Left) */}
      <div className="absolute -top-3 left-4 bg-background border border-primary px-2 py-1 flex items-center gap-2 z-10">
      <div className="w-2 h-2 bg-primary animate-pulse"></div>
      <span className="font-label-caps text-label-caps text-primary">SYS_CFG</span>
      </div>
      {/* Header */}
      <div className="px-8 py-6 border-b border-outline-variant/50 flex justify-between items-center mt-2">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-widest">Settings</h1>
      <p className="font-mono-data text-mono-data text-outline mt-1">CANARY_O1 // OVERRIDE PROTOCOL</p>
      </div>
      <button aria-label="Close Settings" className="text-outline hover:text-primary transition-colors flex items-center justify-center h-10 w-10 border border-transparent hover:border-primary bg-surface-dim hover:bg-surface" type="button" data-action-id="close-settings-1" onClick={actions?.["close-settings-1"]}>
      <X  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Content Body */}
      <div className="p-8 flex flex-col gap-8">
      {/* Section: DIFFICULTY */}
      <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
      <SlidersHorizontal  style={{fontVariationSettings: "'FILL' 1"}} className="text-outline text-sm" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Difficulty</h2>
      </div>
      <div className="grid grid-cols-3 gap-2">
      {/* Option 1: Casual */}
      <button className="group relative py-3 px-4 border border-outline-variant bg-surface-dim hover:bg-surface text-center transition-colors" type="button" data-action-id="casual-2" onClick={actions?.["casual-2"]}>
      <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface">Casual</span>
      </button>
      {/* Option 2: Standard (Selected) */}
      <button className="group relative py-3 px-4 border border-primary bg-primary/10 text-center transition-colors shadow-[inset_0_0_10px_rgba(0,243,255,0.2)]" type="button" data-action-id="standard-3" onClick={actions?.["standard-3"]}>
      <span className="font-label-caps text-label-caps text-primary font-bold">Standard</span>
      </button>
      {/* Option 3: Elite */}
      <button className="group relative py-3 px-4 border border-outline-variant bg-surface-dim hover:bg-surface text-center transition-colors" type="button" data-action-id="elite-4" onClick={actions?.["elite-4"]}>
      <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface">Elite</span>
      {/* Decor */}
      <div className="absolute top-0 right-0 w-1 h-1 bg-error-container"></div>
      </button>
      </div>
      </div>
      {/* Section: GAME SPEED */}
      <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <Gauge  style={{fontVariationSettings: "'FILL' 1"}} className="text-outline text-sm" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Game Speed</h2>
      </div>
      <span className="font-mono-data text-mono-data text-primary">1.0x</span>
      </div>
      <div className="relative w-full h-8 flex items-center">
      {/* Custom Range Input Wrapper */}
      <input className="w-full h-1 bg-surface-variant appearance-none outline-none relative z-10" max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      {/* Track Decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1 bg-primary z-0 shadow-[0_0_8px_rgba(0,243,255,0.4)]"></div>
      {/* Markers */}
      <div className="absolute w-full flex justify-between px-1 pointer-events-none z-0 mt-6">
      <span className="font-mono-data text-[10px] text-outline">0.5</span>
      <span className="font-mono-data text-[10px] text-outline">1.0</span>
      <span className="font-mono-data text-[10px] text-outline">1.5</span>
      <span className="font-mono-data text-[10px] text-outline">2.0</span>
      </div>
      </div>
      <div className="h-4"></div> {/* Spacer for markers */}
      </div>
      {/* Section: INPUT HELP */}
      <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
      <Keyboard  style={{fontVariationSettings: "'FILL' 1"}} className="text-outline text-sm" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Input Help</h2>
      </div>
      {/* Code/Terminal Style Box */}
      <div className="bg-[#0A0A0F] border border-outline-variant/40 p-4 relative font-mono-data text-mono-data text-on-surface-variant flex flex-col gap-2">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-fixed/20"></div>
      <div className="flex justify-between items-center">
      <span className="text-on-surface">Arrow Keys <span className="text-outline">or</span> WASD</span>
      <span className="text-primary-fixed-dim">Flip Switches</span>
      </div>
      <div className="w-full h-[1px] bg-surface-variant/50 border-dashed border-b border-surface-variant"></div>
      <div className="flex justify-between items-center">
      <span className="text-on-surface">Space</span>
      <span className="text-primary-fixed-dim">Pause</span>
      </div>
      </div>
      </div>
      </div>
      {/* Footer / Actions */}
      <div className="p-6 bg-surface-dim/80 border-t border-outline-variant/30 flex justify-between items-center">
      {/* Reset (Ghost Button) */}
      <button className="font-label-caps text-label-caps text-outline hover:text-on-surface hover:bg-surface-variant/30 px-4 py-2 transition-colors" type="button" data-action-id="reset-preferences-5" onClick={actions?.["reset-preferences-5"]}>
                          Reset Preferences
                      </button>
      <div className="flex gap-4">
      {/* Secondary Button (Transparent, Magenta border) */}
      <button className="bg-transparent border border-secondary-container text-secondary-container hover:bg-secondary-container/10 font-label-caps text-label-caps px-6 py-3 transition-colors flex items-center gap-2" type="button" data-action-id="back-to-game-6" onClick={actions?.["back-to-game-6"]}>
      <span>Back To Game</span>
      </button>
      {/* Primary Button (Solid Cyan) */}
      <button className="bg-primary text-[#050508] hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] font-label-caps text-label-caps font-bold px-6 py-3 transition-colors flex items-center gap-2 relative overflow-hidden group" type="button" data-action-id="save-and-return-7" onClick={actions?.["save-and-return-7"]}>
      <span className="relative z-10">Save &amp; Return</span>
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out z-0"></div>
      </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
