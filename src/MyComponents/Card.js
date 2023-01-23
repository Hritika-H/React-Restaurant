import React from 'react';

// import Garfieldcat from './Garfieldcat.png';

const Card = ({menuData}) =>{

    
    console.log(menuData);
    return (<>

   { menuData.map((curElem) => {
        return(
         <div className="card-container" key={curElem.id}>
         {/* <div className="card-id">{curElem.id}</div> */}
         <div className="card-title">{curElem.name}</div>
         <img className='card-img'src={curElem.image}  alt="This is a image"/>
         <div className='card-price'>{curElem.price}</div>
         <div className="card-description">{curElem.desc}</div>
         </div>
        )
     }
     )}

     
        </>
   
    
    );
}

export default Card;