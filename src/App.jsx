import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Music from './components/Music';
import Info from './components/Info';
import Gift from './components/Gift';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <Story />
      <EventDetails />
      <RSVP />
      <Music />
      <Info />
      <Gift />
      <Gallery />

      <footer style={{ padding: '40px', textAlign: 'center', fontSize: '0.9rem', opacity: 0.8, color: 'var(--color-text-secondary)' }}>
        <p>Hecho con <span style={{ color: 'red' }}>❤️</span> y por Vicky y Gon</p>
      </footer>
    </>
  )
}

export default App
