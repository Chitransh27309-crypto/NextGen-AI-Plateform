import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section id="pricing" className="py-5">

     <Container fluid className='px-5'>

        <h2 className="text-center mb-5">
          Pricing Plans
        </h2>

        <Row>

          {['Starter', 'Pro', 'Enterprise'].map((plan) => (

            <Col md={4} key={plan}>

              <Card className="pricing-card text-center h-100">

                <Card.Body>

                  <h3>{plan}</h3>

                  <h1>$29</h1>

                  <p>Per Month</p>

                  <Button>
                    Choose Plan
                  </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  )
}

export default Pricing