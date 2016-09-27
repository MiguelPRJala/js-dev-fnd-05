/**
 * Created by Miguel.Pari on 9/23/2016.
 */

var Player = function(name){
    this.Name = name;
    this.Score = 0;
};

Player.prototype.AddScore = function (quantity) {
    this.Score += quantity;
};
