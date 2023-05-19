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
window.open('https://www.highrevenuegate.com/z1zch5u7?key=3f54a31fb0971a96d274864383d1fd9a', '_blank');
});
};
