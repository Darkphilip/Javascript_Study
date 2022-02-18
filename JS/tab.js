
// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).click(function() {
//     openTab(i);
//   })
// }
$('.list').data('작명', '값');

$('.list').click(function(e) {
    openTab(e.target.dataset.id)

});

function openTab(num) {
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(num).addClass('active');
  $('.tab-content').eq(num).addClass('show');
}