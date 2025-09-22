import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      borderBottom: "1px solid #ddd",
      backgroundColor: "#f9f9f9"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/assets/logo.png" alt="Logo" width="60" style={{ marginRight: 15 }} />
        <h2 style={{ margin: 0 }}>Athmachaithanya Prayer Center</h2>
      </div>

      <nav>
        <Link href="/"><a style={{ marginRight: 15 }}>Home</a></Link>
        <Link href="/prayer"><a style={{ marginRight: 15 }}>Prayer</a></Link>
        <Link href="/events"><a style={{ marginRight: 15 }}>Events</a></Link>
        <Link href="/give"><a>Give</a></Link>
      </nav>
    </header>
  )
}
