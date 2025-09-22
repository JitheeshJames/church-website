import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Prayers() {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    fetchPrayers();
  }, []);

  const fetchPrayers = async () => {
    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .order("date", { ascending: false });
    if (!error) setPrayers(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🙏 Prayer Requests</h1>
      <ul>
        {prayers.map((p) => (
          <li key={p.id}>
            <strong>{p.requester_name}:</strong> {p.message} <em>({p.department || "General"})</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
