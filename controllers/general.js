const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/general.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllGeneral(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneGeneral(req, res) {
		try {
			const getOneGeneral = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneGeneral);
		} catch(error) {
			res.json(error);
		}
	}
}
