import PartnersPageHero from "../../components/PartnersPageHero/PartnersPageHero.jsx";
import OurPartners from "../../components/OurPartners/OurPartners.jsx";
import PartnersAgitation from "../../components/partnersAgitation/PartnersAgitation.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";

function Partners(){

    return (
        <main className="partnersPage">
            <PartnersPageHero/>
            <OurPartners/>
            <PartnersAgitation/>
            <Feedbacks/>
            <Start/>
        </main>
    )
}

export default Partners