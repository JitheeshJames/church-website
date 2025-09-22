import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#2c6e49', padding: '10px 20px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo / Church Name */}
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>
          <Link href="/">
            <a style={{ color: 'white', textDecoration: 'none' }}>Athmachaithanya Prayer Center</a>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div style={{ display: 'none' }} className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: 15 }} className={menuOpen ? "open" : ""}>
          <Link href="/"><a style={linkStyle}>Home</a></Link>
          <Link href="/prayer"><a style={linkStyle}>Prayer</a></Link>
          <Link href="/events"><a style={linkStyle}>Events</a></Link>
          <Link href="/give"><a style={linkStyle}>Give</a></Link>
          <Link href="/login"><a style={linkStyle}>Login</a></Link>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            display: ${menuOpen ? 'flex' : 'none'};
            flex-direction: column;
            margin-top: 10px;
          }
          .mobile-menu {
            display: block;
            cursor: pointer;
          }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '5px 10px',
  borderRadius: 5,
  transition: 'background 0.3s',
  cursor: 'pointer'
};
