import * as types from './types';

export const addFlashMessage = message => ({
  type: types.ADD_FLASH_MESSAGE,
  message
});

export const deleteFlashMessage = id => ({
  type: types.DELETE_FLASH_MESSAGE,
  id
});
