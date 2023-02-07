// DB에 접근해서 저장, 수정, 삭제, 가져오기를 실행
const mongoose = require('mongoose');

// Define Schemes
const noteSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		author: { type: String, default: false },
	},
	{
		timestamps: true,
		collection: 'notes',
	}
);

noteSchema.statics.findAll = function () {
	return this.find({});
};

noteSchema.statics.create = function (payload) {
	try {
		const note = new this(payload);
		return note.save();
	} catch (err) {
		return err;
	}
};

// Create Model & Export
module.exports = module.exports = mongoose.model('note', noteSchema);
