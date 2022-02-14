let anguloA = 35;
let anguloB = 45;
let anguloC = (170-35-45);

let isTriangle;

if (anguloA > 0 && anguloB > 0 && anguloC > 0)
{
    if (anguloA + anguloB + anguloC === 180)
        isTriangle = true;
    else
        isTriangle = false;
}
else
    isTriangle = false;

    console.log(isTriangle);