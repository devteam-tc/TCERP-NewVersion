'use client'; // only needed if using inside a Next.js App Router (app directory)
import Image from 'next/image';
import Link from 'next/link';

const WorkingSteps = () => {
  return (
    <section>
      <div className="working-proces-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="section-sub-title">Work Process</h6>
                <h1 className="section-main-title2">WORKS IN 4 EASY STEPS</h1>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="working-process-box  card-1 after-transprent">
                <div className="process-thumb">
                  <Image
                    src="/images/services/servicedetail1.png"
                    alt="Process 2"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                  <div className="process-number">
                    <span>01</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>Discussion & Planning</h4>
                  <p>We start with in-depth discussions to understand your goals, target audience and market needs, then develop a plan that is unique to your business's vision.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="working-process-box card-2 after-transprent">
                <div className="process-thumb">
                  <Image
                    src="/images/services/servicedetail2.png"
                    alt="Process 2"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                  <div className="process-number">
                    <span>02</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>Strategy & Design</h4>
                  <p>Based on research, we create a strategy and create intuitive designs that match your brand while providing a smooth user experience.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="working-process-box card-3 after-transprent">
                <div className="process-thumb">
                  <Image
                    src="/images/services/servicedetail3.png"
                    alt="Process 2"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                  <div className="process-number">
                    <span>03</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>Build & Optimize</h4>
                  <p>Our team of experts use the latest technologies to create your solution, which is constantly optimised for speed, SEO and performance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="working-process-box card-4 after-transprent">
                <div className="process-thumb">
                  <Image
                    src="/images/services/process-1.png"
                    alt="Process 2"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                  <div className="process-number">
                    <span>04</span>
                  </div>
                </div>
                <div className="process-content">
                  <h4>Launch & Support</h4>
                  <p>We implement the final solution, monitor performance and offer post-launch support to ensure that your platform runs properly.</p>
                </div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </section>
  );
};

export default WorkingSteps;
