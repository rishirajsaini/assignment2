import React, { Component } from 'react';
import * as constants from './../../constants/';
function Notification(props){
    return (
        <div className = {constants.getStatus('success')}>
            <span>{props.data.message ? props.data.message: ''}</span>
        </div>
    );
}
export default Notification;