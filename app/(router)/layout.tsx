import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Layout } from '@/app/components';
import { cn } from '@/app/lib';
import '@/app/styles/globals.scss';

const metadata: Metadata = {
  title: 'MOVIEGO',
  description: 'MOVIEGO',
};

const pretendard = localFont({
  src: '../../public/fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={cn(pretendard.variable)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
