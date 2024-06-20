
import bg from "../assets/images/paysage-cotier.png";
import logements from "../data/logements.json"
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";

const Home = () => {
 
    return (
        <div className="home">
            <Banner imgBanner={bg} title={'Chez vous, partout et ailleurs'}  />
            
                <div className="gallery">
                    <Thumb logements={logements} />   
                </div>
            
            
        </div>
        
    );
};

export default Home;