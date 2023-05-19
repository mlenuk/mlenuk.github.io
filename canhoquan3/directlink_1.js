const aScript = document.createElement("script");
aScript.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js");
document.body.append(aScript);
aScript.onload=()=>{
$(document).ready(function(){
$('body').addClass('xepo_ads');
});
$(document).on('click','.xepo_ads',function(e){
$(this).removeClass('xepo_ads');
//ubah google dengan ads direct link
window.open('https://www.highrevenuegate.com/hvxjc0rs?key=e4f552112f2a201be6e2cd3de228bc88', '_blank');
});
};
