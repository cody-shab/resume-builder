// Selected the skills' section + the toggle button to work upon
var skillsSection = document.getElementById('skills');
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
// here i have added an event listener to the button
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});
