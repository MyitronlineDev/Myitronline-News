import { FiThumbsUp, FiShare2, FiBookmark } from "react-icons/fi";

const LeftSidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-2">
      <div
        className="
          flex justify-center gap-4
          lg:flex-col lg:items-center
          sticky lg:top-28
        "
      >
        <Action
          icon={<FiThumbsUp size={20} />}
          label="Like"
          bg="bg-blue-50"
          hover="hover:bg-blue-100"
          text="text-blue-600"
          ring="hover:ring-blue-200"
        />

        <Action
          icon={<FiShare2 size={20} />}
          label="Share"
          bg="bg-green-50"
          hover="hover:bg-green-100"
          text="text-green-600"
          ring="hover:ring-green-200"
        />

        <Action
          icon={<FiBookmark size={20} />}
          label="Save"
          bg="bg-purple-50"
          hover="hover:bg-purple-100"
          text="text-purple-600"
          ring="hover:ring-purple-200"
        />
      </div>
    </aside>
  );
};

const Action = ({ icon, label, bg, hover, text, ring }) => (
  <button
    className={`
      flex flex-col items-center gap-1
      p-3 rounded-xl border
      transition-all duration-200
      ${bg} ${hover} ${text}
      ring-1 ring-transparent ${ring}
      hover:-translate-y-0.5
      w-20
    `}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

export default LeftSidebar;
