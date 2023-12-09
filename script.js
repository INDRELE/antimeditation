// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Get all hyperlinks on the page
  const hyperlinks = document.querySelectorAll('a');

  // Add event listener to each hyperlink
  hyperlinks.forEach(function (link) {
    // Add mouseover event
    link.addEventListener('mouseover', function () {
      // Change the style when the cursor is over the hyperlink
      link.style.textDecoration = 'underline'; // You can modify this style
      link.style.color = '#ffcc00'; // You can modify this color
    });

    // Add mouseout event
    link.addEventListener('mouseout', function () {
      // Restore the original style when the cursor leaves the hyperlink
      link.style.textDecoration = 'none';
      link.style.color = '#dda0dd';
    });
  });
});
