var common = common || {};

common.m_video = function() {
	var myVideo=document.getElementById("video1"); 
	$(".video_b").on("click", function() {
		$(".video_img").addClass("hide");
		$(".m_video").removeClass("hide");
		$(".video_g").removeClass("hide");
		$(".video_b").addClass("hide");
		myVideo.pause();
	    myVideo.currentTime = '0';
	    myVideo.play();
	})
	$(".video_g").on("click", function() {
		var $this = $(this);
		$(".video_img").removeClass("hide");
		$(".m_video").addClass("hide");
		$(".video_g").addClass("hide");
		$(".video_b").removeClass("hide");
		myVideo.pause(); 
	})
	
}
common.simulateSelect = function(){
	$(".simulateSelect").find("select").on("change",function(){
		var $this = $(this),
			$input = $this.siblings("input"),
			$value = $this.find("option:selected").html();
		$input.val($value)
	})
	
}
common.toggle_icon = function() {
	$(".woman_icon").on("click", function() {
		$(".woman_icon").removeClass("man_icon");
		$(this).addClass("man_icon");

	})

}

common.menu = function() {
	$(".menu_1").on("click", function() {
		//$(".menuall").removeClass("hide");
		$(".menuall").toggle();
	})
	$(".menu_y").on("click", function() {
		$(".menuall").hide();
	})

}


$(function(){
	common.m_video();     //移动端视频
	common.simulateSelect();
	common.toggle_icon();
	common.menu();
})