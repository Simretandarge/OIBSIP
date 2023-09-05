document.getElementById('convert').onclick = tempconvert;
document.getElementById('clear').onclick = clearform;

function tempconvert() {
    var fahrenhiet = document.getElementById("fahrenhiet").value;
    var celsius = document.getElementById("celsius").value;

    if (fahrenhiet != '') {
        celsius = (parseFloat(fahrenhiet) -32) /1.8;
    } else{
        fahrenhiet = (parseFloat(celsius)* 1.8) +32;
    }

    document.getElementById('fahrenhiet').value = parseFloat(fahrenhiet).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}
function clearform() {
    document.getElementById('fahrenhiet').value = '';
    document.getElementById('celsius').value = '';
}