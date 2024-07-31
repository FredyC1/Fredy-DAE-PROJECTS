let username;

document.getElementById("gen-BTN").onclick = function() {
    username = document.getElementById("myText").ariaValueMax;
    console.log(username)
}

document.getElementById('Add-card-BTN').addEventListener('click', function() {
    var originalDiv = document.querySelector('duplicate-div');

    var clonedDiv = originalDiv.cloneNode(true); 

    document.getElementById('flash-card-gen').appendChild(clonedDiv);
});