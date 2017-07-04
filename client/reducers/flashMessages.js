import * as types from '../actions/types';
import { v4 } from 'uuid';

const flashMessages = (state = [], action = {}) => {
  switch(action.type) {
    case types.ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: v4(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    default:
      return state;
  }
}

export default flashMessages;
