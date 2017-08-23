//---------task [1-3]-------------------

$(".enter_Task1").on ('click',function(event){
	event.preventDefault();
	$('form').append(' <p><input type="text" class = "NewInpText" placeholder = "Заполните поле!"> <button class="removeNewInpText"> - </button></p>');

	$(".removeNewInpText").on ('click',function(){
		$(this).parent().remove(); 
	});
});

$(".сompile").on ('click',function(event){
	event.preventDefault();
	$('.area').slideDown(2500);
	let inputArray = [];  
	let select = $ ("input[name = 'radio']:checked").val();

	$("input[type = 'text']").each(function(indx){
		inputArray.push($(this).val());
		if (inputArray.length>10){
			alert ("кол-во инпутов не должно превышать 10 шт.!!!");
		}
		if ($(this).val()== ("")){
			$(this).css({"background" : "pink"}); 
			
		} else ($(this).css({"background" : "white"})); 


		if (select ==  ("even") && (indx % 2==0 )){
			$( "input[type = 'text']:even" ).css( "background-color", "orange" );
		// $ (".area").append ($( "input[type = 'text']:even" ).val() + '\n');
		$ (".area").append (inputArray[indx] + '\n');

	} else if (select ==  ("odd") && (indx % 2==1 )){
		$( "input[type = 'text']:odd" ).css( "background-color", "blue" );
       // $ (".area").append ($( "input[type = 'text']:odd" ).val() + '\n');
       $ (".area").append (inputArray[indx] + '\n');
   }
});
	if (select ==  ("all")){
		$ (".area").append (inputArray + '\n');
	}
});

$(".сleanUp").on ('click',function(){
	location.reload();
});
//---------task4-------------------
$(".enter_Task4").on ('click',function(){
	$('.box_1').slideDown(1500);
	$ (".out").empty();
});
$(".option_1").on ('click',function(){
	$('.box_1').slideUp(1500);
	$ (".out").append ("<p> Вы выбрали опцию 1 </p>").css({"color" : "red"});
});
$(".option_2").on ('click',function(){
	$('.box_1').slideUp(1500);
	$ (".out").append ("<p> Вы выбрали опцию 2 </p>").css({"color" : "blue"});
});

//---------task5-------------------

$(".box_2").on ('click', 'p', function(){ // - делегированная обработка событий
	$(this).toggleClass('clicked');
});

$(".enter_NewElement").on ('click',function(){
	$('.box_2').append(' <p class = "element"> новый элемент </p>');

});
$(".enter_Task5").on ('click',function(){
	$('.box_2').slideToggle(1500);
});
//---------task6-------------------

$(".box_6" ).on("mousemove",".front", function(event){
	$(this).css ('width', event.offsetX + 'px');
});

$(".box_6" ).on("mouseleave",".front", function(event){
	$(this).css ('width','150px');
	$(this).css ('transition','all ease 5000ms');

});

//---------task [7-8]-------------------

$(".box_3" ).on("mouseenter", 'img', function(){
	
	let imgSrc =  $(this).attr('src');
	let imgAlt =  $(this).attr('alt');
	$('.outTask7').append( "адрес: " + imgSrc +' <br>' + "alt = " + imgAlt).css({"color" : "green"});
});

$(".box_3" ).on("mouseleave", 'img', function(){
	$ (".outTask7").empty();
});
//--------------------------------------------------
$(".box_3" ).on("mouseenter", 'a', function(){
	
	
	
	let hrefSrc =  $(this).attr('href');
	let hrefTarget =  $(this).attr('target');
	
	$('.outTask7').append( "url: " + hrefSrc +' <br>' + "target = " + hrefTarget).css({"color" : "green"});
});

$(".box_3" ).on("mouseleave", 'a', function(){
	$ (".outTask7").empty();
});

//------------------------------------------
$(".enter_Task8").on ('click',function(){
	$ ("img").not ("img[alt]").css( "border", "3px solid red");
});

//---------task [9-10]-------------------
$(".enter_Task9").on ('click',function(){
	$ (".outTask9").empty();
	let NumberOfHeading = $(":header").length;
	$(':header').css('background-color', '#cceecc');
	let h1 = $("h1").length;
	let h2 = $("h2").length;
	let h3 = $("h3").length;
	let h4 = $("h4").length;
	let h5 = $("h5").length;
	let h6 = $("h6").length;


	$('.outTask9').append("кол-во заголовков на странице: " +'<br>'+ "всего: "+ NumberOfHeading +'<br>'+ "h1 = "+ h1 +'<br>'+ "h2 = "+ h2 + '<br>'+ "h3 = "+ h3 +'<br>'+ "h4 = "+ h4 +'<br>'+ "h5 = "+ h5 +'<br>'+  "h6 = "+ h6).css({"color" : "green"});

});
//------------------------------------
$(".enter_Task10").on ('click',function(){
	$ (".outTask9").empty();

	let NumberOfTitle = $("title").length;
	let NumberOfDescription = $("meta[name = 'description']").length;
	let NumberOfKeywords = $("meta[name = 'keywords']").length;

	$('.outTask9').append("кол-во метатегов на странице:" +'<br>'+"meta title: " + NumberOfTitle +'<br>'+ "meta description: "+ NumberOfDescription +'<br>'+ "meta keywords: " + NumberOfKeywords ).css({"color" : "green"});
});
//--------------------------------------





































