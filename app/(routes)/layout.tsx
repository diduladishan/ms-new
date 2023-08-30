import { MainNav } from '@/components/main-nav';
import Sidebar from '@/components/sidebar';
import { Toaster } from '@/components/ui/toaster';
import AuthProvider from '@/providers/authProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../redux/provider';
import './globals.css';
import { ThemeProvider } from '@/providers/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sphiria Digita Studio | EMS',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AuthProvider>
            <Providers>
              <div className='flex'>
                <Sidebar />
                <div>
                  <MainNav />
                  {children}
                </div>
              </div>
              <Toaster />
            </Providers>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

{
  /* <div className='flex'>
   <Sidebar /> 
  <div className='space-y-6 p-10 pb-16'>
    <div className='space-y-0.5'>
      <h2 className='text-2xl font-bold tracking-tight'>
        Organization Management
      </h2>
      <p className='text-muted-foreground'>
        You can manage your organization departments and employees here.
      </p>
    </div>
    <Separator className='my-6' />
    <div className='flex flex-col justify-center items-center space-y-8 lg:space-x-12 lg:space-y-0'>
      <aside className='-mx-4 w-full'>
        <OrganizationSidebarNav items={organizationSidebarNavItems} />
      </aside>
      <div className='flex max-w-full'>{children}</div>
    </div>
  </div>
</div>; */
}
