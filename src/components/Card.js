import React from 'react';

const Card = (props) => {
    return (<div>
                <div className="card" style={{width: "18rem"}}>
                <img src={props.path} className="card-img-top" alt="Something went wrong" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <a href="#" className="btn btn-primary">Get news</a>
                    </div>
                </div>
         </div> );
}

export default Card;