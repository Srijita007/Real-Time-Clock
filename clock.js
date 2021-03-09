setInterval(()=>{
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrotate = 30*h + m/2 ;
    mrotate = 6*m + s/10;
    srotate = 6*s;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
},1000)

// For hours:
// 12hr = 360deg
// 1hr = 360/12 = 30deg
// n hr = n*30 deg
// 60min = 30deg
// 1min = 1/2deg
// so, hr = h*30 + m*1/2


//For mins:
//60min = 360deg
//1min = 6deg
//n min = 6*n deg
// 60sec = 6deg
// n sec = 1/10n
