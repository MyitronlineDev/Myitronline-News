import { Outlet, useLocation } from "react-router-dom";

const NewsLayout = () => {
  const location = useLocation();

  let headerTitle = "";
  let headerImage = "";

  if (location.pathname === "/news") {
    headerTitle = "Top News";
    headerImage = "/images/top.jpg";
  }

  if (location.pathname === "/news/world") {
    headerTitle = "World News";
    headerImage = "/images/world.jpg";
  }

  if (location.pathname === "/news/tech") {
    headerTitle = "Tech News";
    headerImage = "/images/tech.jpg";
  }

  return (
    <div>
      <header>
        {/* image */}
        <img src={headerImage} alt="" />

        {/* text */}
        <h1>{headerTitle}</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NewsLayout;
