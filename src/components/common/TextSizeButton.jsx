import { useState, useRef, useEffect } from "react";
import { useTextSize } from "../context/TextSizeContext";
import { MdTextFields } from "react-icons/md";
import Button from "./Button";

const TextSizeButton = () => {
  const [open, setOpen] = useState(false);
  const { increase, decrease, reset } = useTextSize();
  const ref = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      {/* Trigger */}
      <Button
        variant="ghost"
        icon={MdTextFields}
        label="Text"
        fn={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-36
            rounded-lg bg-white
            border border-gray-200
            shadow-lg
            p-1 z-60
          "
        >
          <button
            onClick={decrease}
            className="w-full px-3 py-2 text-sm rounded-md text-left hover:bg-gray-100"
          >
            A-
          </button>

          <button
            onClick={reset}
            className="w-full px-3 py-2 text-sm rounded-md text-left hover:bg-gray-100"
          >
            Default
          </button>

          <button
            onClick={increase}
            className="w-full px-3 py-2 text-sm rounded-md text-left hover:bg-gray-100"
          >
            A+
          </button>
        </div>
      )}
    </div>
  );
};

export default TextSizeButton;
