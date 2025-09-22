import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ color: '#2c6e49' }}>Athmachaithanya Prayer Center</h1>
        <p style={{ color: '#555', fontSize: 18 }}>Welcome to our community</p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
        <Link href="/events">
          <div style={{ flex: '1 1 250px', padding: 20, borderRadius: 10, border: '1px solid #eee', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f0fff4' }}>
            <h3>Events</h3>
            <p>Check upcoming events</p>
          </div>
        </Link>
        <Link href="/prayer">
          <div style={{ flex: '1 1 250px', padding: 20, borderRadius: 10, border: '1px solid #eee', textAlign: 'center', cursor: 'pointer', backgroundColor: '#fff7f0' }}>
            <h3>Prayer Requests</h3>
            <p>Submit your prayers</p>
          </div>
        </Link>
        <Link href="/give">
          <div style={{ flex: '1 1 250px', padding: 20, borderRadius: 10, border: '1px solid #eee', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f0f7ff' }}>
            <h3>Give</h3>
            <p>Support our ministry</p>
          </div>
        </Link>
        <Link href="/login">
          <div style={{ flex: '1 1 250px', padding: 20, borderRadius: 10, border: '1px solid #eee', textAlign: 'center', cursor: 'pointer', backgroundColor: '#fff0f7' }}>
            <h3>Login</h3>
            <p>Admin/Member Access</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
