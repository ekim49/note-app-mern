const express = require('express');
const Note = require('../models/note.js');

// DB에 접근하는 객체를 불러와 모든 note를 가져온 뒤, 성공/실패 여부를 리턴하는 기능
const note = {
	readAll: async (req, res) => {
		const notes = await Note.findAll();
		try {
			if (!notes.length) {
				return res.status(404).send({
					err: 'Note Not Found :(',
				});
			}
			res.send(notes);
		} catch (err) {
			res.status(500).send(err);
		}
	},
	write: async (req, res) => {
		try {
			if (!req.body) {
				res.status(400).send('data를 입력해주세요.');
				return;
			}
			const result = await Note.create(req.body);
			console.log('result : ', result);
			res.status(200).send(result);
		} catch (err) {
			res.status(500).send(err);
		}
	},
};

module.exports = note;
