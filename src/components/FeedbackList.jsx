import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = ({feedbackArr,handleDelete}) => {

  const {feedback} = useContext(FeedbackContext) 
  return (
    <>
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </>
  )
}

export default FeedbackList