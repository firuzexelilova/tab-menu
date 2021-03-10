$('.tab_navbar li').click(function(){
index=$(this).index();
$('.tab_navbar li').removeClass('active');
$(this).addClass('active')
$('.tab_content').hide();
$('.tab_content').eq(index).show();
})