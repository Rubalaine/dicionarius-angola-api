const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/expressions.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllExpressions(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneExpressions(req, res) {
		try {
			const getOneExpressions = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneExpressions);
		} catch(error) {
			res.json(error);
		}
	}
}
