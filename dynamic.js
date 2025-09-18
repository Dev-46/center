//alert("javscript");
// Get a reference to the button element
const myButton = document.getElementById('myButton'); // Replace 'myButton' with your button's actual ID

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position of the window
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Check if the scroll position is at the top (scrollTop is 0)
  if (scrollTop !== 0) {
    // If at the top, hide the button
    myButton.style.display = 'none'; // Or myButton.style.visibility = 'hidden';
  } else {
    // If not at the top, show the button
    myButton.style.display = 'block'; // Or myButton.style.visibility = 'visible';
  }
});

// Optionally, trigger the check on page load to ensure initial state is correct
window.dispatchEvent(new Event('scroll'));


