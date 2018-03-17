fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(93, 73, 161);
triangle(205, 91, 307, 281, 96, 280);
fill(255, 255, 255);

var answer = floor(random(0, 9));

var f = createFont("monospace");
var f2 = createFont("fantasy");
var f3 = createFont("cursive");
var f4 = createFont("serif");

if (answer === 0) {
    textSize(20);
    text("Certainly", 161, 219);
}
else if (answer === 1) {
    textFont(f);
    textSize(82);
    text("No", 160, 250);
}
else if (answer === 2) {
    textFont(f2);
    textSize(23);
    text("Absolutely", 152, 231);
}
else if (answer === 3) {
    textFont(f3);
    textSize(23);
    text("Certainly", 153, 219);
    text("not", 179, 252);
}
else if (answer === 4) {
    textFont(f4);
    textSize(38);
    text("Nope",161, 238);
}
else if (answer === 5) {
    textSize(20);
    text("Obviously", 152, 231);
}
else if (answer === 6) {
    textSize(70);
    text("Yes", 143 ,250);
}
else if (answer === 7) {
    textSize(40);
    text("Maybe", 143 ,250);
}
else if (answer === 8) {
    textSize(35);
    text("Possibly", 140, 250);
}
