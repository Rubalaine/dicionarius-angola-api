const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/traditional.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllTraditional(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneTraditional(req, res) {
		try {
			const getOneTraditional = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneTraditional);
		} catch(error) {
			res.json(error);
		}
	}
}
