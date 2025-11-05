class Grid {
	constructor(matrix) {
		this.matrix = matrix;
		this.outlineContext = this.#getContext(0, 0, "#444", true);
		this.cellSize = 32;
	}

	#getContext(w, h, color = "#111", isTransparent = false) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width = w;
		this.height = this.canvas.height = h;
		this.canvas.style.position = "absolute";
		this.canvas.style.background = color;
		if (isTransparent) {
			this.canvas.style.backgroundColor = "transparent";
		}
		document.body.appendChild(this.canvas);

		return this.context;
	}

	render() {
		const w = this.cellSize * this.matrix[0].length;
		const h = this.cellSize * this.matrix.length;

		this.outlineContext.canvas.width = w;
		this.outlineContext.canvas.height = h;

		for (let row = 0; row < this.matrix.length; row++) {
			for (let col = 0; col < this.matrix[row].length; col++) {
				this.outlineContext.fillStyle = this.matrix[row][col] > 0 ? "salmon" : "transparent";
				this.outlineContext.fillRect(col * this.cellSize ,
					row * this.cellSize,
					this.cellSize, this.cellSize);
			}
		}
	}
}

const gridMatrix = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const walls = new Grid(gridMatrix);
walls.render();