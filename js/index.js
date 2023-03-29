"use strict";
import Figure from "./Figure.js";
//import Rectangle from './Rectangle.js';
//import Circle from './Circle.js';
//import Square from './Square.js';

const form = {
	changeSelect(e) {},

	init() {
		console.log("Form init!");
		document.getElementById('select').addEventListener('change', form.changeSelect)
	},


	inputElementsWithLabel(label, id) {	
		let htmlString = `
		<label>${label}"
		<input id="${id}" type="number">
		</label>`;
	document.getElementById('otherInputs').insertAdjacentHTML('beforeend', htmlString);
	},




	submitForm(e) {},
};

form.init();
