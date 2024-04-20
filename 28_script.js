const elementProfile = document.getElementById("profile");
console.log(elementProfile);
console.log(elementProfile.innerHTML);

console.log(`======querySelector() with element name =======`);

const elementH2 = document.querySelector("h2");
console.log(elementH2);
console.log(elementH2.innerHTML);

console.log(`======querySelector() with id techStack =======`);

const elementTechStack = document.querySelector("#techStack");
console.log(elementTechStack.innerHTML);

console.log(`======querySelector() with class ui =======`);

const elementUI = document.querySelector(".ui");
console.log(elementUI.innerHTML);

console.log(`MOdifying an existing element text`);
const techStackElement = document.querySelector(`#techStack`);
techStackElement.innerHTML = "My Expertise in UI";

console.log(`Changing CSS`);
techStackElement.style.color = "Orange"
