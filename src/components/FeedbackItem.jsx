import React from 'react'
import Card from './shared/Card';
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({item,handleDelete}) => {
  return (
    <>
        <Card>
            <div className={'feedback'}>{item.feedback}</div>
            <div className={'rating rating-display'}>{item.rating}</div>
            <FaTimes className={'close-icon'} color='red' onClick={()=>{handleDelete(item.id)}}/>
        </Card>
    </>
  );
}

export default FeedbackItem;

