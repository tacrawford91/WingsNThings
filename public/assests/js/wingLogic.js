// add new wing

$(".submit").on("click", function() {
    //Get New Wing Data
    var newWing = {
            wingFlavor: $(".newFlavor").val().trim(),
            eaten: 0
        }; 
    //post request to save new wing
    $.ajax({
        url: "/api/add",
        method: "POST",
        data: newWing
    }).then((response) => {
    //refresh page to show the wing added and that the db is working (holding devoured states)
    window.location.reload();
    });
}); 

//must use document.onclick due to the use of dynamic features
$(document).on("click", ".eat", function() {
    //get wing data
    var updateWing = {
            id: $(this).data("attr"),
            eaten: 1
        };
    //change wing div and position     
    $(".eaten").append($(`.${updateWing.id}`));
    $(this).removeClass("eat");
    $(this).addClass("order");
    $(this).text("ORDER AGAIN!");
    //put request to update
    $.ajax({
        url: "/api/update",
        method: "PUT",
        data: updateWing
    }).then((response) => {
    });
});
//must use document.onclick due to the use of dynamic features
$(document).on("click", ".order", function() {
    //get wing data
    var orderWing = {
            id: $(this).data("attr"),
            eaten: 0
        }
    //change wing div and position  
    $(".unEaten").append($(`.${orderWing.id}`));
    $(this).removeClass("order");
    $(this).addClass("eat");
    $(this).text("DEVOUR!!");
    //put request to update
    $.ajax({
        url: "/api/update",
        method: "PUT",
        data: orderWing
    }).then((response) => {
    });
}) 

