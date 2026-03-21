import './globals.css';

export const metadata = {
  title: 'Nooscope',
  description: 'Nooscope',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
