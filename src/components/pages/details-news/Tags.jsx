

const Tags = ({tags=[]}) => {
    return (
        <div className="flex flex-wrap gap-2 mt-10 mb-8">
            {tags.map((tag, i) => (
                <span
                    key={i}
                    className="
            bg-gray-200 px-3 py-1 rounded-full 
            text-xs sm:text-sm text-gray-700
          "
                >
                    #{tag}
                </span>
            ))}
        </div>
    )
}

export default Tags