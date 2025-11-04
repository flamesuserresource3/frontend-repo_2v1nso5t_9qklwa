import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SplineShowcase from "./components/SplineShowcase";
import BooksSection from "./components/BooksSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SplineShowcase />
        <BooksSection />
      </main>
      <footer className="border-t py-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} BlueBooks — Crafted with care for avid readers.
        </p>
      </footer>
    </div>
  );
}

export default App;
