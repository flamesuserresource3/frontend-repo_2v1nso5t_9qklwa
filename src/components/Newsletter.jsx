import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-12">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-rose-50 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <Mail className="h-3.5 w-3.5 text-indigo-600" />
              Newsletter
            </div>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Dapatkan rekomendasi dan promo terbaru</h3>
            <p className="mt-1 text-slate-600 text-sm">Langganan email mingguan berisi kurasi buku, ulasan, dan diskon khusus pelanggan.</p>
          </div>
          <form className="w-full lg:w-auto flex-1 flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="email"
              required
              placeholder="Masukkan email kamu"
              className="flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-700">
              Berlangganan
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
