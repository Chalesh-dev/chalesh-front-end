import ContentText from "./ContentText";
import NewComing from "./NewComing";

const ContentLeft = () => {
    return(
        <div className="w-[60vw] flex flex-col">
            <NewComing />
            <ContentText />
        </div>
    )
}

export default ContentLeft;