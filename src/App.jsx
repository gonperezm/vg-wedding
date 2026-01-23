import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Music from './components/Music';
import Consejos from './components/Consejos';
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
      <Consejos />
      <Gallery />

      <footer style={{
        padding: '60px 20px 40px',
        textAlign: 'center',
        background: 'var(--color-bg-light)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img
          src="/images/vickigonvickigon.png"
          alt="Vicky & Gon"
          style={{
            width: '200px',
            height: 'auto',
            opacity: 0.9
          }}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          color: 'var(--color-text-secondary)',
          fontSize: '0.95rem'
        }}>
          <p style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            margin: 0
          }}>
            Hecho con
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)" style={{ display: 'inline-block' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            para nuestros invitados
          </p>
          <p style={{
            fontWeight: '500',
            letterSpacing: '0.05em',
            margin: 0,
            color: 'var(--color-text-primary)'
          }}>
            Vicky & Gon · 22.08.2026 · Foz do Iguaçu
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
