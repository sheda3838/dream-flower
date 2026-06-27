import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-accent/30 selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Further sections like Services, Gallery, Booking will go here */}
      </main>
    </div>
  );
}

export default App;
