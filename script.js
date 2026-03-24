const inputs = {
  name: document.getElementById("name"),
  title: document.getElementById("title"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  location: document.getElementById("location"),
  linkedin: document.getElementById("linkedin"),
  summary: document.getElementById("summary"),
  skills: document.getElementById("skills"),
}

const previews = {
  name: document.getElementById("preview-name"),
  title: document.getElementById("preview-title"),
  email: document.getElementById("preview-email"),
  phone: document.getElementById("preview-phone"),
  location: document.getElementById("preview-location"),
  linkedin: document.getElementById("preview-linkedin"),
  summary: document.getElementById("preview-summary"),
  skills: document.getElementById("preview-skills"),
}

Object.keys(inputs).forEach((key) => {
  inputs[key].addEventListener("input", updatePreview)
})

function updatePreview() {
  previews.name.textContent = inputs.name.value || "Your Name"
  previews.title.textContent = inputs.title.value || "Job Title"

  previews.email.textContent = inputs.email.value
  previews.phone.textContent = inputs.phone.value
  previews.location.textContent = inputs.location.value
  previews.linkedin.textContent = inputs.linkedin.value
  previews.summary.textContent = inputs.summary.value
  previews.skills.textContent = inputs.skills.value

  document.getElementById("preview-summary-section").style.display = inputs.summary.value ? "block" : "none"
  document.getElementById("preview-skills-section").style.display = inputs.skills.value ? "block" : "none"
}

function addExperience() {
  const list = document.getElementById("experience-list")
  const div = document.createElement("div")
  div.className = "experience-item"
  div.innerHTML = `
    <input type="text" class="job-title" placeholder="Job Title">
    <input type="text" class="company" placeholder="Company">
    <input type="text" class="duration" placeholder="Duration">
    <textarea class="description" rows="3" placeholder="Job description..."></textarea>
    <button onclick="this.parentElement.remove()" style="background:#e74c3c; padding:0.5rem 1rem;">Remove</button>
  `
  list.appendChild(div)
  div.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", updateExperiencePreview)
  })
  updateExperiencePreview()
}

function addEducation() {
  const list = document.getElementById("education-list")
  const div = document.createElement("div")
  div.className = "education-item"
  div.innerHTML = `
    <input type="text" class="degree" placeholder="Degree">
    <input type="text" class="institution" placeholder="Institution">
    <input type="text" class="year" placeholder="Year">
    <button onclick="this.parentElement.remove()" style="background:#e74c3c; padding:0.5rem 1rem;">Remove</button>
  `
  list.appendChild(div)
  div.querySelectorAll("input").forEach((el) => {
    el.addEventListener("input", updateEducationPreview)
  })
  updateEducationPreview()
}

function updateExperiencePreview() {
  const items = document.querySelectorAll(".experience-item")
  const container = document.getElementById("preview-experience")
  container.innerHTML = ""
  let hasContent = false

  items.forEach((item) => {
    const title = item.querySelector(".job-title").value
    const company = item.querySelector(".company").value
    const duration = item.querySelector(".duration").value
    const desc = item.querySelector(".description").value

    if (title || company || duration || desc) {
      hasContent = true
      const div = document.createElement("div")
      div.className = "job-entry"
      div.innerHTML = `
        <h3>${title}</h3>
        <p class="company">${company}</p>
        <p class="duration">${duration}</p>
        <p>${desc}</p>
      `
      container.appendChild(div)
    }
  })

  document.getElementById("preview-experience-section").style.display = hasContent ? "block" : "none"
}

function updateEducationPreview() {
  const items = document.querySelectorAll(".education-item")
  const container = document.getElementById("preview-education")
  container.innerHTML = ""
  let hasContent = false

  items.forEach((item) => {
    const degree = item.querySelector(".degree").value
    const institution = item.querySelector(".institution").value
    const year = item.querySelector(".year").value

    if (degree || institution || year) {
      hasContent = true
      const div = document.createElement("div")
      div.className = "edu-entry"
      div.innerHTML = `
        <h3>${degree}</h3>
        <p class="institution">${institution}</p>
        <p class="year">${year}</p>
      `
      container.appendChild(div)
    }
  })

  document.getElementById("preview-education-section").style.display = hasContent ? "block" : "none"
}

document.querySelectorAll(".experience-item input, .experience-item textarea").forEach((el) => {
  el.addEventListener("input", updateExperiencePreview)
})

document.querySelectorAll(".education-item input").forEach((el) => {
  el.addEventListener("input", updateEducationPreview)
})

updatePreview()
updateExperiencePreview()
updateEducationPreview()
