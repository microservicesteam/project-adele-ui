import {EventEmitter} from "events";
import {forEach, toArray, find, filter} from "lodash";

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

  findFirstBy(field, value) {
    return find(this.data, function (item) {
      return item.hasOwnProperty(field) && item[field] === value;
    });
  }

  findAllBy(field, value) {
    return filter(this.data, function (item) {
      return item.hasOwnProperty(field) && item[field] === value;
    });
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
