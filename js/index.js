/**
 * Created by Administrator on 2017/7/2.
 */
$(function () {
    $.ajax({
        url: urlId()+":3000/api/getindexmenu",
        type: "get",
        dataType: "json",
        success: function (data) {
            var menuHTML = template("menu-template", data);
            $("#menu >.row").html(menuHTML);
            var lastHeight = $("#menu>.row>div:last-of-type").height();
            $("#menu>.row>div:nth-last-of-type(-n+4)").css({height: "0"});
            $("#menu>.row>div:nth-of-type(8)").click(function () {
                var lastElementHeight= $("#menu>.row>div:nth-last-of-type(-n+4)").height();
                if (lastElementHeight == 0) {
                    $("#menu>.row>div:nth-last-of-type(-n+4)").css({height: "80"})
                } else {
                    $("#menu>.row>div:nth-last-of-type(-n+4)").css({height: "0"});
                }
            });
        }
    });
    $.ajax({
        url: urlId()+":3000/api/getmoneyctrl",
        type: "get",
        dataType: "json",
        success: function (data) {
            var recommendHTML = template("recommend-template", data);
            $("#recommend>.recommend-list").html(recommendHTML)
        }
    });


});
