import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BooksSection from './components/BooksSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Toko Buku | Temukan Bacaan Favoritmu';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <BooksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
