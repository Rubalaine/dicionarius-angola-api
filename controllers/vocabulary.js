const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/vocabulary.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllVocabulary(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneVocabulary(req, res) {
		try {
			const getOneVocabulary = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneVocabulary);
		} catch(error) {
			res.json(error);
		}
	}
}
