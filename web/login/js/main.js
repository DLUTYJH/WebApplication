define(function (require) {
    var main = require("./login");
    $().ready(function () {
        $.ajax({
            type: "post",
            url: "http://39.108.55.32:8080/WebApplication_war/Test",
            dataType: "json",
            success: function (data) {
                console.log(data.toString());
                alert(data.yourName);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown); //
            }
        });
    })
})