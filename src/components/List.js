import React from 'react';

const List = (props) => {
    return (<div>
        <div className="list-group m-5" style={{width: "18rem"}}>
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Name : {props.name}</h5>
                </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Role : </h5>
                </div>
                <p className="mb-1">{props.role}</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Experience : </h5>
                </div>
                <p className="mb-1">{props.experience}</p>
            </a>
        </div>
    </div>);
}

export default List;