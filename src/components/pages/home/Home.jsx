import React from "react";
import LendingPage from "./LendingPage";
import Featured from "./Featured";
import Technology from "./Technology";
import TvSection from "./TvSection";
import FashionStay from "./FashionStay";
import CalibrityFood from "./CalibrityFood";
import LatestNews from "./LatestNews";

const Home = () => {
  // Mock Data based on the screenshot
  const leftNews = [
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth ",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth ",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth ",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth ",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth ",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
    {
      category: "TECHNOLOGY",
      date: "02/15/2019",
      title:
        "Angry Birds maker Rovio sees sales growth in 2019 after weak fourth",
      excerpt:
        "Refreshingly, what was expected of her was the same thing that was expected that was expected of Lara Stone: take a Lara Stone: take a...",
    },
  ];

  const landingPageData = {
    featured: {
      category: "Celebrities",
      author: "Vaughan Chance",
      title:
        "Cardi B Deletes Instagram After Social Media Backlash Over Her Historic Grammys Win",
      description:
        "Refreshingly, what was expected of her was the same thing that was expected of Lara Stone...",
      image:
        "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?auto=format&fit=crop&w=1000&q=80",
    },

    sideNews: [
      {
        id: 1,
        category: "Fashion",
        title: "Led Zeppelin to launch collection with Vans",
        description: "Refreshingly, what was expected of her was the same....",
        image:
          "https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg",
      },
      {
        id: 2,
        category: "Fashion",
        title: "Led Zeppelin to launch collection with Vans",
        description: "Refreshingly, what was expected of her was the same....",
        image:
          "https://mapi.associatedpress.com/v2/items/c9fead68a1124df7a77555482957df14/preview/AP.jpg",
      },
    ],
  };

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
    <div
      className="container mx-auto px-4 font-sans"
      style={{ maxWidth: "1400px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 ">
        <LatestNews leftNews={leftNews} />

        {/* side  Section */}
        <div className="col-span-full lg:col-span-9 ">
          <LendingPage landingPageData={landingPageData} />
          <Featured featuredItems={featuredItems} />
          <FashionStay />

          <div className="grid grid-cols-1 lg:grid-cols-12 ">
            <div className="lg:col-span-8 ">
              <Technology />
            </div>
            <div className="lg:col-span-4 ">
              <TvSection />
            </div>
          </div>
          <CalibrityFood />
        </div>
      </div>
    </div>
  );
};

export default Home;
