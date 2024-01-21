function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let topic1 = document.querySelector("#topic1");
  let topic2 = document.querySelector("#topic2");
  let key = "630f42beb1a6c0d29a44a494adtbfo6a";
  let prompt = `write one haiku about ${topic1.value} and ${topic2.value} together`;
  let context =
    "You are a haiku generator. You write a haiku with every of haiku rules. Every first line of Haiku has 5 syllables, the second line has 7 syllables, and the third has 5 syllables - this is very important. Print every verse in next line with using <br />. sign at the end in new line as '- SheCodes AI' with bold effect ";

  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.classList.remove("hidden");
  haikuElement.innerHTML = `<div class="blink"> . . . . . .</div>`;

  axios.get(url).then(displayHaiku);
}

let haikuForm = document.querySelector("#haiku-generator");
haikuForm.addEventListener("submit", generateHaiku);
