import { Tag, Clock } from 'lucide-react';

function PromoCard({ title, desc, badge, discount, image }) {
  return (
    <div className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 px-2 py-1 text-[11px] font-medium text-slate-700">
          <Tag className="h-3.5 w-3.5 text-indigo-600" />
          {badge}
        </div>
        <div className="absolute right-3 bottom-3 rounded-lg bg-indigo-600 text-white px-2.5 py-1 text-xs font-semibold">
          {discount}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" />
            Berlaku s/d Minggu ini
          </div>
          <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PromoSection() {
  const promos = [
    {
      title: 'Diskon Novel Best Seller',
      desc: 'Nikmati potongan harga untuk koleksi novel pilihan.',
      badge: 'Promo Spesial',
      discount: 'Hemat 40%'
      ,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Bundling Buku Self-Help',
      desc: 'Paket hemat untuk pengembangan diri yang lebih baik.',
      badge: 'Bundling',
      discount: 'Hemat 30%',
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1600&auto=format&fit=crop'
    },
    {
      title: 'Non-Fiksi Pilihan Editor',
      desc: 'Ragam bacaan non-fiksi yang memperluas wawasan.',
      badge: 'Pilihan Editor',
      discount: 'Hemat 25%',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="promo" className="py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Promo dan Penawaran</h2>
          <p className="text-slate-600 text-sm">Jangan lewatkan diskon menarik minggu ini</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {promos.map((p, idx) => (
          <PromoCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
