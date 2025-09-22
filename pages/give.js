import Header from "../components/Header";

export default function Give() {
  return (
    <>
      {/* Header with logo and navigation */}
      <Header />

      {/* Page content */}
      <div style={{ padding: 20, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
        <h1>💝 Support Our Ministry</h1>
        <p>You can give offerings via UPI or bank transfer. Every contribution helps our church activities.</p>

        {/* UPI Section */}
        <h2 style={{ marginTop: 20 }}>UPI Payment</h2>
        <img
          src="/assets/upi-qr.png"
          alt="UPI QR"
          width="200"
          style={{ display: "block", marginBottom: 10 }}
        />
        <p>UPI ID: yourupi@bank</p>

        {/* Bank Transfer Section */}
        <h2 style={{ marginTop: 20 }}>Bank Transfer</h2>
        <p>
          Account Name: Athmachaithanya Prayer Center<br />
          Account Number: 1234567890<br />
          IFSC: ABCD0123456<br />
          Bank: XYZ Bank
        </p>

        <p style={{ marginTop: 20 }}>
          After transfer, please notify the church office for proper acknowledgment.
        </p>
      </div>
    </>
  );
}
