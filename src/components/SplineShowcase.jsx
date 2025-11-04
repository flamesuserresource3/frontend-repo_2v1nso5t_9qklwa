import Spline from "@splinetool/react-spline";

export default function SplineShowcase() {
  return (
    <section id="showcase" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-6 sm:mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Interactive 3D Showcase
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Explore a playful 3D scene while you browse.
            </p>
          </div>
          <a
            href="#books"
            className="hidden sm:inline-flex rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50"
          >
            Skip to books
          </a>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <Spline
            scene="https://prod.spline.design/6YqFhQWmvMRGsiEo/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* Soft gradient overlay that does not block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/70" />
        </div>
      </div>
    </section>
  );
}
