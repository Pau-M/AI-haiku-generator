function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "blahblah bff",
    autoStart: true,
    delay: "natural",
    cursor: "",
  });
}

let haikuForm = document.querySelector("#haiku-generator");
haikuForm.addEventListener("submit", generateHaiku);
