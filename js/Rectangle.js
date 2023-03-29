import Figure from "./Figure.js";

export default class Rectangle extends Figure {
	constructor(width, height) {
		super("rectangle");
		this.width = width;
		this.height = height;
	}

	get Area() {
		let areo = this.width * this.height;
		return area;
	}

	get Circumference() {
		let cf = this.width + this.height * 2;
		return cf;
	}

	get htmlString() {
		return `
		<div class="result">
			<div class="figure rectangle" style="width: ${this.width}px; height: ${this.height}px;"></div>
			<div class="infoBox">
				<h3>${this.name}</h3>
				<dl>
					<dt>Height</dt>
					<dd>${this.height} px</dd>

					<dt>Width</dt>
					<dd>${this.width} px</dd>

					<dt>Area</dt>
					<dd>${this.area} px</dd>

					<dt>Circumference</dt>
					<dd>${this.circumference} px</dd>
				</dl>
			</div>
		</div>
        `;
	}
}
