/**
 * Created by Administrator on 2017/7/9.
 */
$(function () {
    var couponId = getUrlParam("couponId");
    $.ajax({
        url: urlId()+':3000/api/getcouponproduct',
        type: 'get',
        dataType: 'json',
        data: {couponid: couponId},
        success: function (data) {
            console.log(data);
            var contentTemId = template("contentTemId", data);
            $("#content1").html(contentTemId);
        }
    });
});
