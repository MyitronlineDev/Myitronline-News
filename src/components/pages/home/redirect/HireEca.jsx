import HoverCard from "../../../common/HoverCard";
import free_rent_image from "../../../../assets/free_rent_image.png";


const HireEca = () => {
    return (
        <div className="w-full h-[180px] md:h-[220px]">
            <HoverCard
                image={free_rent_image}
                title="Hire ECA"
                text="Certified Expert CA for tax filing, document review & compliance."
                link="https://myitronline.com/tools/generate/rent/receipt"
            />
        </div>
    );
};

export default HireEca;