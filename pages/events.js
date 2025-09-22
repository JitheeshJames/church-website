import Header from "../components/Header";

export default function Events() {
  const events = [
    { title: "Sunday Worship", time: "Every Sunday, 9 AM" },
    { title: "Youth Meeting", time: "First Friday of every month, 6 PM" },
    { title: "Prayer Night", time: "Every Wednesday, 7 PM" },
  ];

  return (
    <>
      {/* Header with logo and navigation */}
      <Header />

      {/* Page content */}
      <div style={{ padding: 20, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
        <h1>📅 Upcoming Events</h1>
        <p>Stay updated with our church events and gatherings.</p>

        {/* Events list */}
        <ul style={{ marginTop: 20 }}>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.title}:</strong> {event.time}
            </li>
          ))}
        </ul>

        <p style={{ marginTop: 20 }}>
          For more details or to join an event, contact the church office.
        </p>
      </div>
    </>
  );
}
