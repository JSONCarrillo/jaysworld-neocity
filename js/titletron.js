const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// TITLETRON! Makes the title in the tab scroll the full length of text

const titletron = async () => {
  let text = "Welcome to Jay's World! ";
  let title = document.querySelector("title");
  let index = 0;
  let deleted_letters = "";
  title.innerText = "";
  // Initial write out  of the text
  for (index = 0; index < text.length; index++) {
    title.innerText += text[index];
    await delay(100);
  }
  // Wait 1 second
  await delay(1000);
  // Loop for the scrolling title
  while (true) {
    if (index == text.length) {
      index = 0;
      deleted_letters = "";
    }
    // Adds deleted letters to this string
    deleted_letters += text[index];

    // Appends deleted letters to the back of the text line
    title.innerText = text.slice(index, text.length) + deleted_letters;
    // wait 1/4 second and increase index
    await delay(250);
    index++;
  }
};

titletron();
