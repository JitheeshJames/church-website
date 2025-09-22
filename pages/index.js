export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h1>Athmachaithanya Prayer Center</h1>
      <p><strong>Location:</strong> Near Medical College, Kottayam</p>
      <p><strong>Founder:</strong> M.C. Joseph</p>

      <h2>Welcome!</h2>
      <p>
        This is the official website of Athmachaithanya Prayer Center.
        Explore prayer requests, upcoming events, and ways to support our ministry.
      </p>

      <nav style={{ marginTop: 20 }}>
        <a href="/prayer" style={{ marginRight: 15 }}>🙏 Prayer Requests</a>
        <a href="/events" style={{ marginRight: 15 }}>📅 Events</a>
        <a href="/give">💝 Give</a>
      </nav>
    </div>
  )
}
