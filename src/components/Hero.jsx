import { Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_20%_0%,rgba(99,102,241,0.15),transparent),radial-gradient(600px_300px_at_80%_20%,rgba(56,189,248,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles className="h-3.5 w-3.5" />
              New this week: 50+ curated reads
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Discover your next favorite book
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore bestsellers, editor’s picks, and hidden gems across every
              genre. Fast delivery, fair prices, and a library you’ll love.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#books"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white shadow-sm hover:bg-indigo-500"
              >
                Browse Books
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-900 hover:bg-gray-50"
              >
                Live Showcase
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1 text-indigo-600">
                <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
              </div>
              <span>Trusted by 20k+ readers</span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="col-span-2 aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200" />
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200" />
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200" />
              <div className="col-span-2 aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
