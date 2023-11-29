import { createContext,useState} from "react"
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback] =useState([
        {
            id: 1,
            rating: 9,
            feedback: "3rd feedback"
          },
          {
            id: 2,
            rating: 5,
            feedback: "2nd feedback"
          }
    ])

    const handleDelete = (id)=>{
        if(window.confirm("are u sure to delete")){
          setFeedback(feedback.filter((item)=>(item.id!==id)));
        }
      }
      
      const addNewFeedback = (newFeedback)=>{
        newFeedback.id=uuidv4();
        setFeedback([...feedback,newFeedback]);
      }

  return (
    <FeedbackContext.Provider value={{feedback,setFeedback,handleDelete,addNewFeedback}}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
