import TextSizeButton from "../../common/TextSizeButton";
import ShareButton from "../../common/ShareButton";

const ArticleMetaActions = () => {
    return (
        <div className="flex  gap-2 ">
            <ShareButton />
            <TextSizeButton />
        </div>
    )
}

export default ArticleMetaActions