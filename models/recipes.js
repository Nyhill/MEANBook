'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Recipe Schema
 */
var RecipeSchema = new Schema({
	rimg: {
		type: String,
		
	},
	rname: {
		type: String,
		trim: true,
	},
	rdesc: {
		type: String,
		trim: true
	},
	ingredients: {
		type: [String],
	},
	stages: {
		type: [String],
	},
	prepimg: {
		type: [String],
	}
});

mongoose.model('recipes', RecipeSchema);