import PropTypes from 'prop-types';
import {List, Button, Item} from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
     return(
        <List>
            {options.map(option =>(
                <Item key={option}>
                    <Button 
                        type="button" 
                        onClick={chooseMethod(option, onLeaveFeedback)}
                        
                        >
                        {option}
                    </Button>
                </Item>
            ))}
              
           
        </List>
         

    )
};

function chooseMethod(option, onLeaveFeedback) {
    if (option === 'good') {
      return onLeaveFeedback[0];
    }
    if (option === 'neutral') {
      return onLeaveFeedback[1];
    }
    if (option === 'bad') {
      return onLeaveFeedback[2];
    }
  }
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  };
