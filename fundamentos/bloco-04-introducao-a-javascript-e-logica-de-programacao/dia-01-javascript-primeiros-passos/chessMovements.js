let piece = "kiNg";
let movement;

let pieceCorrected = piece.toLowerCase();

switch (pieceCorrected)
{
    case "bishop":
        movement = "diagonals"
        break;
    case "tower":
        movement = "horizontals + verticals";
        break
    case "horse":
        movement = "L-shape";
        break
    case "queen":
        movement = "any direction";
        break
    case "king":
        movement = "one square in any direction";
        break
    case "pawn":
        movement = "forward (attacks diagonally)";
        break
}

console.log(movement);