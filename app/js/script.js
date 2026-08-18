document.getElementById("year").textContent = new Date().getFullYear();

async function loadAboutContent() {
  const container = document.getElementById("about-content");
  if (!container) return;

  try {
    const response = await fetch("data/about.json");
    if (!response.ok) throw new Error("About content could not be loaded.");
    const data = await response.json();
    if (!Array.isArray(data.paragraphs) || !data.paragraphs.length) return;

    container.replaceChildren(...data.paragraphs.map(function (text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      return paragraph;
    }));
  } catch (error) {
    console.warn(error.message);
  }
}

loadAboutContent();

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
