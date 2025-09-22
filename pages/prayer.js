import { useState } from "react";
import Header from "../components/Header";

export default function Prayer() {
  const [prayers, setPrayers] = useState([]);
  const [newPrayer, setNewPrayer] = useState("");

  const addPrayer = () => {
    if (newPrayer.trim() !== "") {
      setPrayers([...prayers, newPrayer]);
      setNewPrayer("");
    }
  };

  return (
    <>
      {/* Header with logo and navigation */}
      <Header />

      {/* Page content */}
      <div style={{ padding: 20, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
        <h1>🙏 Prayer Requests</h1>
        <p>Submit your prayer request below. Others can also view and pray for you.</p>

        {/* Input form */}
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            placeholder="Enter your prayer request"
            value={newPrayer}
            onChange={(e) => setNewPrayer(e.target.value)}
            style={{ padding: 8, width: "70%", marginRight: 10 }}
          />
          <button onClick={addPrayer} style={{ padding: "8px 15px" }}>Add</button>
        </div>

        {/* Display prayer requests */}
        <h2>🕊️ Requests List</h2>
        <ul>
          {prayers.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
