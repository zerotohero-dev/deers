'use strict';
const fs = require('fs');
const path = require('path');

module.exports = () => {
	const deers = fs.readFileSync(path.join(__dirname, 'deers.txt'), 'utf8').replace(/\n$/, '').split('\n\n\n');
	
	deers.random = () => {
		return deers[Math.floor(Math.random() * deers.length)]
	}
	
	return deers	
}