  
$(document).ready(function(){
  $(".item5").click(function(){ 
    $(".sec-content-left-sidebar").show();
    $(".public-library").hide();   
    $(".decorative-elements").hide();
    $(".roomsitems").hide();
    $(".Constructionitems").hide(); 
    $(".doorsitems").hide();

  });
  $(".item1").click(function(){
    $(".sec-content-left-sidebar").hide();
    $(".public-library").hide();   
    $(".decorative-elements").hide();
    $(".roomsitems").show();
    $(".Constructionitems").hide(); 
    $(".doorsitems").hide();
  });
  $(".item2").click(function(){
    $(".sec-content-left-sidebar").hide();
    $(".public-library").show();   
    $(".decorative-elements").hide();
    $(".roomsitems").hide();
    $(".Constructionitems").hide(); 
    $(".doorsitems").hide();
  });
  $(".item3").click(function(){
    $(".sec-content-left-sidebar").hide();
    $(".public-library").hide();   
    $(".decorative-elements").show();
    $(".roomsitems").hide();
    $(".Constructionitems").hide(); 
    $(".doorsitems").hide();
  });
  $("#sidebarCollapse").click(function(){
    $("#alldivhide").toggle();
    $("#sidebarCollapse2").toggle();
    $("#sidebarCollapse").hide();
  });
  $("#sidebarCollapse2").click(function(){
    $("#alldivhide").toggle();
    $("#sidebarCollapse2").hide();
    $("#sidebarCollapse").toggle();
  });

// 2d show hide icon
$("#sidebarCollapse-2d").click(function(){
  $(".alldivhide-2dclass").toggle();
  $("#sidebarCollapse2-2d").toggle();
  $("#sidebarCollapse-2d").hide();
});
$("#sidebarCollapse2-2d").click(function(){
  $(".alldivhide-2dclass").toggle();
  $("#sidebarCollapse2-2d").hide();
  $("#sidebarCollapse-2d").toggle();
});


  $("#Constructionclickidshowdiv").click(function(){
    $(".public-library").hide();
    $(".sec-content-left-sidebar").hide();
    $(".Constructionitems").show();
  });

$("#doorsclickidshowdiv").click(function(){
    $(".public-library").hide();
    $(".sec-content-left-sidebar").hide();
    $(".Constructionitems").hide();
    $(".doorsitems").show();
  });

  $("li a ").click(function(){
    $("li a.active").removeClass("active");
    $(this).addClass("active");
    });

    $("#showFloorPlan").click(function(){
    $("#showFloorPlan.active").removeClass("active");
    $("#showFloorPlansec").addClass("active");
    });

    $("#showFloorPlansec").click(function(){
    $("#showFloorPlansec.active").removeClass("active");
    $("#showFloorPlan").addClass("active");
    });

    $("#showDesignRoomElements").click(function(){
    $("#showDesignRoomElements.active").removeClass("active");
    $(".item1").addClass("active");
    });

    $("#showDesignCabinetElements").click(function(){
    $("#showDesignCabinetElements.active").removeClass("active");
    $(".item2").addClass("active");
    });
    $("#showDesignDecorativeElements").click(function(){
    $("#showDesignDecorativeElements.active").removeClass("active");
    $(".item3").addClass("active");
    });
    // 2d show and hide categories menu
    $("#doors-up-2d").click(function(){
    $("#showandhideboxID2d").toggle();
    $("#doors-down-2d").show();
    $("#doors-up-2d").hide();
    });

    $("#doors-down-2d").click(function(){
    $("#showandhideboxID2d").toggle();
    $("#doors-up-2d").show();
    $("#doors-down-2d").hide();
    });

// 3d



$("#doors-up-room-3d").click(function(){
  $("#showandhidebox-room-3d").toggle();
  $("#doors-down-room-3d").show();
  $("#doors-up-room-3d").hide();
  });
  
  $("#doors-down-room-3d").click(function(){
  $("#showandhidebox-room-3d").toggle();
  $("#doors-up-room-3d").show();
  $("#doors-down-room-3d").hide();
  });

$("#doors-up").click(function(){
$(".showandhidebox").toggle();
$("#doors-down").show();
$("#doors-up").hide();
});

$("#doors-down").click(function(){
$(".showandhidebox").toggle();
$("#doors-up").show();
$("#doors-down").hide();
});

$("#constructiontopbtns").click(function(){
  $(".showandhidebox").toggle();
  $("#constructionbottombtns").show();
  $("#constructiontopbtns").hide();
  });

$("#constructionbottombtns").click(function(){
  $(".showandhidebox").toggle();
  $("#constructiontopbtns").show();
  $("#constructionbottombtns").hide();
  });

  $("#doorsupbtn").click(function(){
    $(".showandhidebox").toggle();
    $("#doorsdownbtn").show();
    $("#doorsupbtn").hide();
    });
  
  $("#doorsdownbtn").click(function(){
    $(".showandhidebox").toggle();
    $("#doorsupbtn").show();
    $("#doorsdownbtn").hide();
    });

$("#publicbackbtntodivs").click(function(){
$(".public-library").toggle();
$(".sec-content-left-sidebar").hide();
    $(".Constructionitems").hide();
    $(".doorsitems").hide();
});

$("#doorsitemsbackbtntodivs").click(function(){
$(".public-library").hide();
$(".sec-content-left-sidebar").hide();
    $(".Constructionitems").toggle();
    $(".doorsitems").hide();
});

// $(".overlay-icon").mouseover(function() {
//   $(".popup-box").css('display', 'block');
// });
// $(".custom-box-overlay").mouseout(function() {
//   $(".popup-box").css('display', 'none');
// });

// $(".overlay-icon").mouseover(function() { $(".popup-box").css('display', 'block'); });
// $(".custom-box-overlay").mouseout(function() { $(".popup-box").css('display', 'none'); });

});

// image zoom
function zoom(e){
var zoomer = e.currentTarget;
e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
x = offsetX/zoomer.offsetWidth*100
y = offsetY/zoomer.offsetHeight*100
zoomer.style.backgroundPosition = x + '% ' + y + '%';
}


//popup box
$(document).on('mouseenter', '.overlay-icon', function() {
    $(".popup-box").show();
    });
$(document).on('mouseleave', '.popup-box', function() {
$(".popup-box").toggle();
});


$(document).on('mouseenter', '.overlay-icon2', function() {
$(".popup-box2").show();
});
$(document).on('mouseleave', '.popup-box2', function() {
$(".popup-box2").hide();
});

$(document).on('mouseenter', '.overlay-icon3', function() {
$(".popup-box3").show();
});
$(document).on('mouseleave', '.popup-box3', function() {
$(".popup-box3").toggle();
});

$(document).on('mouseenter', '.overlay-icon4', function() {
$(".popup-box4").show();
});
$(document).on('mouseleave', '.popup-box4', function() {
$(".popup-box4").toggle();
});

$(document).on('mouseenter', '.overlay-icon5', function() {
$(".popup-box5").show();
});
$(document).on('mouseleave', '.popup-box5', function() {
$(".popup-box5").toggle();
});

$(document).on('mouseenter', '.overlay-icon6', function() {
$(".popup-box6").show();
});
$(document).on('mouseleave', '.popup-box6', function() {
$(".popup-box6").toggle();
});

$(document).on('mouseenter', '.overlay-icon7', function() {
$(".popup-box7").show();
});
$(document).on('mouseleave', '.popup-box7', function() {
$(".popup-box7").toggle();
});

$(document).on('mouseenter', '.overlay-icon8', function() {
$(".popup-box8").show();
});
$(document).on('mouseleave', '.popup-box8', function() {
$(".popup-box8").toggle();
});

$(document).on('mouseenter', '.overlay-icon9', function() {
$(".popup-box9").show();
});
$(document).on('mouseleave', '.popup-box9', function() {
$(".popup-box9").toggle();
});
$(document).on('mouseenter', '.overlay-icon10', function() {
$(".popup-box10").show();
});
$(document).on('mouseleave', '.popup-box10', function() {
$(".popup-box10").toggle();
});

