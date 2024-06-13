
// import imgBannerHome from "../assets/images/paysage-cotier.png";


const Home = () => {
    const title = 'Chez vous, partout et ailleurs'
    // const imgBanner = imgBannerHome
    return (
        <div className="home">
            <div className="banner">
            {/* <img src={imgBanner} alt="paysage-cotier" className="banner-img" /> */}
            <h1 className="banner-title">{title}</h1>
            </div>
            <h1>Acceuil</h1>
        </div>
        
        

        
    );
};

export default Home;