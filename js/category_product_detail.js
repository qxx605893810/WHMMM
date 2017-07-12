/**
 * Created by Administrator on 2017/7/5.
 */
$(function () {
    var productId = getUrlParam('productid');
    /*导航条 */
    $.ajax({
        url: urlId()+":3000/api/getproduct",
        type: "get",
        dataType: "json",
        data: {productid: productId},
        success: function (data) {
            var categoryId = data.result[0].categoryId;
            $.ajax({
                url: urlId()+":3000/api/getproductlist",
                type: "get",
                dataType: "json",
                data: {categoryid: categoryId},
                success: function (data) {
                    var brandName = data.result[0].brandName;
                    var liCategoryNameTag = '<li><a href=product.html?categoryid=' + categoryId + '>' + brandName + '</a></li>'
                    $("#product-info>.breadcrumb").append(liCategoryNameTag);
                    var productName = data.result[0].productName.substring(0, 3);
                    var productNameTag = '<li class="active">' + productName + '</li>'
                    $("#product-info>.breadcrumb").append(productNameTag);
                }
            });
        }
    });
    /*产品栏 */
    $.ajax({
        url: urlId()+":3000/api/getproduct",
        type: 'get',
        dataType: 'json',
        data: {productid: productId},
        success: function (data) {
            var mainProduct = template('mainProduct', data);
            $("#product-main").html(mainProduct);
        }
    });
    /* 商店 */
    $.ajax({
        url: urlId()+':3000/api/getproduct',
        type: "get",
        dataType: "json",
        data: {productid: productId},
        success: function (data) {
            var shopHTML = data.result[0].bjShop;
            $("#shop>.shopC").html(shopHTML);
        }
    });

    /*评价 */
    $.ajax({
        url: urlId()+":3000/api/getproductcom",
        type: "get",
        dataType: "json",
        data: {productid: productId},
        success: function (data) {
            var mainCommentId = template("mainCommentId", data);
            $("#comment>.commentC").html(mainCommentId);
        }
    });
});
