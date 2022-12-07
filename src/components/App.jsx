import React, { Component } from 'react';
// import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage} from './NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
    addGood = ()=>{
      this.setState(prevState =>({
        good: prevState.good + 1,
      }))
        
    };
    addNeutral = ()=>{
      this.setState(prevState =>({
        neutral: prevState.neutral + 1,
      }))
    };
    addBad = ()=>{
      this.setState(prevState =>({
        bad: prevState.bad + 1,
      }))
    };
    countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
    };
    countPositiveFeedbackPercentage = () => {
      const total = this.state.good + this.state.neutral + this.state.bad;
      if (!this.state.good) {
        return 0;
      }
      return Math.round((100 / total) * this.state.good);
    };

    
  render(){
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
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
                  this.addGood,
                  this.addNeutral,
                  this.addBad,
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

}

