// mobile navbar menu
$(function() {
  $('.btnMenu').on('click', function() {
    $('.center-menu').slideToggle(500);
    $('.right-menu').slideToggle(500);
  });
});

// modal toggle
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});

// modal toggle list
$('.modal-toggle-list').on('click', function(e) {
  e.preventDefault();
  $('.modal-list').toggleClass('is-visible');
});

// modal toggle accept
$('.modal-toggle-accept').on('click', function(e) {
  e.preventDefault();
  $('.modal-accept').toggleClass('is-visible');
});

// modal toggle decline
$('.modal-toggle-decline').on('click', function(e) {
  e.preventDefault();
  $('.modal-decline').toggleClass('is-visible');
});

// browse file
function browseFile() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    let files = Array.from(input.files);
    // console.log(files);
    document.getElementById("inputFile").value = files[0].name;
  };
  input.click();
}
