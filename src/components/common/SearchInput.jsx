const SearchInput = ({ value, onChange, placeholder = "Search news..." })  => {
    return (
        <input 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 border rounded-full text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}

export default SearchInput;