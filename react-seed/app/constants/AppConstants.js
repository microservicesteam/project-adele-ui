import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;

export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
export const ITEMS_UPDATED = 'ITEMS_UPDATED';

export const EVENTS_GET_SUCCESS = "EVENTS_GET_SUCCESS";
export const EVENTS_GET_ERROR = "EVENTS_GET_ERROR";
export const EVENTS_UPDATED = 'EVENTS_UPDATED';
