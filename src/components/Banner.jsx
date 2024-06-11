

const Banner = () => {

    return (
        <div className="banner">
            <img src={imgBanner} alt="paysage-cotier" className="banner-img" />
            <h1 className="banner-title">{title}</h1>
        </div>
    );
};

export default Banner;