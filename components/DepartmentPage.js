import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function DepartmentPage({ departmentName }) {
  const [funds, setFunds] = useState([]);
  const [committee, setCommittee] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: fundsData } = await supabase.from(`${departmentName}_funds`).select("*").order("date", { ascending: false });
    const { data: committeeData } = await supabase.from(`${departmentName}_committee`).select("*");
    const { data: activitiesData } = await supabase.from(`${departmentName}_activities`).select("*").order("activity_date", { ascending: true });

    setFunds(fundsData || []);
    setCommittee(committeeData || []);
    setActivities(activitiesData || []);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ color: '#2c6e49', textAlign: 'center', textTransform: 'capitalize' }}>{departmentName.replace("_", " ")} Department</h1>

      <section style={{ marginTop: 30 }}>
        <h2>Funds</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Funder Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {funds.map(f => (
              <tr key={f.id}>
                <td>{f.funder_name}</td>
                <td>{f.amount}</td>
                <td>{new Date(f.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Committee Members</h2>
        <ul>
          {committee.map(c => (
            <li key={c.id}>{c.member_name} - {c.role}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Activities</h2>
        <ul>
          {activities.map(a => (
            <li key={a.id}>
              <strong>{a.title}</strong> ({new Date(a.activity_date).toLocaleDateString()})<br/>
              {a.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: 10,
};
