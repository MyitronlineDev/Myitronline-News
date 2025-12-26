import { NavLink } from "react-router-dom";

const ArticleMeta = ({ dateUpdated, author }) => {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-md">Updated: {dateUpdated}</p>

      <NavLink
        to={`/author/myitronline/${author}`}
        className={({ isActive }) =>
          `
          italic underline
          ${isActive ? "text-blue-600 font-semibold" : "text-green-500"}
          visited:text-purple-600
          `
        }
      >
        ~{author}
      </NavLink>
    </div>
  );
};

export default ArticleMeta;
