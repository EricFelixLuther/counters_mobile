$( document ).ready(function(){
    $("#add_counter").click(function(){
        $("#counter_container").append("<input type='text' />");
        $("#counter_container").append("<input type='number' />");
        $("#counter_container").append("<br />");
    });
});