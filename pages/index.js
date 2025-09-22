import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "Arial, sans-serif", color: "#2c6e49" }}>
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: 20,
              borderRadius: 12,
            }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: 20 }}>
              Welcome to Athmachaithanya Prayer Center
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: 20 }}>
              Near Medical College, Kottayam | Founder: M.C. Joseph
            </p>
            <Link href="/prayer">
              <a
                style={{
                  backgroundColor: "#0070f3",
                  color: "white",
                  padding: "12px 25px",
                  borderRadius: 8,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Submit a Prayer Request 🙏
              </a>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section style={{ padding: "50px 20px", textAlign: "center" }}>
          <h2>About Us</h2>
          <p style={{ maxWidth: 700, margin: "20px auto", lineHeight: 1.6 }}>
            Athmachaithanya Prayer Center is dedicated to serving the local
            community through prayer, fellowship, and ministry activities.
            Join us in events, give your support, and experience a calm and
            interactive spiritual journey.
          </p>
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1470&q=80"
            alt="Church image"
            style={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 12,
              marginTop: 20,
            }}
          />
        </section>

        {/* Quick Links */}
        <section
          style={{
            padding: "50px 20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {[
            { name: "🙏 Prayer Requests", link: "/prayer" },
            { name: "📅 Events", link: "/events" },
            { name: "💝 Give", link: "/give" },
            { name: "📊 Departments", link: "/admin/departments" },
            { name: "👤 Login", link: "/login" },
          ].map((item) => (
            <Link key={item.name} href={item.link}>
              <a
                style={{
                  flex: "1 1 180px",
                  backgroundColor: "#f0fff4",
                  borderRadius: 12,
                  padding: 20,
                  textAlign: "center",
                  color: "#2c6e49",
                  fontWeight: "bold",
                  textDecoration: "none",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                }}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </section>

        {/* Featured Section with Motion / Placeholder */}
        <section style={{ padding: "50px 20px", textAlign: "center" }}>
          <h2>Our Community Activities</h2>
          <p style={{ maxWidth: 700, margin: "20px auto", lineHeight: 1.6 }}>
            We host prayer meetings, community events, charity programs, and
            more. Join us to experience a caring and interactive environment.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
              marginTop: 30,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1525688723276-58b92b2cae39?auto=format&fit=crop&w=500&q=60"
              alt="Activity 1"
              style={{ borderRadius: 12, width: 250, height: 150, objectFit: "cover" }}
            />
            <img
              src="https://images.unsplash.com/photo-1508873699372-7ae2d1bbf04f?auto=format&fit=crop&w=500&q=60"
              alt="Activity 2"
              style={{ borderRadius: 12, width: 250, height: 150, objectFit: "cover" }}
            />
            <img
              src="https://images.unsplash.com/photo-1516910817561-0cfa3a1b5c3f?auto=format&fit=crop&w=500&q=60"
              alt="Activity 3"
              style={{ borderRadius: 12, width: 250, height: 150, objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: 30,
            backgroundColor: "#2c6e49",
            color: "white",
          }}
        >
          &copy; {new Date().getFullYear()} Athmachaithanya Prayer Center
        </footer>
      </main>
    </>
  );
          }
