import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";



const Container = (props) => {

    return (

        <div className='container text-left' style={headerStyle}>
            <div className='row'>
                <div className='col'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <button type="button" className="btn btn-primary" style={containerstyle}>{props.buttonLabel}</button>
                </div>
            </div>
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col">
                    <img style={imageStyle}/>
                        <h1>{props.cardTitle}</h1>
                        <p>{props.description}</p>
                        <button type="button" className="btn btn-primary">{props.cardTitleButton}</button>
                    </div>
                    <div className="col">
                    <img style={imageStyle}/>
                        <h1>{props.cardTitle}</h1>
                        <p>{props.description}</p>
                        <button type="button" className="btn btn-primary">{props.cardTitleButton}</button>
                    </div>
                    <div className="col">
                    <img style={imageStyle}/>
                        <h1>{props.cardTitle}</h1>
                        <p>{props.description}</p>
                        <button type="button" className="btn btn-primary">{props.cardTitleButton}</button>
                    </div>
                    <div className="col">
                    <img style={imageStyle}/>
                        <h1>{props.cardTitle}</h1>
                        <p>{props.description}</p>
                        <button type="button" className="btn btn-primary">{props.cardTitleButton}</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
Container.propTypes = {
    // PropTypes here
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
    cardTitle :PropTypes.string,
    cardTitleButton : PropTypes.string,
};

const headerStyle = {
    bacgroundColor: '#f4f4f4',
}

const containerstyle = {
	marginBottom: '10px'

  };
const imageStyle = {
    width: '500px',
    height: '325px',
    objectFit: 'cover',
  };
export default Container;