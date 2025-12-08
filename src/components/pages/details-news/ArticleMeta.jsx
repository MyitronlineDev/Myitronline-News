import React from 'react'

const ArticleMeta = ({dateUpdated, author, datePublished, }) => {
    return (
        <div className="flex gap-3  items-center">
            <p className='text-md'>Updated: {dateUpdated}</p>
            <p className="italic">~{author}</p>
        </div>
    )
}

export default ArticleMeta