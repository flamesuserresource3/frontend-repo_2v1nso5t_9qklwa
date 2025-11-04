import Spline from '@splinetool/react-spline';

export default function SplineShowcase() {
  return (
    <section className="py-12">
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-white">
        <Spline
          scene="https://prod.spline.design/8m7pU0C0e6kEo8m2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6 max-w-xl">
          <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur border border-slate-200 px-3 py-1 text-xs text-slate-600">
            Jelajahi dunia literasi secara interaktif
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Rasakan pengalaman 3D yang imersif</h3>
          <p className="text-slate-700 mt-1">Scene 3D ringan untuk memperkaya suasana belanja buku kamu.</p>
        </div>
      </div>
    </section>
  );
}
