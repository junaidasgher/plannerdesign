

//:IR start show and hide jquery

jQuery(document).ready(function(){
    jQuery('#hideshow').on('click', function(event) {        
        jQuery('#left-content-sidebar').toggle('show');
    });
});

//left sidebar
// active class add and remove 

$(document).ready(function() {
	$(".left-sidebar-boxes-all-class a.items").click(function () {
		$(".left-sidebar-boxes-all-class a.items").removeClass("active");
		// $(".tab").addClass("active"); // instead of this do the below 
		$(this).addClass("active");   
	});
	});


	$(document).ready(function() {
		$(".lower-suspended-items-boxes .lower-touch.items").click(function () {
			$(".lower-suspended-items-boxes .lower-touch.items").removeClass("active");
			// $(".tab").addClass("active"); // instead of this do the below 
			$(this).addClass("active");  
		});
		});
	
	
// :AS start Show/hide divs 
function showHideComponent(divId){
	$(".component").hide();
	$("#"+divId).show();
}
function showHideCFours(divId){
	$(".CFoursBoxes").hide();
	$("#"+divId).show();
}
function showHideImgDescr(divId){
	$(".ImagesDescription").hide();
	$("#"+divId).show();
}
// :AS end Show/hide divs 
//:IR end show and hide jquery
//   show and hide setting ride sidebar btn

function showHideItemControl(param) {
	if(param=='cross_clicked'){
		$("#right-sidebar-id-close").hide();
	}
	else{
		$("#right-sidebar-id-close").toggle()
	}
 }
//  :IR start show and hide divs




$(document).ready(function(){

    $(".first-fur-box").click(function(){
        $(".kitchen-items-boxes").show();
    });	
    
	$(".kitchen-seven-active-boxes").click(function(){
		$(".left-sidebar-boxes").show();
		if($(".kitchen-seven-active-boxes")){
			$(".kitchen-items-boxes").css("display", "none");
		 }

	// if($(".kitchen-seven-active-boxes").hasClass ('active')){
	// 	$(".kitchen-seven-active-boxes.active").addClass( 'show') && $(".kitchen-seven-active-boxes").addClass('hide');
	// }
	// else{
	// 	$(".kitchen-seven-active-boxes.active").removeClass( 'show') && $(".kitchen-seven-active-boxes").removeClass('hide');
	// }
	});
	

	$(".kitchen-seven-active-boxes").click(function(){
        $(".left-sidebar-boxes").show();
    });
     
	$("#hidebtn").click(function(){
		$("#lower-suspended-items").hide();
	  });

	  $("#hidebtnImgDesc").click(function(){
		$(".short-description-of-imgs").hide();
	  });
	  $("#hidebtnImgDesc2").click(function(){
		$(".short-description-of-imgs").hide();
	  });

	  $("#hidebtnLeftClose").click(function(){
		$(".left-sidebar-boxes").hide();
	  });
	  

});


//  :IR end show and hide divs