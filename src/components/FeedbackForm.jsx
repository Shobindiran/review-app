import { useState,useContext } from "react";
import Card from "./shared/Card.jsx";
import Button from "./shared/Button.jsx";
import SelectRating from "./SelectRating.jsx";
import FeedbackContext from "../context/FeedbackContext.js";


const FeedbackForm = () => { /*{addNewFeedback}*/

  const [text,setText] = useState("");
  const [message,setMessage] = useState("");
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [rating,setRating] = useState("8")

  const {addNewFeedback} = useContext(FeedbackContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newFeedback = {feedback:text,rating}
    addNewFeedback(newFeedback);
    setText("")
  }

  const handleTextChange = (e)=>{
    setText(e.target.value)
    if(text === ""){
      setMessage("")
      setBtnDisabled(true)
    }
    else if(text.trim().length<10){
      setMessage("Feedback should be longer than 10 characters")
      setBtnDisabled(true)
    }
    else{
      setMessage("")
      setBtnDisabled(false)
    }
  }

  return (
    <Card>
        <div className="feedback-card">
          <h1>Add your Feedback</h1>
          <h3>{text}</h3>
          <h3>{rating}</h3>
          <form onSubmit={handleSubmit}>
              <div className="input-div">
                  <SelectRating select={(rating)=>setRating(rating)}/>
                  <div>
                    <input className="text-input" type="text" value={text} onChange={handleTextChange} placeholder="Type your feedback..."/>
                    <Button type="submit"  isDisabled={btnDisabled}>submit</Button>
                  </div>
              </div>
          </form>
          <h5>{message}</h5>
        </div>
    </Card>
  )
}

export default FeedbackForm