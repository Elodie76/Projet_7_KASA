import Banner from "../components/Banner";
import bg from "../assets/images/paysage-vallée.png";
import DropdownBtn from "../components/DropdownBtn";

const About = () => {
    return (
        
        <div className="about">
            <Banner imgBanner={bg} title=""  />
            <div className="about-content">
                <DropdownBtn title="Fiabilité" />   
                <DropdownBtn title="Respect" />   
                <DropdownBtn title="Service" />   
                <DropdownBtn title="Sécurité" />   
            </div>
            
        </div>
    );
};

export default About;