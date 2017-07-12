/**
 * Created by Administrator on 2017/7/9.
 */
$(function () {
    $.ajax({
        url:urlId()+":3000/api/getsitenav",
        type:'get',
        dataType:'json',
        success: function (data) {
            console.log(data);
            var contentTemId=template("contentTemId",data);
            $("#content1").html(contentTemId);
        }
    });
});
