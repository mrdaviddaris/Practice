//Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument:

//All men are mortal; Socrates is a man; Therefore, Socrates is mortal.

//My solution:

let Men = ["mortal", "carbon-based", "biped"];
let Socrates = Men;
if (Socrates.includes("mortal")) {
  console.log("Socrates is mortal.")
}

//My answer was rejected. I am certain it was because I stacked the deck (unknowingly, newbie, ha) So I Googled it and found:

let men = ["Peter", "James", "Socrates", "Ceaser"];
let areAllMenMortal = true;

console.log("~Using if else~");
if (areAllMenMortal) {
  console.log("All men are mortal");

  // Checking if Socrates is a man
  for (i = 0; i < men.length; i++) {
    if (men[i] == "Socrates") {
      console.log("Socrates is a man");
      console.log("Therefore, Socrates is mortal");
    } else {
      console.log(men[i] + " is not Socrates but is mortal");
    }
  }
}
