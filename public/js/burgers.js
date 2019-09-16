$(function () {
    $(".eat-it").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax(`/api/update/${id}`, {
            type: "PUT"
        }).then(
            function () {
                location.reload(true);
            }
        );
    });
    $("#submit-button").on("click", function (event) {
        var newBurger = $("#new-burger").val().trim();
        $("#new-burger").val("");
        $.ajax(`/api/insert/${newBurger}`, {
            type: "POST"
        }).then(
            function () {
                location.reload();
            }
        );
    });
});