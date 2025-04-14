import CalendlyScript from "@/components/containers/calendly/CalendlyScript";
import Header from "@/components/layout/header/Header"
import PageHeader from "@/components/layout/PageHeader";
import Footer from "@/components/layout/footer/Footer"
import "./demo.scss";

// Generate Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Book a Demo | Tech Cloud ERP",
    description:
      "Schedule a live, personalized demo of TechCloud ERP to explore key features, streamline your business processes, and get expert insights.",
    keywords: [
      "TechCloud ERP demo",
      "ERP software demo",
      "Book a demo",
      "Schedule ERP demo",
      "Cloud ERP demo",
      "Manufacturing ERP demo",
      "Business management software demo",
      "ERP solution consultation",
      "TechCloud live demo",
      "Enterprise software demo",
    ],
  };
}

// Generate Static Params (for future expansions)
export function generateStaticParams() {
  return [{ slug: "demo" }];
}

export default function DemoPage() {

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Demo', link: null }
      ];
  return (
        <>
            <Header/>
              <PageHeader title="Book A Demo" breadcrumbs={breadcrumbs}/>
              <CalendlyScript />
              {/* <section className="section">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h1 className="heading">Book A Demo</h1>
                      <p className="description">
                        Scheduling a live, personalized product demonstration allows potential customers to explore key features, ask questions, and see firsthand how the solution can meet their unique needs, helping them make confident, informed purchasing decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </section> */}
              <div className="container">
                <div className="row">
                  <div className="calendly-wrapper-container">
                    <div
                      className="calendly-inline-widget calendlyWrapper"
                      data-url="https://calendly.com/padmini-techclouderp/demo"
                    ></div>
                  </div>
                </div>
              </div>

              <Footer/>
            </>
  );
}
