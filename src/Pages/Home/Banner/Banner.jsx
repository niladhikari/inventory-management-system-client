import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <Carousel  autoPlay={true} infiniteLoop={true} interval={2000} 
        showStatus={false}  showThumbs={true}>
                <div >
                    <img className="lg:h-fit" src='https://i.ibb.co/qBY3FNc/1s.jpg>' />
                </div>
                <div >
                    <img className="lg:h-fit" src='https://i.ibb.co/PYtt3sw/SPH-Whse-Inv-Mgmt-Blog-shutterstock-1930996376.webp' />
                </div>
                <div >
                    <img className="lg:h-fit" src='https://i.ibb.co/bbJ5hvr/The-Best-Guide-to-an-Inventory-Control-System-for-Your-Business.webp'/>
                </div>
        
            </Carousel>
    );
};

export default Banner;