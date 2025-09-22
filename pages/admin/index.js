import ProtectedRoute from "../../components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute>
      <div style={{ padding: 20 }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome! Use the menu to navigate to Prayers, Chat, Donations, and Charity Wing Members.</p>
      </div>
    </ProtectedRoute>
  );
}
