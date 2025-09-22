import Header from "../components/Header";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Prayer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [prayers, setPrayers] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetchPrayers();
  }, []);

  const fetchPrayers = async () => {
    const { data } = await supabase
      .from("prayer_requests")
      .select("*")
      .order("date", { ascending: false });
    setPrayers(data || []);
  };

  const submitPrayer = async () => {
    if (!name || !email || !phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("prayer_requests").insert([
      {
        requester_name: name,
        email,
        phone,
        message,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Failed to submit prayer request");
    } else {
      setSuccessMsg("Prayer request submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      fetchPrayers();
    }
  };

  return (
    <>
      <Header />
      <main
        style={{
          padding: 20,
          fontFamily: "Arial, sans-serif",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#2c6e49", textAlign: "center" }}>
          Prayer Requests
        </h1>

        {successMsg && (
          <p
            style={{
              color: "#0070f3",
              backgroundColor: "#e0f7ff",
              padding: 10,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            {successMsg}
          </p>
        )}

        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
          <textarea
            placeholder="Write your prayer..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ ...inputStyle, minHeight: 100 }}
          />
          <button onClick={submitPrayer} style={buttonStyle}>
            Submit Prayer
          </button>
        </div>

        <section style={{ marginTop: 40 }}>
          <h2>Recent Prayer Requests</h2>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {prayers.map((p) => (
              <li
                key={p.id}
                style={{
                  padding: 10,
                  borderBottom: "1px solid #eee",
                  marginBottom: 5,
                }}
              >
                <p><strong>{p.requester_name}</strong> ({p.email}, {p.phone})</p>
                <p>{p.message}</p>
                <small>{new Date(p.date).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

const inputStyle = {
  padding: 12,
  borderRadius: 8,
  border: "1px solid #ccc",
  width: "100%",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: 12,
  borderRadius: 8,
  border: "none",
  backgroundColor: "#0070f3",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};
