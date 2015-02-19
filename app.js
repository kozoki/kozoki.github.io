



$(".nav-item1").click(function(){
$(".views").addClass("hide");
$(".view1").removeClass("hide");
$(".nav-item").removeClass("active");
$(".nav-item1").addClass("active");
});
$(".nav-item2").click(function(){
$(".views").addClass("hide");
$(".view2").removeClass("hide");
$(".nav-item").removeClass("active");
$(".nav-item2").addClass("active");
});
$(".nav-item3").click(function(){
$(".views").addClass("hide");
$(".view3").removeClass("hide");
$(".nav-item").removeClass("active");
$(".nav-item3").addClass("active");
});
$(".nav-item4").click(function(){
$(".views").addClass("hide");
$(".view4").removeClass("hide");
$(".nav-item").removeClass("active");
$(".nav-item4").addClass("active");
});

//Routing Solution
Path.map("#/home").to(function(){
    $(".views").addClass("hide");
	$(".view1").removeClass("hide");
});

Path.map("#/about").to(function(){
    $(".views").addClass("hide");
	$(".view2").removeClass("hide");
});

Path.map("#/projects").to(function(){
    $(".views").addClass("hide");
	$(".view3").removeClass("hide");
});

Path.root("#/home");

Path.rescue(function(){
    alert("404: Route Not Found");
});

Path.listen();