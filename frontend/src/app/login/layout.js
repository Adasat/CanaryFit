import ".././globals.css";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
