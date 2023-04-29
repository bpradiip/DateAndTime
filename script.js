function displaytime(){
    var session = "";
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var day = today.getDay();
    var date = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(today.getHours() >= 12){
        session = "PM";
    }else{
        session = "AM";
    }

    document.getElementById("displayDate").innerHTML = daylist[day] + ", " + month[today.getMonth()] + " " + today.getDate();
    document.getElementById("displayDateTime").innerHTML = date + " " + time + " " + session;
}
setInterval(displaytime, 10);