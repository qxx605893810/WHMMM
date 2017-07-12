/**
 * Created by Administrator on 2017/7/9.
 */
$(function () {
    $.ajax({
        url: urlId()+":3000/api/getcoupon",
        type: "get",
        dataType: "json",
        success: function (data) {
            var productId = template("productId", data);
            $("#content>.row").html(productId);
        }
    });
});