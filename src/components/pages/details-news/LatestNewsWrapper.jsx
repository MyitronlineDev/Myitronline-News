import LatestNews from "../home/LatestNews";
import { LatestNewsData } from "./data/LatestNewsData";
import testImg1 from "../../../assets/LatestNewsWrapper1.avif";

const LatestNewsWrapper = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* LEFT SIDE: Latest News */}
            <div>
                <LatestNews leftNews={LatestNewsData} />
            </div>

            {/* RIGHT SIDE: Image + Overlay Text */}
            <div className="relative flex justify-center items-center">
                <img
                    src={testImg1}
                    alt="news-detail"
                    className="w-full h-full object-cover rounded-lg"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

                {/* TEXT ON TOP OF IMAGE */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-xl font-bold mb-2">Your Title Goes Here</h2>
                    <p className="text-sm text-gray-200">
                        Short description text goes here. Something like a news summary.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LatestNewsWrapper