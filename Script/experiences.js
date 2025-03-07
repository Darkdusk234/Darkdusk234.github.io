document.addEventListener("DOMContentLoaded", getExperiences());

async function getExperiences() {
    try {
        const response = await fetch("../JSON/Experiences.json");
        if(!response.ok)
        {
            throw new Error("Kunde inte hämta data.");
        }
        const data = await response.json();
        showSchools(data.schools);
        showOtherExperiences(data.otherExperiences);
    } catch (error) {
        showError(error);
    }
}

function showSchools(schools) {
    const schoolListElement = document.getElementById("allSchoolsList");

    schools.forEach(school => {
        const schoolElement = document.createElement("li");

        schoolElement.innerHTML = 
        `<h3>${school.name}</h3>
        <ul class="schoolList">
        <li>${school.courseName} ${school.time}</li>
        </ul>`;
        schoolListElement.appendChild(schoolElement);
    })
}

function showOtherExperiences(experiences) {
    const experiencesListElement = document.getElementById("workexperienceslist");

    experiences.forEach(experience => {
        const experienceElement = document.createElement("li");

        experienceElement.innerHTML =
        `<div>${experience.time} ${experience.experience}`
        experiencesListElement.appendChild(experienceElement);
    })
}

function showError(error) {
    const courseListElement = document.getElementById("allSchoolsList")
    courseListElement.innerHTML =
    `<p class="error">Ett fel har uppstått: ${error.message}</p>`
}