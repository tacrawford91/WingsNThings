// add new wing

$(".submit").on("click", function() {
    var newWing = {
            wingFlavor: $(".newFlavor").val().trim(),
            eaten: 0
        } 
    $.ajax({
        url: "/api/add",
        method: "POST",
        data: newWing
    }).then((response) => {
    console.log(response);
    });
}) 

$(document).on("click", ".eat", function() {
    var updateWing = {
            id: $(this).data("attr"),
            eaten: 1
        } 
    $(".eaten").append($(`.${updateWing.id}`));
    $(this).removeClass("eat");
    $(this).addClass("order");
    $(this).text("ORDER AGAIN!");
    $.ajax({
        url: "/api/update",
        method: "PUT",
        data: updateWing
    }).then((response) => {
    console.log(response);
    });
});

$(document).on("click", ".order", function() {
    var orderWing = {
            id: $(this).data("attr"),
            eaten: 0
        } 
    $(".unEaten").append($(`.${orderWing.id}`));
    $(this).removeClass("order");
    $(this).addClass("eat");
    $(this).text("EAT!!");
    $.ajax({
        url: "/api/update",
        method: "PUT",
        data: orderWing
    }).then((response) => {
    console.log(response);
    });
}) 

