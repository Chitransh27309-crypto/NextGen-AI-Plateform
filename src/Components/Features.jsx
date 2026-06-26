import { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import { featuresData } from "../data/featuresData";

const Features = () => {

  const [isMobile, setIsMobile] =
    useState(window.innerWidth <= 992);

  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  return (
    <section id="features">hero-card

      <Container fluid className="px-5">

        <h2 className="text-center mb-5">
          Powerful Features
        </h2>

        {

          !isMobile ?

          (

            <div className="bento-grid">

              {

                featuresData.map(
                  (feature, index) => (

                    <div
                      key={index}
                      className={`bento-card ${
                        activeIndex === index
                          ? "active-card"
                          : ""
                      }`}

                      onMouseEnter={() =>
                        setActiveIndex(index)
                      }
                    >

                      <h3>
                        {feature.title}
                      </h3>

                      <p>
                        {feature.description}
                      </p>

                    </div>

                  )
                )

              }

            </div>

          )

          :

          (

            <Accordion
              activeKey={String(activeIndex)}
            >

              {

                featuresData.map(
                  (feature, index) => (

                    <Accordion.Item
                      eventKey={String(index)}
                      key={index}
                    >

                      <Accordion.Header
                        onClick={() =>
                          setActiveIndex(index)
                        }
                      >
                        {feature.title}
                      </Accordion.Header>

                      <Accordion.Body>
                        {feature.description}
                      </Accordion.Body>

                    </Accordion.Item>

                  )
                )

              }

            </Accordion>

          )

        }

      </Container>

    </section>
  );
};

export default Features;