
$(document).ready(function () {
  $('.Group').hover(
    function () {
      // Mouseenter event: Toggle the "Highlight" class when hovering over
      $(this).toggleClass('Highlight');
    },
    function () {
      // Mouseleave event: Toggle the "Highlight" class back off when leaving
      $(this).toggleClass('Highlight');
    }
  );




});



