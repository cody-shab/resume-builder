// Selected the skills' section + the toggle button to work upon
const skillsSection = document.getElementById('skills') as HTMLElement;
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;

// here i have added an event listener to the button
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
}); 




