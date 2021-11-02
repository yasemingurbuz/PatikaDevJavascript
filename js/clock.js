var userName = prompt("Adınızı Giriniz:")
document.getElementById("myName").innerText = userName;



function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var day = date.getDay();

    var dayString;



    switch (day) {
        case 1:
            dayString = "Pazartesi";
            break;
        case 2:
            dayString = "Salı";
            break;
        case 3:
            dayString = "Çarşamba";
            break;
        case 4:
            dayString = "Perşembe";
            break;
        case 5:
            dayString = "Cuma";
            break;

        case 6:
            dayString = "Cumartesi";
            break;
        case 7:
            dayString = "Pazar";
            break;

    }

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;

    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + dayString;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();