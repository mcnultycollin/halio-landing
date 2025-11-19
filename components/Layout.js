import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
          <span className="spacer" />
          <Link href="/privacy">Privacy</Link>
          <span className="spacer" />
          <Link href="/support">Support</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">© {new Date().getFullYear()} Halio</footer>
      <style jsx>{`
        .container { max-width: 760px; margin: 0 auto; padding: 24px; }
        .header { margin-bottom: 24px; }
        nav a { margin-right: 12px; }
        .spacer { margin-right: 12px; }
        .footer { margin-top: 48px; color: #666; font-size: 12px; }
      `}</style>
    </div>
  );
}

