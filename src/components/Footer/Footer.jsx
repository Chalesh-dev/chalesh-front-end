import BottomDiv from "./BottomDiv";
import TopDiv from "./TopDiv";

const Footer = () => {
    return(
        <footer className="mt-auto flex flex-col py-8 md:px-20 px-5 bg-[#131313]">
            <TopDiv />
            <BottomDiv />
        </footer>
    )
}

export default Footer;