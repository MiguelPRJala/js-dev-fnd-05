/**
 * Created by Miguel.Pari on 9/23/2016.
 */

var Matrix = function (size) {
    this.matrix = [];
    
    for (var i = 0; i < size; i++) {
        this.matrix.push([]);
        this.matrix[i].push(new Array());
        for (var j = 0; j < size; j++) {
            this.matrix[i][j] = 0;
        }
    }
};

Matrix.prototype.FillPosition = function (x, y, value) {
    this.matrix[x][y] = value;
    return;
};

Matrix.prototype.GetPosition = function (x, y, value) {
    return this.matrix[x][y];
};

Matrix.prototype.Display = function () {
    for (var i = 0; i < this.matrix[i].length; i++) {
        for (var j = 0; j < this.matrix.length; j++) {
            console.log(this.matrix[j][i]);
        }
    }
    return;
};
