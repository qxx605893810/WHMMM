/**
 * Created by Administrator on 2017/7/7.
 */
$(function () {
    setTimeout(function () {
        $.ajax({
            url: urlId()+':3000/api/getinlanddiscount',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                var productTemplateId = template("productTemplateId", data);
                $("#product>.row").html(productTemplateId);
                $(".load>img").css("display", "none");
                $(".load>.load-info").css("display", "block");

            }
        });
    }, 2000)
});