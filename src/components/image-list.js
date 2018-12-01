import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    console.log(props.images);
    const imageList = props.images.map((image) => {
        return (
            <img key={image.id} src={image.urls.regular} alt={image.description}/>
        )
    })

    return <div className="image-list">{imageList}</div>;
}

export default ImageList;