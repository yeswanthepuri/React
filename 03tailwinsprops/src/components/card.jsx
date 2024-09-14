import React from 'react'

// function Card(props) { // this is a way of accessing the props from parent
function Card({ userName, imageURL, places }) { // this is deserilization
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src={imageURL} alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {userName}
                        </div>
                        {places && (
                            <div>
                                <ul>
                                    {places.map((val, index) => (
                                        <li key={index}>{val}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </figcaption>
                </div>
            </figure>
        </>
    )
}

export default Card