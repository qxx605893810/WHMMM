/**
 * Created by Administrator on 2017/7/3.
 */
$(function () {
    var categoryId = getUrlParam("categoryid");
    var pageid = 1;
    getProductList(categoryId, pageid)
});

function getProductList(categoryId, pageid) {
    $.ajax({
        url: urlId()+":3000/api/getproductlist",
        type: "get",
        dataType: "json",
        data: {categoryid: categoryId, pageid: pageid},
        success: function (data) {
            var recommendHTML = template("recommend-template", data);
            $("#product-list>.recommend-list").html(recommendHTML);
            goTop();
            var page = Math.ceil(data.totalCount / data.pagesize);
            optionTag = "";
            for (var i = 0; i < page; i++) {
                if ((i + 1) == pageid) {
                    optionTag += "<option value='" + (i + 1) + "'selected>" + (i + 1) + "/" + page + "</option>";
                } else {
                    optionTag += "<option value='" + (i + 1) + "'>" + (i + 1) + "/" + page + "</option>";
                }
            }
            $("#product-list >.product-page>.ui-select>select").html(optionTag);
            $(".prev-page").unbind("click").bind("click", function () {
                pageid--;
                if (pageid < 1) {
                    alert("当前已经是第一页");
                } else {
                    getProductList(categoryId, pageid)
                }
                return false;
            });
            $(".next-page").unbind("click").bind("click", function () {
                pageid++;
                if (pageid > page) {
                    alert("当前已经是最后一页")
                } else {
                    getProductList(categoryId, pageid)
                }
                return false;
            });
            $("select").change(function () {
                var targetId = $(this).val();
                getProductList(categoryId, targetId)
            });
        }
    });
}
