import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/icons/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "../public/sass/main.scss";
import 'animate.css';
import InitAnimations from '../components/containers/InitAnimations';
import LayoutWrapper from './LayoutWrapper';
import Script from 'next/script';

export const metadata = {
  // title: "Netwise – IT Solutions & Technology NextJs Template",
  // description: "Netwise – IT Solutions & Technology NextJs Template",
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
      <body>
        
        <LayoutWrapper> 
          <InitAnimations />
          {children}
        </LayoutWrapper>
        <Script
          id="ze-snippet"
          strategy="lazyOnload"
          src="https://static.zdassets.com/ekr/snippet.js?key=e3ca5133-37b8-460b-bdc3-25e8d82513ff"
        />
      </body>
    </html>
  );
}
