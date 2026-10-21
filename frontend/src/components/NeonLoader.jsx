
import { useEffect } from "react";

export default function NeonLoader({
  initials = "AK",
  name = "AJAY KUMAR",
  role = "FULL STACK DEVELOPER",
  status = "Loading portfolio content...",
  duration = 3000,
  onComplete,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-10 text-white">
      <div className="absolute inset-0" />

      <div className="absolute h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute h-40 w-40 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#090d1b]/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
            PORTFOLIO
          </span>

          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] tracking-wider text-slate-400">
            V1.0
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 flex h-44 w-44 items-center justify-center rounded-full border border-white/[0.04] bg-white/[0.015] shadow-[0_0_50px_rgba(37,99,235,0.08)]">
            <div className="absolute inset-2 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-blue-400/20" />

            <div className="absolute h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

            <div
              className="absolute h-32 w-32 rounded-full p-[1.5px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #22d3ee)",
                boxShadow:
                  "0 0 25px rgba(59,130,246,0.2), 0 0 50px rgba(139,92,246,0.08)",
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#080b18]">
                <span className="text-2xl font-light tracking-[0.2em] text-white">
                  {initials}
                </span>
              </div>
            </div>

            <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-full">
              <span className="absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.65)]" />
            </div>
          </div>

          <h1 className="text-base font-semibold tracking-[0.25em] text-white">
            {name}
          </h1>

          <p className="mt-3 text-[10px] font-medium tracking-[0.3em] text-slate-500">
            {role}
          </p>

          <div className="mt-9 w-full rounded-xl border border-white/6 bg-white/2.5 px-4 py-4 shadow-lg shadow-black/10">
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <p className="text-xs font-medium tracking-wide text-slate-300">
                {status}
              </p>
            </div>

            <div className="mt-4 h-px w-full overflow-hidden bg-white/6">
              <div className="h-full w-1/3 animate-[loadingSlide_1.8s_ease-in-out_infinite] rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
            </div>
          </div>

          <p className="mt-6 text-[10px] tracking-wide text-slate-600">
            PLEASE WAIT WHILE CONTENT LOADS
          </p>
        </div>
      </div>

      <style>{`
        @keyframes loadingSlide {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(330%); }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
