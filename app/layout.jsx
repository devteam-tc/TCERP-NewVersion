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
        {/* Start of ChatBot (www.chatbot.com) code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
              window.__ow.organizationId = "413586af-d76b-4189-8c91-eb75dc38b0ab";
              window.__ow.template_id = "2dcf3694-fd08-45b0-ab05-ea7c7990433f";
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
