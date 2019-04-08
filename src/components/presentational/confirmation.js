import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as constants from './../../constants/';
function Confirmation(props) {
    return (
        <div>
            <div className={constants.getStatus('message')}>
                <p>{props.message}</p>
            </div>
            <div>
                <div className="btn btn-primary" onClick={props.accept} > Sure </div>
                <div className="btn btn-danger" onClick={props.decline} > No Thanks </div>
            </div>
        </div>
    );
}

Confirmation.propTypes = {
    accept: PropTypes.func,
    decline: PropTypes.func
}

export default Confirmation;
