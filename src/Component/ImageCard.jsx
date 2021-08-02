import React from 'react'

export const ImageCard = ({image_details}) => {
    // console.log(image_details)
    let tags = image_details.tags.split(",")
    console.log(tags)
    return (
        <>
            <div className="max-w-xw mt-4 shadow-xl">
                <img src={image_details.webformatURL} alt="description" />
                <div className="px-2 py-2">
                    <ul>
                        <li>
                            <p>Views:- {image_details.views}</p>
                        </li>
                        <li>
                            <p>Downloads:- {image_details.downloads}</p>
                        </li>
                        <li>
                            <p>Likes:- {image_details.likes}</p>
                        </li>
                    </ul>
                </div>
                <div className="flex px-2 py-2">
                    <p className="bg-gray-300 rounded-lg p-1 mr-2">#{tags[0]}</p>
                    <p className="bg-gray-300 rounded-lg p-1 mr-2">#{tags[1]}</p>
                    <p className="bg-gray-300 rounded-lg p-1 mr-2">#{tags[2]}</p>
                </div>
            </div>
        </>
    )
}
