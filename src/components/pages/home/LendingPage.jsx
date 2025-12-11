import React from "react";

const LendingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-7">
      {/* Thumbnail Section */}
      <div className="lg:w-2/3">
        <div className="relative mb-8">
          <img
            src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="w-full aspect-video object-cover "
            alt="Thumbnail"
          />
          <div className="border border-black absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-3 bg-white">
            <span className="font-semibold">CELEBRITES</span>
          </div>
        </div>
        <div className="text-center ">
          <h2 className="text-3xl font-bold">
            Cardi B Deletes Instagram After Social Media Backlash Over Her
            Historic Grammys Win
          </h2>
          <p className="text-gray-500 ">
            Refreshingly, what was expected of her was the same thing that was
            expected of Lara Stone...
          </p>
          <p className="text-gray-500 font-bold uppercase">Vaughan Chance</p>
        </div>
      </div>

      {/* Right-side News Column */}
      <div className="lg:w-1/3 space-y-2 px-2 ">
        <div className="relative">
          <img
            src="https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg?wm=api&tag=app_id=1,user_id=undefined,org_id=undefined"
            className="w-full h-[180px] object-cover"
            alt="news"
          />
          <div className="border border-black px-3 -bottom-2 left-0 bg-white absolute">
            <span className="uppercase font-semibold">Fashion</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold leading-tight">
          Led Zeppelin to launch collection with Vans
        </h2>
        <p className="leading-tight">
          Refreshingly, what was expected of her was the same....
        </p>
        <div className="relative">
          <img
            src="https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg?wm=api&tag=app_id=1,user_id=undefined,org_id=undefined"
            className="w-100 h-[180px] object-cover"
            alt="news"
          />
          <div className="border border-black px-3 -bottom-2 left-0 bg-white absolute">
            <span className="uppercase font-semibold">Fashion</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold leading-tight">
          Led Zeppelin to launch collection with Vans
        </h2>
        <p className="leading-tight">
          Refreshingly, what was expected of her was the same....
        </p>
      </div>
    </div>
  );
};

export default LendingPage;
