// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache") {
    badge = "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPL") {
    badge = "![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "Apache"){
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL") {
    licenseLink = "https://opensource.org/licenses/GPL-3.0";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 let licenseSection = "";
 if (license === "None"){
  licenseSection = "";
 } else {
  licenseSection = `License: ${license}`
 }
 return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  by ${data.name}
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contact-Me](#contact-me)
  * [Contributors](#contributors)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.require}
  ## Usage
  ${data.usage}
  ## Contact-Me
  * Name - ${data.name}
  * Email - ${data.email}
  * GitHub - [${data.github}](https://github.com/${data.github})
  ## Contributors
  ${data.contributors}
  ## Testing
  XXX
  ${data.test}
  ${renderLicenseSection(data.license)}
  `;
}

export default generateMarkdown;
