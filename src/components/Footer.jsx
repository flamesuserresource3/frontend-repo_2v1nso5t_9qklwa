export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">TokoBuku</div>
            <p className="text-slate-600 mt-2">Tempat terbaik menemukan buku favoritmu. Pengiriman cepat, pilihan lengkap.</p>
          </div>
          <div>
            <div className="font-semibold">Bantuan</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Cara Belanja</a></li>
              <li><a href="#" className="hover:text-slate-900">Pembayaran</a></li>
              <li><a href="#" className="hover:text-slate-900">Pengiriman</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Ikuti Kami</div>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Instagram</a></li>
              <li><a href="#" className="hover:text-slate-900">Twitter</a></li>
              <li><a href="#" className="hover:text-slate-900">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} TokoBuku. All rights reserved.</div>
      </div>
    </footer>
  );
}
