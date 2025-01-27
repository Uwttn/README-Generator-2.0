// Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    }
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return ``;
    }
    return `https://opensource.org/licenses/${license}`;
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return ``;
    } return `## License
    This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
    ${licenseBadge}
  
     ## Description
    ${data.description}
  
    ${licenseSection}
  `;
  }
  
  module.exports = generateMarkdown;