import Header from "../../components/Header";
import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Departments() {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetchOverview();
  }, []);

  const fetchOverview = async () => {
    const departments = ["youth", "ladies", "service", "sunday_school"];
    const data = [];

    for (const dept of departments) {
      const { data: funds } = await supabase.from(`${dept}_funds`).select("id, amount");
      const { data: members } = await supabase.from(`${dept}_committee`).select("id");
      const { data: activities } = await supabase.from(`${dept}_activities`).select("id");

      data.push({
        name: dept.replace("_", " ").toUpperCase(),
        totalFunds: funds.reduce((sum, f) => sum + Number(f.amount), 0),
        totalMembers: members.length,
        totalActivities: activities.length,
        link: `/admin/${dept}`
      });
    }
    setOverview(data);
  };

  return (
    <ProtectedRoute>
      <Header />
      <main style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ color: "#2c6e49", textAlign: "center" }}>Departments Overview</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 30 }}>
          {overview.map((dept) => (
            <Link key={dept.name} href={dept.link}>
              <a style={cardStyle}>
                <h2>{dept.name}</h2>
                <p>💰 Funds: ₹{dept.totalFunds}</p>
                <p>👥 Members: {dept.totalMembers}</p>
                <p>📅 Activities: {dept.totalActivities}</p>
                <p style={{ color: "#0070f3", marginTop: 10 }}>View Details →</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </ProtectedRoute>
  );
}

const cardStyle = {
  flex: "1 1 220px",
  padding: 20,
  borderRadius: 12,
  border: "1px solid #eee",
  backgroundColor: "#f0fff4",
  textDecoration: "none",
  color: "#2c6e49",
  cursor: "pointer",
  transition: "transform 0.2s",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
};
