import { PropsWithChildren } from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body>
        {children}
        <div id='portal'></div>
      </body>
    </html>
  );
}
