import { createAction, props } from '@ngrx/store';
import { RegisterRequstInterface } from '../types/registerRequest.interface';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{
    request: RegisterRequstInterface;
  }>()
);
