import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BEX ERP - Run Everything From One System',
  description:
    'An on-premise ERP built for leaders who want visibility, control, and confidence, without operational complexity.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&family=Sora&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
