import React from 'react'
import {API} from '../config'
import '../cardCss.scss'


const ShowImage = ({item, url}) => (
    <div className="card_image-container">
        <img 
            src={`${API}/${url}/photo/${item._id}`} 
            alt={item.name} 
            // className="mb-3" 
            // style={{ maxHeight: "100%", maxWidth: "100%"}}
            />
            {/* // style={{
            //     flex: 1,
            //     alignSelf: 'stretch',
            //     width: "300px",
            //     height: "400px",
            //     maxHeight: "100%", maxWidth: "100%"
                
            //     }}/> */}
    </div>
)

export default ShowImage