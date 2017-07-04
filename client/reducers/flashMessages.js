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
      // return state.concat({
      //   id: v4(),
      //   type: action.message.type,
      //   text: action.message.text
      // });
    case types.DELETE_FLASH_MESSAGE:
      return state.filter(message => message.id != action.id)
    default:
      return state;
  }
}

export default flashMessages;
