import pkg from "../../package";

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;

export const EVENTS_GET_SUCCESS = "EVENTS_GET_SUCCESS";
export const EVENTS_GET_ERROR = "EVENTS_GET_ERROR";
export const EVENTS_UPDATED = 'EVENTS_UPDATED';

export const VENUE_GET_SUCCESS = "VENUE_GET_SUCCESS";
export const VENUE_GET_ERROR = "VENUE_GET_ERROR";
export const VENUES_UPDATED = 'VENUES_UPDATED';

export const SECTORS_GET_SUCCESS = "SECTORS_GET_SUCCESS";
export const SECTORS_GET_ERROR = "SECTORS_GET_ERROR";
export const SECTORS_UPDATED = 'SECTORS_UPDATED';
