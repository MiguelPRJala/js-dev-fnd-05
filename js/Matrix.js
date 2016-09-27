/**
 * Created by Miguel.Pari on 9/23/2016.
 */

var Matrix = function (size) {
    if (size <= 0) {
        console.error("The size should be greater than 0.");
    }
    this.Size = size;
    this.matrix = [];
    for (var i = 0; i < this.Size; i++) {
        this.matrix.push([]);
        this.matrix[i].push(new Array());
        for (var j = 0; j < this.Size; j++) {
            this.matrix[i][j] = "";
        }
    }
    return;
};

Matrix.prototype.FillPosition = function (x, y, value) {
    this.matrix[x][y] = value;
    return;
};

Matrix.prototype.GetPosition = function (x, y) {
    return this.matrix[x][y];
};

Matrix.prototype.Display = function () {
    var text = "";
    for (var i = 0; i < this.Size; i++) {
        for (var j = 0; j < this.Size; j++) {
            text = text + " " + this.matrix[i][j];
        }
        text = text + "\n";
    }
    console.log(text);
    return;
};
