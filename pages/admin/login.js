import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMessage(error.message);
    else setMessage("Check your email for login link!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Login</h1>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, width: "70%", marginRight: 10 }}
      />
      <button onClick={handleLogin}>Send Magic Link</button>
      <p>{message}</p>
    </div>
  );
}
