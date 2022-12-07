import { useState } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage} from './NotificationMessage/NotificationMessage';

export default function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const addGood = ()=>{
  setGood(state => state + 1);   
};
const addNeutral = ()=>{
  setNeutral(state => state + 1);   
};
const addBad = ()=>{
  setBad(state => state + 1);   
};
const total = good + neutral + bad;

function countPositiveFeedbackPercentage(total){
   if (!good) {
    return 0;
  }
  return Math.round((100 / total) * good);
};
const positivePercentage = countPositiveFeedbackPercentage(total);
return(
  <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#9793c6',
        alignItems: 'center',
      }}
>
  <SectionTitle title="Please leave feedback">
  <FeedbackOptions 
            options={['good', 'neutral', 'bad']} 
            onLeaveFeedback={[
              addGood,
              addNeutral,
              addBad,
            ]}
            />
  </SectionTitle>
  <div
  style = {{
    textAlign: 'left',
    width: '550px',
  }}
  >
  <SectionTitle title="Statistics">
      {total !==0 ? (
         <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
      
      ) : (
        <NotificationMessage></NotificationMessage>
      )}
   </SectionTitle>
  </div>

   
</div>
)
}



