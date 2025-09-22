import Header from "../components/Header";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`, // Redirect after login
      },
    });

    if (error) {
      console.error(error);
      alert("Failed to send login link");
    } else {
      setMessage(
        `Check your email (${email}) for the login link! It may take a few seconds.`
      );
    }
  };

  return (
    <>
      <Header />
      <main
        style={{
          padding: 20,
          fontFamily: "Arial, sans-serif",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#2c6e49", textAlign: "center" }}>Login</h1>

        {message && (
          <p
            style={{
              backgroundColor: "#e0f7ff",
              padding: 10,
              borderRadius: 8,
              color: "#0070f3",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            {message}
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleLogin} style={buttonStyle}>
            Send Login Link
          </button>
        </div>
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
