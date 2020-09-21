import React from 'react'

// Create separate component file
export default function ImageFrame2 (props) {
    return (
        <React.Fragment>
            <img src={props.image} style={{
                width : '150px',
                borderRadius : '12px'
            }}/>
        </React.Fragment>
    )
}

// or 
// export default ImageFrame2