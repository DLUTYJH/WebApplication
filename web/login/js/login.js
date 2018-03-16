define(function (require, exports, module) {
    function a() {
        $(function () {
                var $button = $("#user-login");
                $button.bind("click", function (event) {

                    var $userName = $("input[name=e-mail]");
                    var $password = $("input[name=password]");
                    var emailForm = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                    if (!emailForm.test($userName.val())) {
                        alert("邮箱格式错误");
                        $userName.focus();
                        event.stopPropagation();
                        flag = true;
                    }
                    if ($password.val().length < 6) {
                        alert("密码不正确");
                        $password.focus();
                        event.stopPropagation();
                    }
                })
            }
        )
    }

    /*
    module.exports={
        foo:"aaaaa",
        doSomeThing:a
    };*/
    /* return{
         foo:"aaaaa",
         doSomeThing:a
     };*/
    exports.foo = "aaaaa";
    exports.doSomeThing = a;
})