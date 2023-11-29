import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from "./components/FeedbackForm";



function App() {

  // const {feedback} = useContext(FeedbackContext)
  

//   let [feedback,setFeedback] = useState([
//     {
//       id: 1,
//       rating: 9,
//       feedback: "3rd feedback"
//     },
//     {
//       id: 2,
//       rating: 5,
//       feedback: "2nd feedback"
//     },
//     {
//       id: 3,
//       rating: 1,
//       feedback: "3rd feedback"
//     },
//     {
//       id: 4,
//       rating: 3,
//       feedback: "4th feedback"
//     }
// ])

// const handleDelete = (id)=>{
//   if(window.confirm("are u sure to delete")){
//     setFeedback(feedback.filter((item)=>(item.id!==id)));
//   }
// }

// const addNewFeedback = (newFeedback)=>{
//   newFeedback.id=uuidv4();
//   setFeedback([...feedback,newFeedback]);
// }

  return (
    <FeedbackProvider>
      
        <Header text ={'Review App'}/>

        <div className="container">
          <FeedbackForm /> {/*addNewFeedback={addNewFeedback} */}
          <FeedbackStatus /> {/*feedbackArr={feedback} */}
          <FeedbackList /> {/*feedbackArr={feedback} handleDelete={handleDelete} */}
        </div>    
    </FeedbackProvider>
  );
}

export default App;