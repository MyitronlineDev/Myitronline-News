import { FaShare } from "react-icons/fa"
import { FiPrinter } from "react-icons/fi";
// import { MdPrint } from "react-icons/md";
import Button from "../../common/Button"
import TextSizeButton from "../../common/TextSizeButton";

const ArticleMetaActions = () => {
    return (
        <div className="">
            <Button label="Share" icon={FaShare}  />
            <TextSizeButton />
        </div>
    )
}

export default ArticleMetaActions