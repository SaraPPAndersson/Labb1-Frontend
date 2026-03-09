const baseURL = "https://api.github.com/repos/SaraPPAndersson/";
let loadedProjects = 0;

fetchGitHubInfo("Biblioteket");
fetchGitHubInfo("Labb2School");

async function fetchGitHubInfo(repo) {
  const response = await fetch(`${baseURL}${repo}`);

  if (!response.ok) {
    console.log("Något gick fel");
    return;
  }

  const data = await response.json();

  if (repo == "Biblioteket") {
    showText(data.description, "bibliotekText");
    showName(data.name, "bibliotekName");
  } 
  else if (repo == "Labb2School") {
    showText(data.description, "databasText");
    showName(data.name, "databasName");
  }

  loadedProjects++;

  if (loadedProjects === 2) {
    setTimeout(hideLoading, 1500);
  }
}

function showText(text, id) {
  const textElement = document.getElementById(id);

  if (text) {
    textElement.textContent = text;
  }
}

function showName(name, id) {
  const nameElement = document.getElementById(id);

  if (name) {
    nameElement.textContent = name;
  }
}

function hideLoading() {
  document.getElementById("loadingScreen").style.display = "none";

  const projects = document.getElementById("projectList");

  projects.classList.toggle("showProjects");
}
