const memeButton = document.getElementById("memeButton");
const loveButton = document.getElementById("loveButton");
const chaosButton = document.getElementById("chaosButton");
const memeImage = document.getElementById("memeImage");
const memeQuote = document.getElementById("memeQuote");

const chaosUrls = [
  "https://i.imgflip.com/7yzx5t.jpg",
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.imgflip.com/6j6h9e.jpg",
  "https://i.imgflip.com/4t0m5.jpg",
  "https://i.imgflip.com/aabwut.jpg",
  "https://i.imgur.com/I3YfJZl.gif",
  "https://i.imgur.com/qK42fUu.gif",
  "https://i.imgur.com/v6RAd7c.gif"
];

function showTrollMessage(text, bg) {
  memeImage.classList.remove("show");
  memeQuote.classList.remove("show");
  memeQuote.textContent = text;
  memeQuote.classList.add("show");
  document.body.style.background = bg;
}

// 🌀 Button 1 — “Sike 😎”
memeButton.addEventListener("click", () => {
  showTrollMessage("Sike 😎", "linear-gradient(135deg, #ffe29f, #ffa99f)");
});

// 💅 Button 2 — “You thought 😌”
loveButton.addEventListener("click", () => {
  showTrollMessage("You thought 😌 Guess third time’s the charm?", "linear-gradient(135deg, #ffc3a0, #ffafbd)");
});

// 💥 CHAOS UNLEASHED
chaosButton.addEventListener("click", async () => {
  showTrollMessage("ALRIGHT... YOU ASKED FOR IT 💀🔥", "linear-gradient(135deg, #ff9a9e, #fad0c4)");
  
  // Add chaos effects
  document.body.classList.add("flash");
  document.querySelector(".container").classList.add("shake");

  setTimeout(async () => {
    try {
      const randomLocal = chaosUrls[Math.floor(Math.random() * chaosUrls.length)];
      const response = await fetch("https://meme-api.com/gimme");
      const data = await response.json();

      memeImage.src = Math.random() > 0.5 ? data.url : randomLocal;
      memeQuote.textContent = Math.random() > 0.5 ? data.title : "PURE CHAOS. NO ESCAPE. 💀🔥";

      memeImage.classList.add("show");
      memeQuote.classList.add("show");

      document.body.classList.remove("flash");
      document.querySelector(".container").classList.remove("shake");

      const chaosBG = [
        "linear-gradient(135deg, #ffecd2, #fcb69f)",
        "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        "linear-gradient(135deg, #fad0c4, #ffd1ff)",
        "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
      ];
      document.body.style.background = chaosBG[Math.floor(Math.random() * chaosBG.length)];
    } catch {
      memeQuote.textContent = "Even chaos gave up 😭";
      document.body.classList.remove("flash");
      document.querySelector(".container").classList.remove("shake");
    }
  }, 1300);
});
