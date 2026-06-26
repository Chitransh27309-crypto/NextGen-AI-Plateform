import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="hero-section">

      <Container
        fluid
        className="px-5"
        data-aos="fade-up"
      >

        <Row className="align-items-center min-vh-100">

          <Col lg={6}>

            <h1 className="display-3 fw-bold">
              Automate Your Data Pipeline With AI
            </h1>

            <p className="lead my-4">
              Transform raw business data into actionable
              insights using our next generation AI engine.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">

              <Button size="lg">
                Get Started
              </Button>

              <Button
                variant="outline-primary"
                size="lg"
              >
                Book Demo
              </Button>

            </div>

          </Col>

          <Col lg={6}>

            <div className="hero-card">

              <h3>AI Dashboard Preview</h3>

              <p>
                Analytics • Automation • Predictions
              </p>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  )
}

export default Hero