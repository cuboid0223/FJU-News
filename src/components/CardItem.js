import React from 'react';

function CardItem(props){
  return(
    <div className="card2-container">
        <div className="item">
                 <div className="pic">
                 <img src={props.imgurl} alt="..." />
            </div>
            <div className="txt">
                <h2>{props.title}</h2>
                <p>{props.txt}</p>
                <a href="http://lisbunny.nctu.me/" className="btn">more</a>
            </div>
        </div>
    </div>
  )
  }

export default CardItem