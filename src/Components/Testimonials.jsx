import { Container, Row, Col, Card } from 'react-bootstrap'

const Testimonials = () => {

  const reviews = [
    {
      name: 'John',
      review: 'Reduced our workload by 80%.'
    },
    {
      name: 'Sarah',
      review: 'Fantastic AI platform for automation.'
    },
    {
      name: 'David',
      review: 'The best SaaS investment we made.'
    }
  ]

  return (
    <section id="testimonials" className="py-5">

      <Container fluid className='px-5'>

        <h2 className="text-center mb-5">
          Trusted By Teams
        </h2>

        <Row data-aos="fade-up">

          {reviews.map((review, index) => (

            <Col md={4}  className="mb-4" key={index}>

              <Card className="h-100">

                <Card.Body>

                  <Card.Text>
                    "{review.review}"
                  </Card.Text>

                  <h6>{review.name}</h6>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  )
}

export default Testimonials