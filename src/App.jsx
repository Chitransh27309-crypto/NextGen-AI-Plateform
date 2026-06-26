import './App.css'

import NavbarComponent from './components/Navbar'
import { lazy, Suspense } from "react";

const Hero = lazy(() =>
  import("./components/Hero")
);

const Features = lazy(() =>
  import("./components/Features")
);

const Pricing = lazy(() =>
  import("./components/Pricing")
);

const Testimonials = lazy(() =>
  import("./components/Testimonials")
);
import Footer from './components/Footer'
import { Helmet } from "react-helmet";

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
          property="og:title"
          content="AIFlow"
        />

        <meta
          property="og:description"
          content="Automate your business workflows with AI."
        />

      </Helmet>
      <NavbarComponent />

      <main>
        <Suspense fallback={<h1>Loading...</h1>}>

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