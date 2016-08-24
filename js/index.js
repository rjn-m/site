var i=0;
$('input[type="checkbox"]').on('change', function() {
      $(this).parent().parent().parent().children(".overlay").addClass("overlay-vis");
      $(this).parent().parent().parent().addClass("ghost");
      $(this).parent().parent().parent().addClass("hide");
      i++;
      if (i>=6) {
      $(this).parent().parent().parent().parent().children(".courses-all-done").addClass("visible-all-done");
      }    
});