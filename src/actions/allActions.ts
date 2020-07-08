import {
  GetLocationsSuccess,
  RemoveLocationsSuccess,
  UpdateLocationsSuccess,
} from './locationsActions';

export type AllActions =
  | GetLocationsSuccess
  | RemoveLocationsSuccess
  | UpdateLocationsSuccess;
