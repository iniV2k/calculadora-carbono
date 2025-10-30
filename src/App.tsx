import AppRouter from './router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
