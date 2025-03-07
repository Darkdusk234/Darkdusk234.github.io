document.addEventListener("DOMContentLoaded", getGithubProjects());

const overlays = [];

async function getGithubProjects() {
    const projectsListElement = document.getElementById("githublist");
    try {
        projectsListElement.innerHTML = "<p>Loading github projects..</p>";
        const response = await fetch("https://api.github.com/users/Darkdusk234/repos");
        if(!response.ok)
        {
            throw new Error("Kunde inte hämta data.");
        }
        const data = await response.json();
        console.log(data);
        showProjects(data);
    } catch (error) {
        showError(error);
    }
}

function showProjects(projects) {
    const projectsListElement = document.getElementById("githublist");
    projectsListElement.innerHTML = "";
    const projectsPopUpContainer = document.getElementById("popupcontainer")

    projects.forEach(project => {
        const projectElement = document.createElement("li");
        const projectPopUpElement = document.createElement("div");
        projectPopUpElement.id = `${project.name}info`;
        projectPopUpElement.className = "overlay";
        let description = "test";
        const projectName = project.name;
        const link = project.html_url;

        overlays.push(projectName);

        if(project.description)
        {
            description = project.description;
        }
        else
        {
            description = "Projektet saknar beskrivning."
        }

        projectElement.innerHTML =
        `<h2>${projectName}</h2>
        <p><a class="button" href="#${projectName}info">Info</a></p>`

        projectsListElement.appendChild(projectElement);

        projectPopUpElement.innerHTML = 
        `<div class="popup">
            <h2>${projectName}</h2>
            <a class="close" href="#">&times;</a>
            <article class="popupcontent">
                <p>
                    ${description}
                </p>
                    <a href="${link}">
                    <h3>Länk till github repot</h3>
                </a>
            </article>
        </div>`;

        projectsPopUpContainer.appendChild(projectPopUpElement);
    })
}

function showError(error) {
    const courseListElement = document.getElementById("githublist");
    courseListElement.innerHTML =
    `<p class="error">Ett fel har uppstått: ${error.message}</p>`;
}

function modalClose() {
    overlays.forEach(overlay => {
        if (location.hash == '#studentportalinfo') {
            location.hash = '';
        }
        else if (location.hash == `#${overlay}info`) {
            location.hash = '';
        }
    })
}

// Handle ESC key (key code 27)
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modalClose();
    }
});

var modal = document.querySelector('#studentportalinfo');

// Handle click on the modal container
modal.addEventListener('click', modalClose, false);

// Prevent event bubbling if click occurred within modal content body
modal.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);