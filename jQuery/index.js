$('h1').addClass('judulGede');
$('body').css('text-align', 'center');
$('.tombol').addClass('tombolPencetan').html('<i>hmm</i>');
$('img').attr('src', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/We_Have_All_the_Time_in_the_World_by_Louis_Armstrong_1994_re-release.png/330px-We_Have_All_the_Time_in_the_World_by_Louis_Armstrong_1994_re-release.png');
$('button').on('click', function () {
  $('h1').slideToggle();
});

$('img').on('click', function () {
  location.reload();
});
