$("ul").on("click", "li",  function(){
    $(this).toggleClass("complete");
});

$("ul").on("click", "span",  function(event){
    $(this).parent().fadeOut(500, function(){
    	$(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + todotext + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});