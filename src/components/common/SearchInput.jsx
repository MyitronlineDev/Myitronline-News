import { useEffect, useRef } from "react";

const SearchInput = ({
    value,
    onChange,
    suggestions = [],
    onSelect,
    placeholder = "Search news..."
}) => {
    const wrapperRef = useRef(null);

    // Hide suggestions on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                onChange(""); // or close suggestions only (see note below)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onChange]);

    return (
        <div ref={wrapperRef} className="relative w-full max-w-md">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="
                    w-full px-4 py-2.5 text-sm
                    rounded-full
                    bg-white
                    border border-gray-200
                    shadow-sm
                    focus:outline-none
                    focus:border-blue-400
                    focus:ring-2 focus:ring-blue-200
                    transition
                "
            />

            {/* Suggestions */}
            {value && suggestions.length > 0 && (
                <ul className="
                    absolute left-0 right-0 mt-2
                    bg-white
                    rounded-xl
                    shadow-xl
                    ring-1 ring-black/5
                    z-60
                    max-h-60 overflow-auto
                ">
                    {suggestions.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => onSelect(item.title)}
                            className="
                            px-4 py-3 text-sm cursor-pointer
                            text-gray-700
                            hover:bg-blue-50
                            transition
                    ">
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
