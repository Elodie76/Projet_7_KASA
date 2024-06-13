
import imgBanner from "../assets/images/paysage-cotier.png";


const Home = () => {
    const title = 'Chez vous, partout et ailleurs'
    // const imgBanner = imgBannerHome
    return (
        <div className="home">
            <div className="banner">
                <img src={imgBanner} alt="paysage-cotier" className="banner-img" />
                <div className="banner-filter">
                    <h1 className="banner-title">{title}</h1> 
                </div>
            </div>
            
        </div>
        
        

        
    );
};

export default Home;