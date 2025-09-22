import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header with logo and navigation */}
      <Header />

      {/* Main content */}
      <div style={{ padding: 20, fontFamily: 'sans-serif', lineHeight: 1.6, maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ color: '#2c6e49' }}>Welcome to Athmachaithanya Prayer Center</h1>
        <p><strong>Location:</strong> Near Medical College, Kottayam</p>
        <p><strong>Founder:</strong> M.C. Joseph</p>

        <h2>About Us</h2>
        <p>
          Athmachaithanya Prayer Center is dedicated to serving the local community through prayer, fellowship, and ministry activities.
          Explore our website to join events, submit prayer requests, and support our mission.
        </p>

        <h2>Quick Links</h2>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 15, marginTop: 20 }}>
          <Link href="/prayer">
            <a style={{ padding: 10, borderRadius: 8, backgroundColor: '#f0fff4', textDecoration: 'none', color: '#2c6e49' }}>🙏 Prayer Requests</a>
          </Link>
          <Link href="/events">
            <a style={{ padding: 10, borderRadius: 8, backgroundColor: '#f0f7ff', textDecoration: 'none', color: '#1a3e6b' }}>📅 Events</a>
          </Link>
          <Link href="/give">
            <a style={{ padding: 10, borderRadius: 8, backgroundColor: '#fff0f7', textDecoration: 'none', color: '#6b1a5f' }}>💝 Give</a>
          </Link>
          <Link href="/login">
            <a style={{ padding: 10, borderRadius: 8, backgroundColor: '#fffbe6', textDecoration: 'none', color: '#b38f00' }}>🔐 Login</a>
          </Link>
        </nav>
      </div>
    </>
  );
}
