import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form
} from "react-bootstrap";

import {
  pricingMatrix,
  currencyRates
} from "../Data/PricingData";

const Pricing = () => {

  const [billingCycle, setBillingCycle] =
    useState("monthly");

  const [currency, setCurrency] =
    useState("USD");

  const calculatePrice = (basePrice) => {

    let finalPrice =
      basePrice *
      currencyRates[currency].rate;

    if (billingCycle === "yearly") {
      finalPrice = finalPrice * 12 * 0.8;
    }

    return Math.round(finalPrice);
  };

  return (
    <section id="pricing">

      <Container fluid className="px-5">

        <h2 className="text-center mb-5">
          Pricing Plans
        </h2>

        {/* Controls */}

        <Row className="justify-content-center mb-5">

          <Col md={3}>

            <Form.Select
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value)
              }
            >

              <option value="USD">
                USD ($)
              </option>

              <option value="INR">
                INR (₹)
              </option>

              <option value="EUR">
                EUR (€)
              </option>

            </Form.Select>

          </Col>

          <Col md={3}>

            <Form.Select
              value={billingCycle}
              onChange={(e) =>
                setBillingCycle(e.target.value)
              }
            >

              <option value="monthly">
                Monthly
              </option>

              <option value="yearly">
                Yearly (20% OFF)
              </option>

            </Form.Select>

          </Col>

        </Row>

        {/* Pricing Cards */}

        <Row>

          {Object.values(pricingMatrix).map(
            (plan) => (

              <Col lg={4} key={plan.name}>

                <Card className="pricing-card h-100 text-center">

                  <Card.Body>

                    <h3>{plan.name}</h3>

                    <h1 className="my-4">

                      {
                        currencyRates[currency]
                          .symbol
                      }

                      {calculatePrice(
                        plan.basePrice
                      )}

                    </h1>

                    <p>

                      Per{" "}

                      {billingCycle ===
                        "monthly"
                        ? "Month"
                        : "Year"}

                    </p>

                    <ul className="list-unstyled my-4">

                      {plan.features.map(
                        (feature, index) => (

                          <li
                            key={index}
                            className="mb-2"
                          >
                            ✓ {feature}
                          </li>
                        )
                      )}

                    </ul>

                    <Button>
                      Choose Plan
                    </Button>

                  </Card.Body>

                </Card>

              </Col>
            )
          )}

        </Row>

      </Container>

    </section>
  );
};

export default Pricing;