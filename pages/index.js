import Header from "../components/Header";

export default function Home() {
  return (
    <>
      {/* Header with logo and navigation */}
      <Header />

      {/* Main content */}
      <div style={{ padding: 20, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
        <h1>Welcome to Athmachaithanya Prayer Center</h1>
        <p><strong>Location:</strong> Near Medical College, Kottayam</p>
        <p><strong>Founder:</strong> M.C. Joseph</p>

        <h2>About Us</h2>
        <p>
          Athmachaithanya Prayer Center is dedicated to serving the local community through prayer, fellowship, and ministry activities.
          Explore our website to join events, submit prayer requests, and support our mission.
        </p>

        <h2>Quick Links</h2>
        <nav style={{ marginTop: 20 }}>
          <a href="/prayer" style={{ marginRight: 15 }}>🙏 Prayer Requests</a>
          <a href="/events" style={{ marginRight: 15 }}>📅 Events</a>
          <a href="/give">💝 Give</a>
        </nav>
      </div>
    </>
  );
}
