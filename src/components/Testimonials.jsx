import { Star } from 'lucide-react';

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < value ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
      <Stars />
      <p className="mt-3 text-slate-700">“{quote}”</p>
      <div className="mt-4 flex items-center gap-3">
        <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <div className="font-medium text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const items = [
    {
      quote: 'Koleksinya lengkap dan pengiriman super cepat. Pasti belanja lagi!',
      name: 'Aulia N.',
      role: 'Mahasiswi',
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop'
    },
    {
      quote: 'Harga bersaing dan banyak promo. Sangat puas dengan pelayanannya.',
      name: 'Rizky P.',
      role: 'Karyawan',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    },
    {
      quote: 'Tampilan website nyaman, cari buku jadi gampang dan menyenangkan.',
      name: 'Sarah K.',
      role: 'Content Creator',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Apa kata mereka</h2>
          <p className="text-slate-600 text-sm">Ulasan jujur dari pelanggan setia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
