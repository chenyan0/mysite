$(function(){
    var clientH,clientW;
    $(window).resize(function(){
        clientW=$(window).width();
        clientH=$(window).height();
        console.log(clientH);

        if(clientW<700){
            $("#newpost").css("display","none");
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".wf-large").css("display","none");
            $(".wf-small").css("display","block");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".wf-large").css("display","block");
            $(".wf-small").css("display","none");
        }
        if(clientW<800){
            $(".skill").find(".can").css("display","none");
        }else{
            $(".skill").find(".can").css("display","block");
        }
        if(clientW<1100&&clientW>700){
            $($(".wf-list")[6]).removeClass("one").css("z-index",'0');
            $($(".wf-list")[7]).removeClass("one").css("z-index",'0');
            $($(".wf-list")[6]).addClass("two");
            $($(".wf-list")[7]).addClass("two");
        }
        if(clientW>1100){
            $($(".wf-list")[6]).removeClass("two");
            $($(".wf-list")[7]).removeClass("two");
            $($(".wf-list")[6]).addClass("one");
            $($(".wf-list")[7]).addClass("one");
        }
    });
    $(window).resize();
    //----------------头部菜单栏-----------------
    $(".menu-icon").click(function () {
        $(".son").slideToggle();
    });
    var flag=true;
    //----------------more--------------------------
    $(".ps-more").click(function(e){
        if(flag){
            $("#post").find(".hex").animate({opacity:"0",zIndex:0},500,function(){
                $("#newpost").animate({opacity:"1",zIndex:"2"},500);
            });
            flag=false;
        }else{
            $("#newpost").animate({opacity:"0",zIndex:0},500,function(){
                $("#post").find(".hex").animate({opacity:"1",zIndex:"2"},500);
            });
            flag=true;
        }

        e.stopPropagation();
    });
    var flag1=true;
    $(".web-more").click(function () {
        if(flag1){
            $(".one").removeClass("scale2");
            $(".one").addClass("scale1");
            setTimeout(function () {
                $(".two").css({zIndex:2});
                $(".one").css({zIndex:0});
                $(".two").addClass("scale2");
                flag1=false;
            },1000)
        }else{
            $(".two").removeClass("scale2");
            $(".two").addClass("scale1");
            $(".one").css({zIndex:2});
            $(".two").css({zIndex:0});
            setTimeout(function () {
                $(".one").addClass("scale2");
            },1000)

            flag1=true;
        }

    });
    //关于我们卡片
    $(".card").hover(function(){
        $(".card").finish();
        $(this).css({zIndex:2});
        $(".card").not($(this)).animate({opacity:0.5},200)
    }, function () {
        $(".card").css({zIndex:1});
        $(".card").not($(this)).animate({opacity:1},200)
    });

    $(".card").click(function(){
        var index=$($(".card")).index(this);
        $(".card").css({display:"none"});
        $(".card-info").slideDown(500).find($(".info").eq(index)).slideDown();

    });
    $(".close-info").click(function () {
        $(".card-info").slideUp(1000);
        $(".info").css("display","none");
        setTimeout(function () {
            $(".card").css({display:"block"});
        },1000);
    });
    $(".hex").hover(function(){
        $(this).css({zIndex:2});
    }, function () {
        $(".hex").css({zIndex:1});
    });
    $(".gallery-item .overlay").hover(function () {
        $(this).animate({backgroundSize:'300%'});
        $(this).find(".a").css({display:"block"}).animate({transform:"rotateZ(140deg)"},500);
    },function(){
        $(this).animate({backgroundSize:'170%'});
        $(this).find(".a").css({display:"none"}).animate({transform:"rotateZ(-140deg)"},500);
    });
//    前端展示
    var index=1;
    $(".show-next").each(function (i) {
        $(this).data("index",i);
    });
    $(".show-next").click(function(){
        var j=$(this).data("index");
        var i=$(".img").eq(j).find(".wf-img").length;
        $(".img").eq(j).find(".wf-img").removeClass("wf-show");
        $(".img").eq(j).find(".wf-img").eq(index).addClass("wf-show");
        if(index==i-1){
            index=0;
        }else{
            index++;
        }

    });
    $(".wf-img").hover(function () {
        $(this).find(".wf-name").css({zIndex:10,opacity:0.6});
    }, function () {
        $(this).find(".wf-name").css({opacity:"0",zIndex:0});
    })
//    大图展示
    $(".a").click(function () {
        var bg=$(this).parent().css('background-image');
        console.log(bg);
        $(".show-datu").css({display:"block"});
        $(".show").css({backgroundImage:bg});
    });
    $(".close").click(function () {
        $(".show-datu").css("display","none");
    });
//    菜单切换
    $(".head-nav").hover(function () {
        $(this).css({color:"#FF9A06"});
    },function(){
        $(this).css({color:"#fff"});
    });
    var kaiguan=true;
   $(".nav-start").click(function(){
       $(".head-nav").hover=null;
       if(kaiguan){
           $(this).find(".home").css({display:"block"}).animate({left:"-20px",top:"-70px"});
           $(this).find(".about").css({display:"block"}).animate({ left:"-20px",top:"-130px"});
           $(this).find(".project").css({display:"block"}).animate({left:"-20px",top:"-190px"});
           $(this).find(".contact").css({display:"block"}).animate({left:"-20px",top:"-260px"});
           kaiguan=false;
       }else{
           $(this).find(".home").css({display:"block"}).animate({left:"-20px",top:"-20px"},"slow", function () {
               $(this).css({display:"none"});
           });
           $(this).find(".about").css({display:"block"}).animate({ left:"-20px",top:"-20px"},"slow", function () {
               $(this).css({display:"none"});
           });
           $(this).find(".project").css({display:"block"}).animate({left:"-20px",top:"-20px"},"slow", function () {
               $(this).css({display:"none"});
           });
           $(this).find(".contact").css({display:"block"}).animate({left:"-20px",top:"-20px"},"slow", function () {
               $(this).css({display:"none"});
           });
           kaiguan=true;
       }
    });

    $(".head-nav").click(function (e) {
        var j=$(this).index(".head-nav");
        if(j!=3){
            $(".swiper-wrapper").css({transform:"translate3d(0,"+j*-669+"px,0)"});
        }else{
            $(".swiper-wrapper").css({transform:"translate3d(0,"+(j+1)*-669+"px,0)"});
        }
    });
    $(".item").click(function (e) {
        var j=$(this).index(".item");
        if(j!=3){
            $(".swiper-wrapper").css({transform:"translate3d(0,"+j*-673+"px,0)"});
        }else{
            $(".swiper-wrapper").css({transform:"translate3d(0,"+(j+1)*-673+"px,0)"});
        }
    });

//    input聚焦
    $("input:text").focus(function () {
        var newv;
        var oldv=$(this).val();
        $(this).val("");
        $("input:text").blur(function () {

            $("input:text").change(function () {
                newv=$(this).val();
                console.log(newv,oldv);
                if(newv!=oldv){
                    $(this).val(newv);
                }else{
                    $(this).val(oldv);
                }
            })
        })

    });






});
