export default function Privacy() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>HALIO PRIVACY POLICY</h1>
      <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '40px' }}>
        Last Updated: November 9, 2025
      </p>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>What We Collect</h2>
      <p>When you use Halio, we collect:</p>
      <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
        <li>Account information (if you create an account)</li>
        <li>App usage data (sessions completed, features used)</li>
        <li>Device information (device type, OS version)</li>
        <li>Subscription and payment status (processed through Apple)</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>How We Use It</h2>
      <p>We use this information to:</p>
      <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
        <li>Provide and improve the breathwork experience</li>
        <li>Process your subscription</li>
        <li>Fix bugs and improve app performance</li>
        <li>Send important updates about your subscription</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>Data Sharing</h2>
      <p>We do not sell your personal information. We only share data with:</p>
      <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
        <li>Apple (for payment processing and app distribution)</li>
        <li>Service providers necessary to operate the app</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>Your Rights</h2>
      <p>You can:</p>
      <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
        <li>Delete your account and data at any time</li>
        <li>Contact us about your data at support@halio.app</li>
        <li>Opt out of non-essential communications</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>Children's Privacy</h2>
      <p style={{ marginBottom: '30px' }}>Halio is not intended for users under 13.</p>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>Changes</h2>
      <p style={{ marginBottom: '30px' }}>
        We may update this policy and will notify users of significant changes.
      </p>

      <h2 style={{ fontSize: '1.8rem', marginTop: '30px', marginBottom: '15px' }}>Contact</h2>
      <p>Questions? Email collin@halio.app</p>
    </div>
  )
}
