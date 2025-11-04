import { useMemo, useState } from 'react';
import { Star } from 'lucide-react';

const sampleBooks = [
  {
    id: 1,
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    price: 89000,
    rating: 4.8,
    category: 'Pengembangan Diri',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Laut Bercerita',
    author: 'Leila S. Chudori',
    price: 79000,
    rating: 4.7,
    category: 'Fiksi',
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 129000,
    rating: 4.9,
    category: 'Pengembangan Diri',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    price: 99000,
    rating: 4.8,
    category: 'Fiksi',
    image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 139000,
    rating: 4.8,
    category: 'Non-Fiksi',
    image: 'https://images.unsplash.com/photo-1605732021795-68ea025c3d37?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXBpZW5zfGVufDB8MHx8fDE3NjIyMTkxNjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Negeri 5 Menara',
    author: 'Ahmad Fuadi',
    price: 85000,
    rating: 4.6,
    category: 'Fiksi',
    image: 'https://images.unsplash.com/photo-1462076537281-8b6ad187b75b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWdlcmklMjA1JTIwTWVuYXJhfGVufDB8MHx8fDE3NjIyMTkxNjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

function formatIDR(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

function Rating({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < full ? 'fill-amber-400 text-amber-400' : half && i === full ? 'fill-amber-300 text-amber-300' : 'text-slate-300'}`} />
      ))}
      <span className="ml-1 text-xs text-slate-500">{value.toFixed(1)}</span>
    </div>
  );
}

function BookCard({ book }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden">
        <img src={book.image} alt={book.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="p-4">
        <div className="text-[11px] uppercase tracking-wide text-indigo-600 font-medium">{book.category}</div>
        <h3 className="mt-1 font-semibold text-slate-900 line-clamp-2">{book.title}</h3>
        <p className="text-sm text-slate-600 mt-0.5">{book.author}</p>
        <div className="mt-2"><Rating value={book.rating} /></div>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-indigo-600">{formatIDR(book.price)}</span>
          <button className="text-sm rounded-lg border border-slate-200 px-3 py-1.5 hover:bg-slate-50">Tambah</button>
        </div>
      </div>
    </div>
  );
}

export default function BooksSection() {
  const [tab, setTab] = useState('Semua');
  const categories = ['Semua', 'Fiksi', 'Non-Fiksi', 'Pengembangan Diri'];

  const books = useMemo(() => {
    if (tab === 'Semua') return sampleBooks;
    return sampleBooks.filter((b) => b.category === tab);
  }, [tab]);

  return (
    <section id="populer" className="py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Pilihan Buku Untukmu</h2>
          <p className="text-slate-600 text-sm">Koleksi kurasi dengan rating tinggi dari pembaca</p>
        </div>
      </div>

      <div id="kategori" className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setTab(c)}
            className={`text-sm rounded-full border px-4 py-1.5 transition-colors ${
              tab === c ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-200 hover:bg-slate-50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
