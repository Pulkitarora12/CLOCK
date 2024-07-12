let showTime =() =>{

    let session = "AM" ;

    let d = new Date() ;
    let h = d.getHours() ;
    let m = d.getMinutes() ;
    let s = d.getSeconds() ;

    h = h<10 ? "0" + h : h ;
    m = m<10 ? "0" + m : m ;
    s = s<10 ? "0" + s : s ;

    if((h > 12)){
        h = h-12 ;
    }
    if(h >= 12){
        session = "PM" ;
    }

    else if (h === 0) {
        h = 12;
    }

    let time = h + " " +":" + m + " " +":" +" " + s + " " +":" + session; 

    document.getElementsByTagName("h1")[0].innerText = time 
}

showTime() 

setInterval(showTime , 1000)
window.addEventListener('load', showTime);