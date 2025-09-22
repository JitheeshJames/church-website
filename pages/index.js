import Header from "../components/Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "Arial, sans-serif", color: "#2c6e49" }}>
        {/* Hero Section with Fade-in Motion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ fontSize: "2.5rem", marginBottom: 20 }}
            >
              Welcome to Athmachaithanya Prayer Center
            </motion.h1>
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ fontSize: "1.2rem", marginBottom: 20 }}
            >
              Near Medical College, Kottayam | Founder: M.C. Joseph
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Links with hover and motion */}
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
          ].map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link href={item.link}>
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
                  }}
                >
                  {item.name}
                </a>
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Featured Images Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ padding: "50px 20px", textAlign: "center" }}
        >
          <h2>Our Community Activities</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
              marginTop: 30,
            }}
          >
            {[
              "https://images.unsplash.com/photo-1525688723276-58b92b2cae39?auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1508873699372-7ae2d1bbf04f?auto=format&fit=crop&w=500&q=60",
              "https://images.unsplash.com/photo-1516910817561-0cfa3a1b5c3f?auto=format&fit=crop&w=500&q=60",
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Activity ${i + 1}`}
                style={{
                  borderRadius: 12,
                  width: 250,
                  height: 150,
                  objectFit: "cover",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              />
            ))}
          </div>
        </motion.section>

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
