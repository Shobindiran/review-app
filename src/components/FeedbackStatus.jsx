import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStatus = () => { /*{feedbackArr} */

  const {feedback} = useContext(FeedbackContext)

  let avg = feedback.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.rating
  },0)/feedback.length;

  return (
    <div className="feedback-status">
      <h2>Total Feedbacks : {feedback.length}</h2>
      <h2>Average Rating : {isNaN(avg)? 0 : avg}</h2>
    </div>
  )
}

export default FeedbackStatus