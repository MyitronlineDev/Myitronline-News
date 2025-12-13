import Button from "./Button";
import { FaShare } from "react-icons/fa6";

const ShareButton = () => {
    const hanldeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ 
                    title: document.title,
                    url: window.location.href,
                });
            } catch (error) {
                console.error("Share cancelled or failed", error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard");
        }
    };

    return (
        <Button
            label="Share"
            icon={FaShare}
            fn={hanldeShare}
        />
    )
}

export default ShareButton