import { FaShare } from "react-icons/fa"
import { FiPrinter } from "react-icons/fi";
import { MdPrint } from "react-icons/md";
import Button from "../../common/Button"

const ArticleMetaActions = () => {
    return (
        <div className="">
            <Button label="Share" icon={FaShare}  />
              <Button label="Print" icon={FiPrinter} className="mx-2"/>
              <Button label="Text Size" icon={MdPrint}/>
        </div>
    )
}

export default ArticleMetaActions