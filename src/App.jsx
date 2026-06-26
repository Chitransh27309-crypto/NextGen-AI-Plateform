import './App.css'

import NavbarComponent from './Components/Navbar'
import Footer from './Components/Footer'

import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(() =>
  import("./Components/Hero")
);

const Features = lazy(() =>
  import("./Components/Features")
);

const Pricing = lazy(() =>
  import("./Components/Pricing")
);

const Testimonials = lazy(() =>
  import("./Components/Testimonials")
);

function App() {
  return (
    <>
      <Helmet>
        <title>
          AIFlow - Next Generation AI Platform
        </title>

        <meta
          name="description"
          content="AI-powered workflow automation platform with predictive analytics and real-time insights."
        />

        <meta
          name="keywords"
          content="AI, Automation, SaaS, Analytics, Dashboard, Workflow"
        />

        <meta
          name="author"
          content="Chitransh Singh"
        />

        <meta
          property="og:title"
          content="AIFlow"
        />

        <meta
          property="og:description"
          content="Automate your business workflows with AI."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <NavbarComponent />

      <main>
        <Suspense
          fallback={
            <div className="text-center py-5">
              <h2>Loading...</h2>
            </div>
          }
        >
          <Hero />
          <Features />
          <Pricing />
          <Testimonials />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App