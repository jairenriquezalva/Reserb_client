import React from 'react'

const SpaceDetail = (props)=>{
    return (
        <div style={{background: 'bluesky', width: 400, height: 500, border: '1px solid lightgray', boxSizing:'border-box', boxShadow: '0 0 2px 1px lightgray', padding: 20}}>
            <h3>{props.space?props.space.provider.businessName:""}</h3>
            <h5>{props.space?props.space.name:""}</h5>
            {
                props.space?(props.space.photos.map(
                    (photo,i)=>{
                        return <img style={{marginRight: 5}} src={photo} height="100px" width="100px" key={i}/>
                    }
                )):null
            }
            <p>
                Precio: 
                <br/>
                <b>S/.{props.space?props.space.price:""} </b>
            </p>
        </div>
    )
}

export default SpaceDetail;