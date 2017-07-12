/**
 * Created by Administrator on 2017/7/3.
 */
$(function () {
    /*头部 B*/
    var header = $("#header");
    var titlename = document.title;
    if (header) {
        var headerTag = "";
        var classAttr = header.attr('class');
        if (classAttr && classAttr == "back") {
            headerTag +='<a href="javascript:history.back()" class="logo1">';
           /* headerTag +='  <img src="./images/back.png" alt=""/ class="classImg">';*/
            headerTag +='</a>';
            headerTag +=' <p>'+titlename+'</p>'
        }else{
            headerTag += '<a href="#" class="logo">';
            headerTag += ' <img src="./images/header_logo.png">';
            headerTag += '</a>';
        }
        headerTag += '<a href="#" class="app">';
        headerTag += ' <img src="./images/header_app.png">';
        headerTag += '</a>'
        header.html(headerTag);
    }
    /*头部 E*/
    /*搜索 B*/
    var search = $("#search");
    if (search) {
        var searchTag = "";
        searchTag += '<form action="">';
        searchTag += '  <input type="search" required placeholder="请输入你想比价的商品"/>';
        searchTag += '  <input type="submit"/>';
        searchTag += '</form>';
        search.html(searchTag);
    }
    /*搜索 E*/
    /*底部 B */
    var footer = $("#footer");
    if (footer) {
        var footerTag = "";
        footerTag += '<div class="row">';
        footerTag += '<div class="col-xs-4">';
        footerTag += '<a href="#">登陆</a>';
        footerTag += '</div>';
        footerTag += '<div class="col-xs-4">';
        footerTag += '<a href="#">注册</a>';
        footerTag += '</div>';
        footerTag += '<div class="col-xs-4">';
        footerTag += '<a href="javascript:goTop()" >返回顶部</a>';
        footerTag += '</div>';
        footerTag += '</div>';
        footerTag += '<div class="normal-info">';
        footerTag += '<a href="#">手机APP下载</a>&nbsp;';
        footerTag += '<span>慢慢买 手机版--掌上比价平台</span>';
        footerTag += '<div class="website">m.manmanbuy.com</div>';
        footerTag += '</div>';
        footer.html(footerTag);
    }
    /*底部 E*/

});
function goTop() {
    var speed = 200;
    $("body").animate({"scrollTop": 0}, speed);
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function urlId(){
    return "http://127.0.0.1"
}







