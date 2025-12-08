import React from 'react'

const Content = ({ contents = [], images = [], }) => {
    return (
        <div>
            {
                contents.map((content) => {
                    return (
                        <div key={content.id}>
                            <p key={content.id}>{content.type} <br /> {content.text}</p>
                        </div>)
                })
            }
        </div>
    )
}

export default Content