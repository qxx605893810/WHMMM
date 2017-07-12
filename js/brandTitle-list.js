/**
 * Created by Administrator on 2017/7/9.
 */
$(function () {

    /*brand B*/
   var brandtitleid= getUrlParam("brandTitleId");
    $.ajax({
        url:urlId()+":3000/api/getbrand",
        type:"get",
        dataType:"json",
        data:{brandtitleid:brandtitleid},
        success: function (data) {
        var contentTemplate=template("contentTemplate",data);
            $("#content>.content>.brandInfo").append(contentTemplate);
           $("#content > .content > .brandInfo > .brand:eq(0)>span").css({
               backgroundColor:"#f10e0e"
           });
           $("#content > .content > .brandInfo > .brand:eq(1)>span").css({
               backgroundColor:"#ff9314"
           });
           $("#content > .content > .brandInfo > .brand:eq(2)>span").css({
               backgroundColor:"#8adf5b"
           });

        }
    });

    /*brand E*/


});
