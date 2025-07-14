import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* Section isi halaman */}
      <main className="pt-16"> {/* Untuk menghindari overlap dengan navbar fixed */}
        <section id="home" className="min-h-screen bg-gray-900 text-white">
          <h1 className="text-4xl font-bold p-8">Welcome to My Portfolio</h1>
        </section>

        <section id="about" className="min-h-screen bg-gray-800 text-white">
          <h2 className="text-3xl font-bold p-8">About Me</h2>
          <About/>
        </section>

        <section id="projects" className="min-h-screen bg-gray-700 text-white">
          <h2 className="text-3xl font-bold p-8">Projects</h2>
          <Projects/>
        </section>

        <section id="contact" className="min-h-screen bg-gray-600 text-white">
          <h2 className="text-3xl font-bold p-8">Contact</h2>
          <Contact/>
        </section>
      </main>
    </>
  );
}

export default App;
