/**
 * Created by Administrator on 2017/7/8.
 */
$(function () {
    $("#nav>.row>.shop").on("click", function () {
        if (isShopOpen) {
            openShopContent();
        } else {
            closeShopContent();
        }
    });
    $("#nav>.row>.area").on("click", function () {
        if (isAreaOpen) {
            openAreaContent();
        } else {
            closeAreaContent();
        }
    });
    openShopAjax();
});
var isShopOpen = true;
var isAreaOpen = true;
var titleShopId = 0;
var titleAreaId = 0;

function closeShopContent() {
    isShopOpen = true;
    $("#nav>.content>.shop-content").css({
        display: "none"
    });
    $("#nav>.row >.shop>a").removeClass("checked");
}
function openShopContent() {
    closeAreaContent();
    isShopOpen = false;
    $("#nav>.content>.shop-content").css({
        display: "block"
    });
    $("#nav>.row >.shop>a").addClass("checked");
}
function closeAreaContent() {
    isAreaOpen = true;
    $("#nav>.content>.area-content").css({
        display: "none"
    });
    $("#nav>.row >.area>a").removeClass("checked");
}
function openAreaContent() {
    closeShopContent();
    isAreaOpen = false;
    $("#nav>.content>.area-content").css({
        display: "block"
    });
    $("#nav>.row >.area>a").addClass("checked");
}
function openShopAjax() {
    $.ajax({
        url: urlId()+':3000/api/getgsshop',
        type: "get",
        dataType: 'json',
        success: function (data) {
            var shopContentId = template("shopContentId", data);
            $("#nav > .content > .shop-content").html(shopContentId);
            $("#nav>.content>.shop-content>a:first-of-type").addClass("section");

            $("#nav>.row>.shop>a").text(data.result[0].shopName);
            $("#nav>.content>.shop-content>a").on("click", function () {
                titleShopId = this.dataset["titleShopId"];
                $(this).addClass("section").siblings("#nav > .content > .shop-content > a").removeClass("section");
                $("#nav>.row>.shop>a").text($(this).text());
                getsProduct(titleShopId, titleAreaId);
            });
            openAreaAjax();
            getsProduct(titleShopId, titleAreaId);
        }
    });
}
function openAreaAjax() {
    $.ajax({
        url: urlId()+':3000/api/getgsshoparea',
        type: "get",
        dataType: 'json',
        success: function (data) {
            var areaContentId = template("areaContentId", data);
            $("#nav > .content > .area-content").html(areaContentId);
            $("#nav>.row>.area>a").text(data.result[0].areaName);
            $("#nav > .content > .area-content > a:first-of-type").addClass("section");
            $("#nav > .content > .area-content > a").on("click", function () {
                titleAreaId = this.dataset["titleAreaId"];
                $(this).addClass("section").siblings("#nav > .content > .area-content > a").removeClass("section");
                $("#nav>.row>.area>a").text($(this).text());
                getsProduct(titleShopId, titleAreaId);
            });
            getsProduct(titleShopId, titleAreaId);
        }
    });
}
function getsProduct(titleShopId, titleAreaId) {
    $.ajax({
        url: urlId()+':3000/api/getgsproduct',
        type: "get",
        dataType: 'json',
        data: {shopid: titleShopId, areaid: titleAreaId},
        success: function (data) {
            var contentId = template("contentId", data);
            $("#content>.row").html(contentId);
        },
        error: function () {
            console.log('11');
        }
    });
}
