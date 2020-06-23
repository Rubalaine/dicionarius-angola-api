const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/food.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllFood(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneFood(req, res) {
		try {
			const getOneFood = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneFood);
		} catch(error) {
			res.json(error);
		}
	}
}
