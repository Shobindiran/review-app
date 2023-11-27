

const FeedbackStatus = ({feedbackArr}) => {

  let avg = feedbackArr.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.rating
  },0)/feedbackArr.length;

  return (
    <div className="feedback-status">
      <h2>Total Feedbacks : {feedbackArr.length}</h2>
      <h2>Average Rating : {isNaN(avg)? 0 : avg}</h2>
    </div>
  )
}

export default FeedbackStatus