/**
 * Created by Administrator on 2017/7/6.
 */
$(function () {
    var productId = getUrlParam("productid");
    console.log(productId);
    $.ajax({
        url: urlId()+':3000/api/getmoneyctrlproduct',
        type: 'get',
        dataType: 'json',
        data: {productid: productId},
        success: function (data) {
            var productTemplate = template('productTemplate', data);
            $("#product-list").html(productTemplate);
        }
    });


});