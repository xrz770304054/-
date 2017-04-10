/**
 * Created by gc on 2016/11/14.
 */
window.onload = function () {

    //固定导航栏特效
    var top = document.getElementById('top');
    var pro_nav = document.getElementsByClassName("pro_nav")[0];
    var container_wrapper = document.getElementById("container_wrapper");

    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

    // container1 动画开始
    var box = document.getElementById("box");
    var ul = box.children[0];
    var ullis = ul.children;
    //console.log("$$$$$$$$$", ullis.length)
    var circle = box.children[1];
    var spans = circle.children;
    var imgWidth = box.offsetWidth;
    var timer = null;

    for (var i = 0; i < ullis.length; i++) {
        //console.log("$$$$$$$$$", ullis.length)
        var span = document.createElement("span");
        circle.appendChild(span);
    }
    spans[0].className = "current";

    var firstImg = ullis[0].cloneNode(true);
    ul.appendChild(firstImg);
    //console.log("$$$$$$$$$", ullis.length)

    for (var j = 0; j < spans.length; j++) {
        spans[j].index = j;
        spans[j].onmouseover = function () {
            for (var k = 0; k < spans.length; k++) {
                spans[k].className = "";
            }
            //留下我自己
            this.className = "current";
            //还要 让ul 移动到指定位置
            //目标 和 当前按钮的索引有关 和 图片的宽度有关 而且是负数
            var target = -this.index * imgWidth;
            animateAverage(ul, target);

            //把记录当前显示的按钮的索引的square变为当前按钮的索引
            //把记录当前显示的图片的索引的pic 变为当前按钮的索引
            //pic = this.index;
            pic = circle = this.index;

        };
    }

    box.onmouseover = function () {
        clearInterval(timer);
    };
    box.onmouseout = function () {
        timer = setInterval(playNext, 2500);
    };

    var pic = 0;  //当前显示图片的索引
    var circle = 0;

    timer = setInterval(playNext, 2500);

    function playNext() {
        if (pic === ullis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animateAverage(ul, target);

        if (circle < spans.length - 1) {
            circle++;
        } else {
            circle = 0;
        }
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = "";
        }

        spans[circle].className = "current";
    }

    // container1 动画结束


    // container4 动画开始
    //$('.phone1').animate({"top": "9.12%"}, 1500);
    //$('.phone2').animate({"top": "22.85%"}, 1500);
    //$(".sdw3_icon").css({"opacity": 1});
    //$(".sdw3_icon2").css({"opacity": 1});
    // container4 动画结束


    var c3 = document.getElementsByClassName("container3")[0];
    var c4 = document.getElementsByClassName("container4")[0];
    var c5 = document.getElementsByClassName("container5")[0];
    var c7 = document.getElementsByClassName("container7")[0];
    var body = document.getElementsByTagName("body")[0];

    window.onscroll = function () {
        if (scroll().top > top.offsetHeight) {
            pro_nav.className = "pro_nav pro_nav_fixed";
            container_wrapper.style.paddingTop = pro_nav.offsetHeight + "px";
        } else {
            pro_nav.className = "pro_nav";
            container_wrapper.style.paddingTop = 0;
        }

        //console.log("qwertyuio", c4.offsetTop, c4.offsetHeight, scroll().top)
        //if (c4.offsetTop <= scroll().top && (c4.offsetTop + 0.1 * c4.offsetHeight <= scroll().top){}
        //    //|| (c4.offsetTop + c4.offsetHeight * 0.8 <= scroll().top + body.offsetHeight)
        ////|| (c4.offsetTop >= scroll().top || c4.offsetTop + c4.offsetHeight <= (scroll().top + body.offsetHeight))
        //)

        var json3 = {
            "sdw2_icon2": [{"opacity": 1}, {"opacity": 0}]
        };
        var json4 = {
            "phone1": [{"top": "9.12%"}, {"top": "2.12%"}],
            "phone2": [{"top": "22.85%"}, {"top": "27.85%"}],
            "sdw3_icon": [{"opacity": 1}, {"opacity": 0}],
            "sdw3_icon2": [{"opacity": 1}, {"opacity": 0}]
        };

        var json5 = {
            "sdw4_icon1": [{"opacity": 1}, {"opacity": 0}],
            "sdw4_icon2": [{"opacity": 1}, {"opacity": 0}],
            "sdw4_phone": [{"top": "13.12%"}, {"top": "6.12%"}]
        };

        var json7 = {
            "c7_ani": [{"opacity": 1}, {"opacity": 0}]
        }

        function imgAnimate(obj, json) {
            for (var k in json) {
                if (obj.offsetTop + obj.offsetHeight * 0.1 <= scroll().top && (obj.offsetTop + obj.offsetHeight * 0.5 >= scroll().top)) {
                    $('.' + k).css(json[k][0]);
                } else {
                    $('.' + k).css(json[k][1]);

                }
            }
        }

        imgAnimate(c3, json3);
        imgAnimate(c4, json4);
        imgAnimate(c5, json5);
        imgAnimate(c7, json7);

        //if (c4.offsetTop <= scroll().top && (c4.offsetTop + c4.offsetHeight * 0.5 >= scroll().top)) {
        //    console.log("qwertyuio", c4.offsetTop, c4.offsetHeight)
        //    $('.phone1').css({"top": "9.12%"});
        //    $('.phone2').css({"top": "22.85%"});
        //    $(".sdw3_icon").css({"opacity": 1});
        //    $(".sdw3_icon2").css({"opacity": 1});
        //} else {
        //    $('.phone1').css({"top": "2.12%"});
        //    $('.phone2').css({"top": "27.85%"});
        //    $(".sdw3_icon").css({"opacity": 0});
        //    $(".sdw3_icon2").css({"opacity": 0});
        //}
    };

    var circles_l = $(".circle1>.cc");
    var circles_r = $(".circle2>.cc");
    for (var i = 0; i < circles_l.length; i++) {
        circles_l[i].style.animationDelay = i * 0.6 + "s";
        $(circles_l[i]).addClass("go");
        circles_r[i].style.animationDelay = i * 0.6 + "s";
        $(circles_r[i]).addClass("go");
    }

    var str="i am student";
    var arr=str.split(" ");
    var str1=arr[arr.length-1];
    for(var i=arr.length-2;i>=0;i--){
        str1+=" "+arr[i];
    }
    console.log(str1);
}



