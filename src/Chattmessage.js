import React from "react";
import TextsmsIcon from '@mui/icons-material/Textsms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ChattMessage(props){
    return(
        <div className={`d-flex ${props.user&&'justify-content-end'} `}>
{
    props.user?(
        <span className="message-right">
            <span className="message-text">{props.message}</span>
            <AccountCircleIcon className="message-icon"/>
        </span>
    ):
    <span className="message-left">
        <TextsmsIcon className="message-icon"/>
    <span className="message-text">{props.message}</span>
    
</span>
}
        </div>
    )
}