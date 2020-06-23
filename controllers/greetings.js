const express = require('express');
const fs = require('fs');

const data = fs.readFileSync("./provider/greetings.json", "utf8");
const parseJson = JSON.parse(data);

module.exports = {
	async getAllGreetings(req, res) {
		try {
			await res.json(parseJson);
		} catch(error) {
			await res.json({ message: error });
		}
	},

	async getOneGreetings(req, res) {
		try {
			const getOneGreetings = parseJson.filter(findId => {
				return findId.id == req.params.id;
			});
			res.json(getOneGreetings);
		} catch(error) {
			res.json(error);
		}
	}
}
