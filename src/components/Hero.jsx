import { Star, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-20 pb-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 mb-4">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            Bestseller Minggu Ini
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Temukan buku terbaik untuk menginspirasi harimu
          </h1>
          <p className="mt-4 text-slate-600 text-base">
            Jelajahi koleksi novel, non-fiksi, pengembangan diri, dan ribuan judul lain dari penulis favoritmu.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#populer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-700"
            >
              Lihat Buku Populer
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#kategori"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50"
            >
              Jelajahi Kategori
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <dt className="text-sm text-slate-500">Judul</dt>
              <dd className="text-xl font-semibold">25k+</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Penerbit</dt>
              <dd className="text-xl font-semibold">1.2k</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Ulasan</dt>
              <dd className="text-xl font-semibold">120k+</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-rose-100 p-1">
            <div className="h-full w-full rounded-xl bg-white shadow-sm grid grid-cols-3 gap-3 p-3">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="rounded-lg bg-slate-100/70 border border-slate-200/70" />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -right-2 bg-white shadow-lg rounded-xl px-4 py-3 border border-slate-200">
            <div className="text-xs text-slate-500">Penawaran hari ini</div>
            <div className="font-semibold">Diskon hingga 40%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
