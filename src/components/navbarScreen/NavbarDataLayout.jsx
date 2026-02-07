import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDevice } from "../context/DataProvider";

import News from "./News";
import Articles from "./Articles";
import Budget from "./Budget";
import Circular from "./Circular";
import Notification from "./Notification";
import LoaderUi from "../common/LoaderUi";

const NavbarDataLayout = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const categoryId = params.get("id");
  const type = params.get("type");

  const { getCategoryNews, categoryNews, loadingCategory } = useDevice();
  console.log(categoryNews);
  console.log(`category header: `, loadingCategory)
  useEffect(() => {
    if (categoryId && type) {
      getCategoryNews(categoryId, [type]);
    }
  }, [categoryId, type]);

  if (!categoryId || !type) {
    return <p className="text-center py-10">Invalid request</p>;
  }

  if (loadingCategory) {
    return <LoaderUi />;
  }

  if (!categoryNews.length) {
    return (
      <p className="text-center py-10 text-gray-300">
        No {type} found for this category.
      </p>
    );
  }

  return (
    <>
      {type === "news" && <News data={categoryNews} />}
      {type === "article" && <Articles data={categoryNews} />}
      {type === "budget" && <Budget data={categoryNews} />}
      {type === "circular" && <Circular data={categoryNews} />}
      {type === "notifications" && <Notification data={categoryNews} />}
    </>
  );
};

export default NavbarDataLayout;
