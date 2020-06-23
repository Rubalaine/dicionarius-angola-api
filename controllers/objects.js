const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/objects.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllObjects(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneObjects(req, res) {
		try {
			const getOneObjects = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneObjects);
		} catch(error) {
			res.json(error);
		}
	}
}
