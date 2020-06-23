const express = require('express');
const fs = require('fs');

const dictactionData = fs.readFileSync("./provider/dictation.json", "utf8");
const parseJson = JSON.parse(dictactionData);

module.exports = {
	async getAllDictation(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneDictation(req, res) {
		try {
			const getDictationFilter = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getDictationFilter);
		} catch(error) {
			res.json(error);
		}
	}
}
