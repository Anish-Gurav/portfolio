'use client';

export function GrainOverlay() {
  return (
    <>
      <style jsx global>{`
        @keyframes grain-shift {
          0%, 100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 50% 50%;
          }
          50% {
            background-position: 100% 0%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          animation: 'grain-shift 8s steps(10) infinite',
        }}
      />
    </>
  );
}
