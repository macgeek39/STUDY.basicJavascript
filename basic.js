//console.log("Hello World");
//console.log(`I like Pizza`);

//window.alert(`This is an alert`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I love pizza`;

document.getElementById("mySubmit").onclick = function()
{
    username = document.getElementById("myText").value;
    document.getElementById("update").textContent = `Hello ${username}`;
}