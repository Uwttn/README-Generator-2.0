// Select all hidden content elements
const hiddenContents = document.querySelectorAll(".hidden-content");
// Select the initial button
const initialButton = document.querySelector(".container button");

// Function to reveal the next content
function revealNextContent() {
  let currentIndex = 0;

  // Reveal the first hidden content
  function showContent() {
    if (currentIndex < hiddenContents.length) {
      hiddenContents[currentIndex].style.display = "block";

      // Add event listener to the Next button of the current content
      const nextButton = hiddenContents[currentIndex].querySelector("button");
      nextButton.addEventListener("click", () => {
        hiddenContents[currentIndex].style.display = "none"; // Hide the current content
        currentIndex++; // Move to the next content
        showContent(); // Show the next content
      });
    }
  }

  showContent(); // Start the process
}

// Add event listener to the initial button
initialButton.addEventListener("click", () => {
  initialButton.style.display = "none"; // Hide the initial button
  revealNextContent(); // Start revealing hidden contents
});
