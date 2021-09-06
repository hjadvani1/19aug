var k = " ";
function getTask() {
    var input = document.getElementsByName('input');
    for (var i = 0; i < input.length; i++)
    {
        var a = input[i];
        k = k + a.value+"<br>";
    }
    document.getElementById("showtask").innerHTML = k
}
