import { Star, Heart } from "lucide-react";

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 12.99,
    rating: 4.7,
    color: "from-indigo-100 to-indigo-200",
    emoji: "📘",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 14.99,
    rating: 4.9,
    color: "from-amber-100 to-amber-200",
    emoji: "📒",
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 13.49,
    rating: 4.8,
    color: "from-sky-100 to-sky-200",
    emoji: "📗",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 11.99,
    rating: 4.6,
    color: "from-rose-100 to-rose-200",
    emoji: "📕",
  },
];

export default function BooksSection() {
  return (
    <section id="books" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Featured Books
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Handpicked favorites from our editorial team
            </p>
          </div>
          <button className="hidden sm:inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <article
              key={book.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className={`aspect-[4/5] bg-gradient-to-br ${book.color} flex items-center justify-center text-5xl`}>
                <span className="select-none">{book.emoji}</span>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-1 font-semibold text-gray-900">
                  {book.title}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-sm text-gray-600">
                  {book.author}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-gray-700">{book.rating}</span>
                  </div>
                  <span className="font-semibold text-gray-900">${book.price.toFixed(2)}</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                    Add to cart
                  </button>
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/60 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
