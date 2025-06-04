import 'bootstrap/dist/css/bootstrap.min.css';
// import "../public/icons/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "../public/sass/main.scss";
import 'animate.css';
import InitAnimations from '../components/containers/InitAnimations';
import LayoutWrapper from './LayoutWrapper';
import Head from 'next/head';

export const metadata = {
  keywords: [
    "business solutions",
    "consulting",
    "creative agency",
    "cyber security",
    "data services",
    "digital agency",
    "digital transformation",
    "it consulting",
    "IT services",
    "IT solutions",
    "saas",
    "software company",
    "tech startup",
    "technology innovation",
    "technology services",
    "React",
    "Next.js",
  ],
  authors: [
    {
      name: "Tech Cloud ERP Software Pvt Ltd",
      url: "https://techclouderp.com/",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ External Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <LayoutWrapper>
          <InitAnimations />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
