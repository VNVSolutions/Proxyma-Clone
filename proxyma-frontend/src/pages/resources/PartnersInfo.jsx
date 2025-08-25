import PartnersHero from "../../components/partnersHero/PartnersHero.jsx";
import ChangeLink from "../../components/changeLink/ChangeLink.jsx";
import Info from "../../components/info/Info.jsx";
import PasteLink from "../../components/pasteLink/PasteLink.jsx";
import Discount from "../../components/discount/Discount.jsx";
import ReferalProgram from "../../components/referalProgram/ReferalProgram.jsx";
import ManagerContacts from "../../components/managerContacts/ManagerContacts.jsx";


function PartnersInfo(){

    return <main>
        <PartnersHero/>
        <ChangeLink/>
        <Info/>
        <PasteLink/>
        <Discount/>
        <ReferalProgram/>
        <ManagerContacts/>
    </main>
}

export default PartnersInfo;