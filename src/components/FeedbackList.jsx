import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => { /*{feedbackArr,handleDelete} */
 
  const {feedback,handleDelete} = useContext(FeedbackContext) 

  if(!feedback || feedback.length===0){
    return <h1 className='no-feedback-alert'>No Feedbacks yet</h1>
  }

  return (
    <>
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </>
  )
}

export default FeedbackList