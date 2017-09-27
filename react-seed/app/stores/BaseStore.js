import {EventEmitter} from "events";
import {forEach, toArray} from "lodash";

export default class BaseStore extends EventEmitter {

  constructor(...args) {
    super(...args);
    this.data = {};
  }

  setAll(items) {
    var self = this;
    forEach(items, function (item) {
      if (item.hasOwnProperty("id")) {
        self.data[item["id"]] = item;
      }
    });
    this.emitChange();
  }

  getAll() {
    return toArray(this.data);
  }

  get(id) {
    if (this.data.hasOwnProperty(id)) {
      return this.data[id];
    }
    return null;
  }

  findBy(field, value) {
    var result = undefined;
    forEach(this.data, function (item) {
      if (item.hasOwnProperty(field) && item[field] == value) {
        result = item;
      }
    });
    return result;
  }

  set(item) {
    if (item.hasOwnProperty("id")) {
      this.data[item["id"]] = item;
      this.emitChange();
    }
  }

  remove(id) {
    if (this.data.hasOwnProperty(id)) {
      delete this.data[id];
      this.emitChange();
    }
  }
}
