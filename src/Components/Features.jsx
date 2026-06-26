import { Container, Row, Col, Card } from 'react-bootstrap'

const Features = () => {

  const features = [
    {
      title: 'AI Automation',
      desc: 'Automate repetitive workflows instantly.'
    },
    {
      title: 'Predictive Analytics',
      desc: 'Forecast trends with AI models.'
    },
    {
      title: 'Real-time Insights',
      desc: 'Get actionable insights in seconds.'
    },
    {
      title: 'Secure Infrastructure',
      desc: 'Enterprise grade security and compliance.'
    }
  ]

  return (
    <section id="features" className="py-5">

   <Container fluid className='px-5'>

        <h2 className="text-center mb-5">
          Powerful Features
        </h2>

        <Row>

          {features.map((feature, index) => (

            <Col md={6} lg={3} key={index}>

              <Card className="feature-card h-100">

                <Card.Body>

                  <Card.Title>
                    {feature.title}
                  </Card.Title>

                  <Card.Text>
                    {feature.desc}
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  )
}

export default Features