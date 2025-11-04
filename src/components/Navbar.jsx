import { useState } from 'react';
import { BookOpen, ShoppingCart, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold tracking-tight">TokoBuku</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#baru" className="hover:text-slate-900 transition-colors">Terbaru</a>
            <a href="#populer" className="hover:text-slate-900 transition-colors">Populer</a>
            <a href="#kategori" className="hover:text-slate-900 transition-colors">Kategori</a>
            <a href="#promo" className="hover:text-slate-900 transition-colors">Promo</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari buku..."
                className="pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
              <ShoppingCart className="h-4 w-4" />
              Keranjang
            </button>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari buku..."
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#baru" className="rounded-lg px-3 py-2 border border-slate-200 text-center hover:bg-slate-50">Terbaru</a>
              <a href="#populer" className="rounded-lg px-3 py-2 border border-slate-200 text-center hover:bg-slate-50">Populer</a>
              <a href="#kategori" className="rounded-lg px-3 py-2 border border-slate-200 text-center hover:bg-slate-50">Kategori</a>
              <a href="#promo" className="rounded-lg px-3 py-2 border border-slate-200 text-center hover:bg-slate-50">Promo</a>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
              <ShoppingCart className="h-4 w-4" />
              Lihat Keranjang
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
