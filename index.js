function openModal() {
  $(".hero").append("<div class='modal'></div>");
  $("<iframe src='https://www.youtube.com/embed/tgbNymZ7vqY' frameborder='0' scrolling='no' id='myFrame'></iframe>").appendTo(".modal");
}
