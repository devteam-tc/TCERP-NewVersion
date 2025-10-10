import 'bootstrap/dist/css/bootstrap.min.css';
import "yet-another-react-lightbox/styles.css";
import "../public/sass/main.scss";
import 'animate.css';
import InitAnimations from '../components/containers/InitAnimations';
import LayoutWrapper from './LayoutWrapper';
import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: 'Tech Cloud ERP – Cloud ERP Software for Indian Businesses',
  description: 'Tech Cloud ERP offers comprehensive cloud-based ERP solutions for businesses of all sizes. Streamline your operations with our powerful business management software.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/ico' },
    ]
  },
  keywords: [
    "ERP software",
    "cloud ERP",
    "business management",
    "enterprise resource planning",
    "inventory management",
    "accounting software",
    "business solutions",
    "SaaS ERP",
    "business automation",
    "Tech Cloud ERP"
  ],
  authors: [
    {
      name: 'Tech Cloud ERP Software Pvt Ltd',
      url: 'https://techclouderp.com',
      sameAs: [
        'https://www.instagram.com/techclouderp/',
        'https://www.facebook.com/TechCloudERPSoftwareSolutions',
        'https://www.linkedin.com/company/13619340',
        'https://in.pinterest.com/techclouderp/',
        'https://www.youtube.com/channel/UChUCWRHTzZkYEPRR-AauNkA',
        'https://twitter.com/TechCloudERP'
      ]
    }
  ],
  openGraph: {
    title: 'Tech Cloud ERP | Best Cloud-Based ERP Software in India',
    type: 'website',
    url: 'https://techclouderp.com/',
    images: [{
      url: 'https://techclouderp.com/logo.webp',
      width: 1200,
      height: 630,
      alt: 'Tech Cloud ERP - Business Management Solutions',
    }],
    description: 'Tech Cloud ERP offers scalable, cloud-based ERP solutions tailored for small and mid-sized businesses. Streamline operations, enhance productivity and gain real-time insights with our customizable modules.',
    siteName: 'Tech Cloud ERP',
    locale: 'en_IN',
    publishedTime: '2023-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Tech Cloud ERP Software Pvt Ltd'],
    tags: ['ERP Software', 'Cloud ERP', 'Business Management', 'India']
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TechCloudERP',
    creator: '@TechCloudERP',
    title: 'Tech Cloud ERP - Cloud-Based Business Management Solutions',
    description: 'Streamline your business operations with our comprehensive cloud-based ERP solutions.',
    images: [{
      url: 'https://techclouderp.com/images/twitter-image.jpg',
      alt: 'Tech Cloud ERP - Transform Your Business',
      width: 1200,
      height: 628,
    }],
    domain: 'techclouderp.com'
  },
  // Additional social media meta
  other: {
    'fb:app_id': 'YOUR_FACEBOOK_APP_ID', // Add your Facebook App ID if available
    'instagram:username': 'techclouderp',
    'youtube:channel': 'UChUCWRHTzZkYEPRR-AauNkA',
    'pinterest:username': 'techclouderp',
    'linkedin:company': '13619340',
    'twitter:site': '@TechCloudERP',
    'google-site-verification': 'tYN1pLqI0Tr2O39pXENnpPijDUfufS4bOQM0sne-r38',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add your Google Search Console verification code
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE', // Add your Yandex verification code if needed
  },
  metadataBase: new URL('https://techclouderp.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
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
        <script src="//code.tidio.co/xzxnjajm1uzqszvjdr4bscq9hfvqpeho.js"></script>
        {/* Start of ChatBot (www.chatbot.com) code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
  window.__ow.organizationId = "65d78923-57ed-4dba-921f-a0cd08fe9f6b";
  window.__ow.template_id = "c9103514-33ac-432a-be6b-ea307c4b879a";
  window.__ow.integration_name = "manual_settings";
  window.__ow.product_name = "chatbot";   
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
            `
          }}
        />
        <noscript>
          You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
        </noscript>
        {/* End of ChatBot code */}
      </body>
    </html>
  );
}