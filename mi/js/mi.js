$(function(){
	    //左点击事件
	    var index = $(".selected").index();
	    function goLeft(){
	    		if(index == 6){index = -1;}
	    		// console.log(index)
	    		$(".backgroundimg-icon ul li").eq(index+=1).addClass("selected").siblings().removeClass("selected");
	    		$(".background-img-link>ul li").eq(index).fadeIn().siblings().fadeOut();
	    }
	    //右点击事件
	    function goRight(){
	    		if(index == -1){index == 7}
	    		// console.log(index)
	    		$(".backgroundimg-icon ul li").eq(index-=1).addClass("selected").siblings().removeClass("selected");
	    	    $(".background-img-link>ul li").eq(index).fadeIn().siblings().fadeOut();
	    }
	    $(".left").click(function(){
	    	goLeft();
	    })
	    $(".right").click(function(){
	    	goRight();
	    })
	    //定时器
	    function exportTimer(){
	    	timer = setInterval(function(){
	    		goLeft();
	    	},2000);
	    }
	    exportTimer();
	    function Left(){
	    	$(".star-list ul").stop().animate({"margin-left":"-1226px"},500,function(){
             $(".star-list ul").css("margin-left","-1226px");
             // var first=$(".star-list ul").first();
             // var last=$(".star-list ul").last();
             // first.insertAfter(last);
             // var marginleft = $(".star-list ul").css(style);
             // console.log(marginleft)
	    	})
	    }
	    function Right(){
	    	$(".star-list ul").stop().animate({"margin-left":"0px"},500,function(){
             $(".star-list ul").css("margin-left","0px");
             // var first=$(".star-list ul").first();
             // var last=$(".star-list ul").last();
             // last.insertBefore(first);
	    	})
	    }
	    $(".goleft").click(function(){
	    	Left();
	    })
	    $(".goright").click(function(){
            Right();
	    })
	    function starlistTimer(){
	    	timer = setInterval(function(){
	    		Right();
	    	},2000);
	    }
	    starlistTimer();
	    //elect选项卡
	    $(".home-elect-bar ul li").hover(function(){
	    	$(this).addClass("selectedon").siblings().removeClass("selectedon");
	    	var index = $(this).index();
            $(".home-elect-right>ul>li").eq(index).show().siblings().hide();
	    })
	    //user-assess显示问题
	    $(".elect-right-child02 li").mouseover(function(){
	    	var index = $(this).index();
	        $(".user-assess").eq(index).stop().animate({"margin-top":"-50px"},200)
	    })
	    $(".elect-right-child02 li").mouseout(function(){
	    	var index = $(this).index();
	    	$(".user-assess").eq(index).stop().animate({"margin-top":"0"},200)
	    })
	    //图书轮播
	    $(".con-left").click(function(){
	    	var index = $(".select-button").index();
	    	$(".blank-icon li").eq(index+=1).addClass("select-button").siblings().removeClass("select-button");
	    	$(".content-book1 li").eq(index).fadeIn().siblings().fadeOut();
	    })
	    //导航栏显示问题
	    $(".header-list>ul>li").mouseover(function(){
	    	var index = $(this).index();
	    	$(".header-list01").eq(index).show();
	    })
	    $(".header-list>ul>li").mouseout(function(){
	    	var index = $(this).index();
	    	$(".header-list01").eq(index).hide();
	    })
})