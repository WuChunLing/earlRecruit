$(function(){
	$('.fullage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
		navigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$("#p1").delay(300).animate({left:"0px"},"slow");	
			}
			if(index == 3){
			}
			if(index == 4){
			}
			if(index == 5){
			}
			if(index == 6){
			}
			if(index == 7){
			}
			if(index == 8){
			}
			if(index == 9){
			}
		}
	});
});