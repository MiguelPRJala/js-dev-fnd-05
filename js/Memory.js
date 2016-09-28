/**
 * Created by Miguel.Pari on 9/23/2016.
 */

var Memory = function (size, players) {
    this.Size = size;
    this.NumberPlayers = players; // Number of players
    this.AteriskMatrix = new Matrix(size);
    this.RandomMatrix = new Matrix(size);
    this.Players = new Array(players);    
    return;
};

Memory.prototype.Start = function () {
    this.GenerateAsteriskMatrix();
    this.GenerateRandomMatrix();
    this.SetPlayers();
};

Memory.prototype.GenerateAsteriskMatrix = function () {
    for (var i = 0; i < this.Size; i++) {
        for (var j = 0; j < this.Size; j++) {
            this.AteriskMatrix.FillPosition(i, j, '*');
        }    
    }
    return;
};

Memory.prototype.GenerateRandomMatrix = function (){
    var values = new Array();
    var counter = 0;
    for (var i = 0; i < (this.Size * this.Size) / 2; i++) {
        var value = i + 1;
        if (value <= 9) {
            value = "0" + value;            
        }        
        values[counter] = value;
        values[counter + 1] = value;
        counter += 2;
    }
    
    for (var i = 0; i < this.Size; i++) {
        for (var j = 0; j < this.Size; j++) {
            var random = parseInt(Math.random() * (values.length - 1 - 0) + 0);
            this.RandomMatrix.FillPosition(i, j, values[random]);
            values.splice(random, 1); // Remove index
        }
    }
    
    return;
};

Memory.prototype.SetPlayers = function () {
    for (var i = 0; i < this.NumberPlayers; i++) {
        this.Players[i] = new Player("Player" + i);
    }
};

Memory.prototype.SetMatrixSize = function (){

};

Memory.prototype.EnterXYPosition = function (x,y){
    
};
/*
Memory.prototype.EndGame() {
    for (var i = 0; i < this.Players.length - 1; i++) {
        if (this.Players[i] >)
    }
    return;
}*/