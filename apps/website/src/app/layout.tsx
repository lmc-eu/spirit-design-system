import { AppProvider } from '@local/ui/AppProvider';
import { inter } from '@local/ui/fonts';
import { Header } from '@local/ui/Header';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../ui/globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Spirit Design System',
    default: 'Spirit Design System',
  },
  description: 'Spirit Design System',
  metadataBase: new URL('https://spiritdesignsystem.com'),
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
