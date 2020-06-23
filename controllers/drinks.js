const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/drinks.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllDrinks(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneDrinks(req, res) {
		try {
			const getOneDrinks = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneDrinks);
		} catch(error) {
			res.json(error);
		}
	}
}
