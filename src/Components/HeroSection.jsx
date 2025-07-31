import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import image1 from  "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const HeroSection = () => {
  return (
    <section
  style={{
    background: "linear-gradient(135deg, #2196f3, #9c27b0)",
    color: "white",
    padding: "3rem 0",
  }}
>
  

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              Louez la voiture parfaite <br /> pour votre prochaine aventure
            </h1>
            <p className="lead mt-3">
              Choisissez parmi une large gamme de véhicules modernes, fiables et accessibles. Réservez en ligne en quelques clics.
            </p>
            <Button variant="primary" size="lg" className="mt-4">
              Réserver maintenant
            </Button>
          </div>

          <div className="col-md-6">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={image1}
                  alt="Voiture 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={image2}
                  alt="Voiture 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={image3}
                  alt="Voiture 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;