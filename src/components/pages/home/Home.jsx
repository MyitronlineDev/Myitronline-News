import React from "react";
import LendingPage from "./LendingPage";

const Home = () => {
  // Mock Data based on the screenshot
  const leftNews = [
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title: "Samsung Galaxy S10 listed for pre-orders in US",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth quarter",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title: "Apple to ship iPhones with only Qualcomm chips to German stores",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth quarter",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title: "Apple to ship iPhones with only Qualcomm chips to German stores",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth quarter",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title: "Apple to ship iPhones with only Qualcomm chips to German stores",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a...",
    },
  ];

  const rightNews = [
    {
      category: "FASHION",
      title: "Led Zeppelin to launch collection with Vans",
      image:
        "https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg?wm=api&tag=app_id=1,user_id=undefined,org_id=undefined",
      excerpt: "Refreshingly, what was expected of her was the same thing...",
    },
    {
      category: "MUSIC",
      title: "Arcade High – Outrun This!",
      image:
        "https://mapi.associatedpress.com/v2/items/78d6c50753cc4eaeabac3247fef4124d/preview/AP.jpg?wm=api&tag=app_id=1,user_id=undefined,org_id=undefined",
      excerpt: "Refreshingly, what was expected of her was the same...",
    },
  ];

  const featuredItems = [
    {
      category: "FASHION",
      title:
        "Elsa Hosk Looks Like an Absolute Vision in Victoria’s Secret’s $1M Fantasy Bra",
      date: "02/15/2019",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      category: "FASHION",
      title:
        "Gabriela Hearst’s Fall Collection Is for the Sophisticated Minimalist",
      date: "02/15/2019",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      category: "FASHION",
      title: "This £55 Bag Is Fast Becoming Part of the It-Girl Uniform",
      date: "02/15/2019",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    // <div className="bg-white min-h-screen font-sans text-gray-800 p-4 md:p-8 lg:p-12">
    //   <div className="max-w-7xl mx-auto">
    //     {/* MAIN LAYOUT WRAPPER: Flex container to create the sidebar effect */}
    //     <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
    //       {/* --------------------------------------------------------- */}
    //       {/* LEFT SIDEBAR: Latest News (Fixed/Sticky behavior)          */}
    //       {/* --------------------------------------------------------- */}
    //       <div className="lg:w-1/4 border-r border-gray-100 pr-0 lg:pr-8">
    //         <div className="sticky top-8">
    //           {" "}
    //           {/* Makes the sidebar sticky if content is long */}
    //           <h2 className="text-3xl font-serif font-bold mb-8 text-black">
    //             Latest news
    //           </h2>
    //           <div className="space-y-8">
    //             {leftNews.map((item, index) => (
    //               <div
    //                 key={index}
    //                 className="border-b border-gray-100 pb-6 last:border-0"
    //               >
    //                 <div className="flex items-center space-x-2 mb-2 text-xs font-bold uppercase tracking-wider">
    //                   <span className="text-black">{item.category}</span>
    //                   <span className="text-yellow-500">{item.date}</span>
    //                 </div>
    //                 <h3 className="text-lg font-serif font-bold leading-tight mb-2 hover:text-gray-600 cursor-pointer">
    //                   {item.title}
    //                 </h3>
    //                 <p className="text-sm text-gray-500 leading-relaxed">
    //                   {item.excerpt}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* --------------------------------------------------------- */}
    //       {/* RIGHT MAIN CONTENT AREA                                   */}
    //       {/* --------------------------------------------------------- */}
    //       <div className="lg:w-3/4 flex flex-col">
    //         {/* --- PART 1: Top Hero + Thumbnails --- */}
    //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
    //           {/* Center Hero (Takes up 2 of 3 columns in this section) */}
    //           <div className="lg:col-span-2">
    //             <div className="relative mb-8">
    //               <img
    //                 src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    //                 alt="Featured"
    //                 className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
    //               />
    //               <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 border border-gray-200 shadow-sm">
    //                 <span className="text-xs font-bold uppercase tracking-widest text-black">
    //                   Celebrities
    //                 </span>
    //               </div>
    //             </div>

    //             <div className="text-center px-4">
    //               <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
    //                 Cardi B Deletes Instagram After Social Media Backlash Over
    //                 Her Historic Grammys Win
    //               </h1>
    //               <p className="text-gray-500 mb-4 max-w-lg mx-auto">
    //                 Refreshingly, what was expected of her was the same thing
    //                 that was expected of Lara Stone...
    //               </p>
    //               <p className="text-xs font-bold uppercase tracking-widest text-gray-900">
    //                 Vaughan Chance
    //               </p>
    //             </div>
    //           </div>

    //           {/* Right Thumbnails (Takes up 1 of 3 columns in this section) */}
    //           <div className="lg:col-span-1 border-l border-gray-100 pl-8 flex flex-col justify-between">
    //             {/* Added wrapper div to ensure height distribution or spacing */}
    //             <div className="space-y-10">
    //               {rightNews.map((item, index) => (
    //                 <div key={index} className="group">
    //                   <div className="relative mb-4">
    //                     <img
    //                       src={item.image}
    //                       alt={item.title}
    //                       className="w-full h-40 object-cover"
    //                     />
    //                     <span className="absolute bottom-0 left-0 bg-white px-3 py-1 text-xs font-bold uppercase border-t border-r border-gray-200">
    //                       {item.category}
    //                     </span>
    //                   </div>
    //                   <h3 className="text-lg font-serif font-bold mb-2 relative inline-block">
    //                     {item.title}
    //                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    //                   </h3>
    //                   <div className="h-px bg-gray-200 w-full my-2 relative">
    //                     <div className="absolute top-0 left-0 h-0.5 bg-yellow-400 w-1/3"></div>
    //                   </div>
    //                   <p className="text-sm text-gray-500 mt-2 line-clamp-2">
    //                     {item.excerpt}
    //                   </p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>

    //         {/* --- PART 2: Featured Section (Just below Thumbnails/Hero) --- */}
    //         <div className="border-t border-gray-200 pt-10">
    //           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    //             {/* Featured Header (Takes 1 of 4 columns) */}
    //             <div className="lg:col-span-1 flex flex-col justify-between">
    //               <div>
    //                 <h2 className="text-3xl font-serif font-bold mb-3">
    //                   Featured
    //                 </h2>
    //                 <p className="text-gray-500 mb-4 text-sm leading-relaxed">
    //                   Most popular life news you must read today
    //                 </p>
    //                 <button className="flex items-center text-xs font-bold uppercase tracking-widest text-black hover:text-yellow-600 transition-colors mb-8">
    //                   View All Articles
    //                   <svg
    //                     className="w-3 h-3 ml-2"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="2"
    //                       d="M9 5l7 7-7 7"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //               </div>

    //               {/* Arrows */}
    //               <div className="flex space-x-4 mt-auto">
    //                 <button className="text-gray-400 hover:text-black transition-colors">
    //                   <svg
    //                     className="w-6 h-6"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="1.5"
    //                       d="M10 19l-7-7m0 0l7-7m-7 7h18"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //                 <button className="text-black hover:text-gray-600 transition-colors">
    //                   <svg
    //                     className="w-6 h-6"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="1.5"
    //                       d="M14 5l7 7m0 0l-7 7m7-7H3"
    //                     ></path>
    //                   </svg>
    //                 </button>
    //               </div>
    //             </div>

    //             {/* Featured Cards (Takes 3 of 4 columns) */}
    //             <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
    //               {featuredItems.map((item, index) => (
    //                 <div key={index} className="group cursor-pointer">
    //                   <div className="relative mb-4 overflow-hidden">
    //                     <img
    //                       src={item.image}
    //                       alt={item.title}
    //                       className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
    //                     />
    //                     <span className="absolute bottom-0 left-0 bg-white px-2 py-1 text-[10px] font-bold uppercase border-t border-r border-gray-200 z-10">
    //                       {item.category}
    //                     </span>
    //                   </div>

    //                   <h3 className="text-base font-serif font-bold leading-snug mb-2">
    //                     {item.title}
    //                   </h3>

    //                   {/* Yellow Separator */}
    //                   <div className="w-full h-px bg-gray-200 mb-2 relative">
    //                     <div className="absolute left-0 top-0 h-0.5 bg-yellow-400 w-full transform scale-x-100 origin-left"></div>
    //                   </div>

    //                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
    //                     {item.date}
    //                   </p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 font-sans ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 ">
        {/* latest news section */}
        <div className="lg:col-span-3 px-2 ">
          <h1 className="text-3xl font-bold">Latest News</h1>
          <br />

          <div className="space-y-4">
            {leftNews.map((item, index) => (
              <div key={index} className="border-b pb-3">
                <div className="flex flex-row gap-2 text-sm text-gray-700">
                  <span className="font-semibold">{item.category}</span>
                  <span className="text-yellow-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* side  Section */}
        <div className="lg:col-span-9 ">
          <LendingPage/>
        </div>
      </div>
    </div>
  );
};

export default Home;
