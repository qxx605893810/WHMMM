/**
 * Created by Administrator on 2017/7/9.
 */
$(function () {
    $.ajax({
        url: urlId()+":3000/api/getbrandtitle",
        type: "get",
        dataType: "json",
        success: function (data) {
            var panelTemplate = template("panelTemplate", data);
            $("#content>.contentList>.panel-group").html(panelTemplate);


            //点击时才加载
            $("#content > .contentList > .panel-group > .panel > .panel-heading > .panel-title > a").on('click', function () {
                var brandTitle = this.dataset["titleId"];
                $.ajax({
                    url: urlId()+":3000/api/getbrand",
                    type: "get",
                    dataType: "json",
                    data: {brandtitleid: brandTitle},
                    success: function (data) {
                        var panelBodyTemplate = template("panelBodyTemplate", data);
                        $("#content>.contentList>.panel-group>.panel>.panel-collapse>.panel-body").html(panelBodyTemplate);
                    },
                    error: function () {
                        alert("错误,请联系管理员")
                    }
                });
            });

        },
        error: function () {
            alert("服务器异常,请联系工作人员");
        }
    });

});
