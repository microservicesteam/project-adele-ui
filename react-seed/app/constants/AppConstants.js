import pkg from "../../package";

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;

export const EVENTS_GET_SUCCESS = "EVENTS_GET_SUCCESS";
export const EVENTS_GET_ERROR = "EVENTS_GET_ERROR";
export const EVENTS_UPDATED = 'EVENTS_UPDATED';
