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

$(function(){
	common.m_video();     //移动端视频
})
