$(function () {
    $.ajax({
        url: urlId()+":3000/api/getcategorytitle",
        type: "get",
        dataType: "json",
        success: function (data) {
            var categoryHTML = template("category-template", data);
            $("#category > .panel-group").html(categoryHTML);
            $("#category > .panel-group>.panel>.panel-heading>.panel-title>a").on("click", function () {
                var titleId = this.dataset['titleMyId'];
                var clickedHref = this.href;
                console.log(clickedHref);
                var targetContainerId = clickedHref.split("#")[1];
                console.log(targetContainerId);
                $.ajax({
                    url: urlId()+":3000/api/getcategory",
                    type: "get",
                    dataType: "json",
                    data: {titleid: titleId},
                    success: function (data) {
                        var childCategoryHtml = template("category-item-template", data);
                        $("#category  >.panel-group > .panel > #" + targetContainerId + ">.panel-body >.row").html(childCategoryHtml);
                    }
                });
            })
        }
    });
});