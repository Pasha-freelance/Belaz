$(document).ready(function(){
	$('.submenu').hide();
    $('.responsive-icon').click(function(){
        $('.submenu').slideToggle(500);
        $('.responsive-icon').toggleClass('rotation');
    });

    $('.answer').hide();
    $('.close').click(function(){
    	$('.answer').fadeOut(300);

    });

	let items = $('.question');
	let Answers = $('.answer');
    items.click(function(){

    	let id=$(this).attr("id");
        Answers.each(function(){
            if($(this).attr("id")==id){

               $(this).fadeIn(300);
            }
        });
    });


    let miniblocks = $('.mini-block');
    for (var i = 1; i < miniblocks.length; i++) {
    	$(miniblocks[i]).hide();
    }
    let count = 0;
    $('.more-questions').click(function(event){
    	$('.reload').toggleClass('reload-rotation');
    	event.preventDefault();
    	$(miniblocks[count]).hide();
    	count++;
    	if(count >= miniblocks.length){
    		count=0;
    		$(miniblocks[count]).fadeIn(1000);
    	}
    	else{
    	$(miniblocks[count]).fadeIn(1000);
    	}
    });


    $('.storage-range').slick({
   	  infinite: true,

	  slidesToShow: 3,

	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:true,
        arrows:false
      }
    },
    ]
   });

 });
