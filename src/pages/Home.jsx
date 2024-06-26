
import bg from "../assets/images/paysage-cotier.png";
import logements from "../data/logements.json"
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";

const Home = () => {
 
    return (
        <div className="home">
            <Banner 
                imgBanner={bg} 
                title1={'Chez vous,'}
                title2={'partout et ailleurs'}  
            />
            
                <div className="gallery">
                    <div className="gallery-wrapper">
                        <Thumb logements={logements} />  
                    </div>
                     
                </div>
            
            
        </div>
        
    );
};

export default Home;