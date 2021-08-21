$(".profile").click(function() {
  $('.hidden').hide();
  $(".profile").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".search").click(function() {
  $('.hidden').hide();
  $(".search").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".member").click(function() {
  $('.hidden').hide();
  $(".member").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".request").click(function() {
  $('.hidden').hide();
  $(".request").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".status").click(function() {
  $('.hidden').hide();
  $(".status").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".registration").click(function() {
  $('.hidden').hide();
  $(".registration").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".docs").click(function() {
  $('.hidden').hide();
  $(".docs").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});

$(".artefact").click(function() {
  $('.hidden').hide();
  $(".artefact").removeClass("active");
  $(this).addClass("active");
  $(this.getAttribute('href')).fadeIn(500);
  return false;
});
