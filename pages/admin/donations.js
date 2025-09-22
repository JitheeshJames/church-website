import ProtectedRoute from "../../components/ProtectedRoute";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    const { data, error } = await supabase
      .from("new_donations")
      .select("*")
      .order("date", { ascending: false });
    if (!error) setDonations(data);
  };

  return (
    <ProtectedRoute>
      <div style={{ padding: 20 }}>
        <h1>💝 New Donations</h1>
        <ul>
          {donations.map((d) => (
            <li key={d.id}>
              <strong>{d.donor_name}:</strong> ₹{d.amount} <em>({d.department || "General"})</em> - {d.purpose || "No purpose"}
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}
