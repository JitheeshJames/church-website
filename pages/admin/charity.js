import ProtectedRoute from "../../components/ProtectedRoute";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Charity() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("charity_wing_members")
      .select("*")
      .order("joined_on", { ascending: true });
    if (!error) setMembers(data);
  };

  return (
    <ProtectedRoute>
      <div style={{ padding: 20 }}>
        <h1>👥 Charity Wing Members</h1>
        <ul>
          {members.map((m) => (
            <li key={m.id}>
              {m.name} - {m.role} ({m.department || "General"})
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}
