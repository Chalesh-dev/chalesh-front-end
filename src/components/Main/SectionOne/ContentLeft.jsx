import Buttons from "./Buttons";
import ContentText from "./ContentText";
import NewComing from "./NewComing";

const ContentLeft = () => {
    return(
        <div className="lg:w-[60vw] w-full flex flex-col items-center lg:items-start">
            <NewComing />
            <ContentText />
            <Buttons />
        </div>
    )
}

export default ContentLeft;