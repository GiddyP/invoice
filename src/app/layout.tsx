'use client';
import '@styles/globals.css';;
import { Poppins } from 'next/font/google';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

interface PageData {
  title: string;
  description: string;
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getPageData = (pathname: string): PageData => {
    const defaultData = {
      title: "Invoice",
      description: "This is Invoice Page",
    };

    const pageData: Record<string, PageData> = {
      "/": {
        title: "Home Page",
        description: "This is Invoice Home Page",
      }
    };

    return pageData[pathname] || defaultData;
  };

  const { title, description } = getPageData(pathname);

  const metadata = {
    title: `Invoice | ${ title }`,
    description,
    icon: "/vercel.svg",
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${ poppins.className } font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
}