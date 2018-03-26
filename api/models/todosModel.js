'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var form = new schema({
  deliveryId: {
    type: Number,
    Required: 'A delivery id must be specified'
  },
  storeId: {
    type: Number,
    Required: 'A store id must be specified'
  },
  restaurantName: {
    type: String,
    Required: 'A restaurant name is required'
  },
  logoUrl: {
    type: String,
    Required: 'A logo url is required'
  },
  cutoff: {
    type: String,
    Required: 'A cutoff time is required'
  },
  dropoff: {
    type: String,
    Required: 'A dropoff time is required'
  },
  soldOut: {
    type: Boolean,
    Required: 'A boolean for soldOut is requried'
  },
  sellingOut: {
    type: Boolean,
    Required: 'A boolean for sellingOut is requried'
  },
  isPastCutoff: {
    type: Boolean,
    Required: 'A boolean for isPastCutoff is requried'
  },
  isOrderPlaced: {
    type: Boolean,
    Required: 'A boolean for isOrderPlaced is requried'
  }
});

var delivery_day = new schema ({
  day: {
    type: String,
    Required: 'Day of Delivery is required'
  },
  deliveries: [form]
});

var taskSchema = new schema ({
  dropoffs: [delivery_day]
});

module.exports = mongoose.model('Tasks', taskSchema);