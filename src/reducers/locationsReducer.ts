import { AllActions } from '../actions/allActions';
import { ActionTypes } from '../constants/actions';
import LocationsState from '../interfaces/LocationsState';

const initialState: LocationsState = {
  initialLoad: true,
  locations: [
    {
      name: '',
    },
  ],
};

export default function locationsReducer(
  locationsState: LocationsState = initialState,
  action: AllActions,
): LocationsState {
  switch (action.type) {
    case ActionTypes.GetLocationsSuccess:
      return { ...locationsState, ...action.locationsState };
    case ActionTypes.UpdateLocationsSuccess:
      if (locationsState.locations !== undefined) {
        locationsState.locations.push(action.locationsState);

        return { ...locationsState };
      }

      return { locations: [action.locationsState], initialLoad: false };
    case ActionTypes.RemoveLocationsSuccess:
      return { ...locationsState, ...action.locationsState };
    default:
      return locationsState;
  }
}
