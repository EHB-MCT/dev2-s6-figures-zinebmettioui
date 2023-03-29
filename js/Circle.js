import Figure from "./Figure.js";

export default class Circle extends figure  {
    constructor(radius) {
        this.radius = radius;
         
    }

    get diameter () {
        this.radius = radius; 
    }

    get Area() {
        Math.PI * this.radius * this.radius; 
    }

    get Circumference() {
        2 * Math.PI * This.radius;
    }

    get htmlString () {
        return`
        <div class="result">
        <div class="figure circle" style="width: ${this.diameter}px; height: ${this.diameter}px;"></div>
            <div class="infoBox">
                <h3>Circle</h3>
                <dl>
                <dt>Radius</dt>
                <dd>${this.radius} px</dd>

                <dt>Diameter</dt>
                <dd>${this.diameter} px</dd>

                <dt>Area</dt>
                <dd>${this.are} px</dd>

                <dt>Circumference</dt>
                <dd>${this.circumference} px</dd>
                </dl>
            </div>
        </div>
        `
    }
}
