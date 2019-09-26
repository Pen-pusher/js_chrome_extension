// You js goes here


setInterval(() => {
    var time = document.querySelector('.head');
    var d = new Date();
    var n = d.toLocaleTimeString();
    time.textContent = n;  
}, 1000);