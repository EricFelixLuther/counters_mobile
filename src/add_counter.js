var add = function(){
  var placeholder = $(this).parent().prev().find("[placeholder='counter']");
  placeholder.html(parseInt(placeholder.html()) + 1);
}

var substract = function(){
  var placeholder = $(this).parent().next().find("[placeholder='counter']");
  placeholder.html(parseInt(placeholder.html()) - 1);
}

$( document ).ready(function(){
  $("#add_counter").click(function(){
    var new_counter = $("#hidden_tmp").children().clone();
    new_counter.find("[placeholder='name']").html($("#new_name").val());
    new_counter.find("button[operation='add']").click(add);
    new_counter.find("button[operation='substract']").click(substract);
    $("#counter_container").append(new_counter);
    $("#counter_container").last(".row").show();
  });
});
