/**
 * Created by Administrator on 2017/7/7.
 */
$(function () {
    var start = 0;
    $("#nav>.nav>ul").on("touchstart", function (e) {
        //console.log(e);
        start = e.originalEvent.touches[0].clientX;
    }).on("touchmove", function (e) {
        var moveX = e.originalEvent.touches[0].clientX;

        var step = moveX - start;
        var oldTranslateX = parseInt($("#nav>.nav>ul").css("transform").split(",")[4].replace(" ", ""));
        var newTranslateX = oldTranslateX + step;
        $("#nav>.nav>ul").css("transform", "translateX(" + newTranslateX + "px)");
        start = moveX;
    }).on("touchend", function (e) {
            var finalTranslateX = parseInt($("#nav>.nav>ul").css("transform").split(",")[4].replace(" ", ""));
            var ulWidth = $("#nav>.nav>ul").width();
            var minTranslateX = -(ulWidth - $("#nav>.nav").width());
            if (finalTranslateX > 0) {
                $("#nav>.nav>ul").css({
                    transform: "translateX(0px)",
                    translation: 'none'
                })
            } else if (finalTranslateX < minTranslateX) {
                $("#nav>.nav>ul").css({
                    transform: "translateX(" + minTranslateX + "px)",
                    translation: 'transform 500ms'
                })
            }
        }
    )
    ;


    $.ajax({
        url: urlId()+':3000/api/getbaicaijiatitle',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var navId = template("navId", data);
            $("#nav>.nav>ul").html(navId);
            $("#nav>.nav>ul").width(100 * data.result.length + 'px');
            baicaijia(0);
            $("#nav>.nav>ul>li>a").on("click", function () {
                var titleId = this.dataset["titleId"];
                baicaijia(titleId);
            });
        }
    });
});


function baicaijia(titleId) {
    $.ajax({
        url: urlId()+':3000/api/getbaicaijiaproduct',
        type: 'get',
        dataType: 'json',
        data: {titleid: titleId},
        success: function (data) {
            //console.log(data);
            var mediaId = template("mediaId", data);
            $("#content").html(mediaId);
        }
    });
}