async function getData() {
  try {
    const response = await fetch("cv.json");

    if (!response.ok) {
      throw new Error("Kunde inte hämta data. " + response.statusText);
    }
    const data = await response.json();
    console.log(data.education);
    console.log(data.work);
    console.log(data.skills);

    showEducation(data.education);
    showWork(data.work);
    showSkills(data.skills);
    
  } catch (error) {
    showError(error);
  }
}
getData();

function showEducation(education) {
  const educationListElement = document.querySelector("#education");
  if (!educationListElement) {
    console.error("Hittar inte elementet #education i HTML.");
    return;
  }

  educationListElement.innerHTML = "";
  education.forEach((edu) => {
    const educationElement = document.createElement("p");
    educationElement.innerHTML = `
      ${edu.title}, ${edu.school}, ${edu.duration}`;

    educationListElement.appendChild(educationElement);
  });
}

function showWork(work) {
  const workListElement = document.querySelector("#work");
  if (!workListElement) {
    console.error("Hittar inte elementet #work i HTML.");
    return;
  }

  workListElement.innerHTML = "";
  work.forEach((w) => {
    const workElement = document.createElement("p");
    workElement.innerHTML = `
      ${w.position}, ${w.company}, ${w.duration}`;

    workListElement.appendChild(workElement);
  });
}

function showSkills(skills) {
  const skillListElement = document.querySelector("#skills");
  if (!skillListElement) {
    console.error("Hittar inte elementet #skills i HTML.");
    return;
  }

  skillListElement.innerHTML = "";
  skills.forEach((skill) => {
    const skillElement = document.createElement("p");
    skillElement.innerHTML = skill;

    skillListElement.appendChild(skillElement);
  });
}

function showError(error) {
  const educationListElement = document.getElementById("education");

  educationListElement.innerHTML = `
    <p class="error">Ett fel inträffade: ${error.message}</p>`;
}
