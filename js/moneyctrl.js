/**
 * Created by Administrator on 2017/7/6.
 */
$(function () {
    getMoneyPage(pageId);
});
var pageId = 0;
function getMoneyPage(pageid) {
    $.ajax({
        url: urlId()+':3000/api/getmoneyctrl',
        type: "get",
        dataType: "json",
        data: {pageid: pageid},
        success: function (data) {
            var productTemplate = template("product-tem", data);
            $("#product").html(productTemplate);
            //总页数
            var pageNumber = Math.ceil(data.totalCount / data.pagesize);
            optionTag = "";

            for (var i = 0; i < pageNumber; i++) {
                if (i == pageid) {
                    optionTag += "<option value='" + (i) + "'selected>" + (i + 1) + "/" + pageNumber + "</option>";
                } else {
                    optionTag += "<option value='" + (i) + "'>" + (i + 1) + "/" + pageNumber + "</option>";
                }
            }
            $("#money-page>.product-page>.ui-select>select").html(optionTag);

            $("#money-page>.product-page>.prev-page").unbind("click").bind("click", function () {
                pageId--;
                if (pageId < 0) {
                    alert("已经到了第一页");
                    pageId = 0;
                } else {
                    getMoneyPage(pageId);
                }
            });
            $("#money-page>.product-page>.next-page").unbind("click").bind("click", function () {
                //var targetPage = pageId + 1;
                pageId++;
                if (pageId >= pageNumber) {
                    alert("已经到了最后一页");
                    pageId = pageNumber;//将最后一段赋值给pageId,防止pageId变成16,17,18.加了它后直接成了15
                } else {
                    getMoneyPage(pageId);
                }
            });
            $("select").change(function () {
                var targrtId = $(this).val();
                pageId = targrtId;//如果不加它,pageId则不会发生改变还是原来上下页中的值
                getMoneyPage(targrtId);
            });
        }
    });
}
