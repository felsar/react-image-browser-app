import React from 'react';

import Image from './Image';

const ImageList = ({imageList}) => {
    return (
        <div className="col-12 p-5 row">
            {
                imageList.map(singleImage => (
                <Image
                    key={singleImage.id}
                    imageInfo={singleImage}
                />
                ))
            }
        </div>
    );
    
}
 
export default ImageList;