import 'bootstrap/dist/css/bootstrap.min.css';
import "@/public/icons/css/all.min.css";
import "yet-another-react-lightbox/styles.css";
import "@/public/sass/main.scss";
import 'animate.css';
import InitAnimations from '@/components/containers/InitAnimations';
import LayoutWrapper from './LayoutWrapper';

export const metadata = {
  title: "Netwise – IT Solutions & Technology NextJs Template",
  description: "Netwise – IT Solutions & Technology NextJs Template",
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
      name: "ElegantPixels",
      url: "https://themeforest.net/user/elegantpixels",
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
      </body>
    </html>
  );
}
