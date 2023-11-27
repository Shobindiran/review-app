import { createContext,useState} from "react"

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
  return (
    <FeedbackContext.Provider value={{feedback:feedback,setFeedback:setFeedback}}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
