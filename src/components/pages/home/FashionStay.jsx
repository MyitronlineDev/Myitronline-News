import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FashionStay = ({fashionData}) => {

  const navigate = useNavigate();
  // function ClickHandler(){
  //   navigate()
  // }


   const socialData = [
    {
      icon: <FaFacebookF size={22} className="text-white" />,
      bg: "bg-[#3b5998]",
      count: "16,985",
      label: "Fans",
      action: "LIKE",
    },
    {
      icon: <FaInstagram size={22} className="text-white" />,
      bg: "bg-[#E1306C]",
      count: "564,865",
      label: "Followers",
      action: "FOLLOW",
    },
    {
      icon: <FaTwitter size={22} className="text-white" />,
      bg: "bg-[#1DA1F2]",
      count: "2,458",
      label: "Followers",
      action: "FOLLOW",
    },
    {
      icon: <FaYoutube size={22} className="text-white" />,
      bg: "bg-[#FF0000]",
      count: "61,453",
      label: "Subscribers",
      action: "SUBSCRIBE",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 h-auto mb-4">
      <div className="lg:col-span-7">
        <h2 className="text-3xl font-bold mb-6">Goods and Services Tax</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pe-4">
          {fashionData.map((item, index) => (
            <div key={index} 
            >
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <div className="text-xs font-semibold uppercase text-gray-500 flex items-center gap-2">
                <span>{item.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 px-7">
      {/* here  */}
      <h2 className="text-3xl font-bold mb-6">Stay connected</h2>
      <div className="space-y-4">
        {socialData.map((item, index) => (
          <div 
            key={index}
            className="flex items-center justify-between pb-3"
          >
            <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg}`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="font-bold text-sm">{item.count}</p>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </div>
              </div>

              <button className="text-xs font-bold text-gray-500 uppercase">
                {item.action}
              </button>
          </div>
        ))}

      </div>
      </div>
    </div>
  );
};

export default FashionStay;
