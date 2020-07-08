import * as Redux from 'redux';
import Cookies from 'universal-cookie';

import { WebActionTypes } from '../constants/actions';
import Location from '../interfaces/Location';
import LocationsState from '../interfaces/LocationsState';

export interface GetLocationsSuccess extends Redux.Action {
  type: WebActionTypes.GetLocationsSuccess;
  locationsState: LocationsState;
}

export interface UpdateLocationsSuccess extends Redux.Action {
  type: WebActionTypes.UpdateLocationsSuccess;
  locationsState: Location;
}

export interface RemoveLocationsSuccess extends Redux.Action {
  type: WebActionTypes.RemoveLocationsSuccess;
  locationsState: Location;
}

export const getLocationsSuccess = (response: any): GetLocationsSuccess => {
  return {
    type: WebActionTypes.GetLocationsSuccess,
    locationsState: { ...response.result },
  };
};

export const getLocations = () => {
  return async (dispatch: any) => {
    try {
      // access cookies and get locations
      const cookies = new Cookies();
      const locationsCookie = cookies.get('locations');

      const response = {
        result: {
          locations: locationsCookie || undefined,
          initialLoad: false,
        },
      };

      const action = getLocationsSuccess(response);
      dispatch(action);
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
};

export const updateLocationsSuccess = (location: Location) => {
  return {
    type: WebActionTypes.UpdateLocationsSuccess,
    locationsState: location,
  };
};

export const updateLocations = (location: Location) => {
  return async (dispatch: any) => {
    try {
      // access cookies and get locations
      const cookies = new Cookies();
      const locationsCookie = cookies.get('locations');

      let locationsToAdd;

      // add the location to a cookie
      if (locationsCookie !== undefined) {
        locationsToAdd = locationsCookie;
        locationsToAdd.push(location);
      } else {
        locationsToAdd = [location];
      }

      cookies.set('locations', JSON.stringify(locationsToAdd));

      const action = updateLocationsSuccess(location);
      dispatch(action);
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
};

export const removeLocationsSuccess = (location: Location) => {
  return {
    type: WebActionTypes.RemoveLocationsSuccess,
    locationsState: location,
  };
};

export const removeLocations = (index: number) => {
  return async (dispatch: any) => {
    try {
      // access cookies and get locations
      const cookies = new Cookies();
      const locationsCookie = cookies.get('locations');

      // remove from cookie array
      let newLocations = locationsCookie;
      const location = newLocations[index];

      if (locationsCookie !== undefined) {
        newLocations.splice(index, 1);
      }

      cookies.set('locations', JSON.stringify(newLocations));

      const action = removeLocationsSuccess(location);
      dispatch(action);
    } catch (error) {
      console.log(error);

      throw error;
    }
  };
};
