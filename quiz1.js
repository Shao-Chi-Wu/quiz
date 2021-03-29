  
function change() {
    $("#hid123").html("CSIE@CGU");
    $("#pid123").html("怎麼那麼棒")
}

function new_button() {
    var btn="<button id='change'>Change this document</button>";
    $("body").append(btn);
    $("#change").click(change);
}
$("#btn").click(new_button);