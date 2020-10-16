var a,b,x,y;

function GoToSelect(){
    var x = document.getElementById("introduction");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    var y = document.getElementById("Selection");
    if (y.style.display === "none") {
      y.style.display = "block";
    }
     else {
      y.style.display = "none";
    }
}


function GoToLocate(){
    var y = document.getElementById("Selection");
    y.style.display = "none";
    var z = document.getElementById("Location");   
    z.style.display = "block";   
}

function GoToPlace(){
    var z = document.getElementById("Location");   
    z.style.display = "none"; 
    var a=document.getElementById("air");
    var b=document.getElementById("hosp");
    var c=document.getElementById("park");
    var d=document.getElementById("garden");
    if(a.checked){
        a=1;
        var e=document.getElementById("KolkataAirport");
        e.style.display="block";
    }
    if(b.checked){
        b=1;
        var e=document.getElementById("Dharamshila");
        e.style.display="block";
    }
    if(c.checked){
        c=1;
        var e=document.getElementById("EcoPark");
        e.style.display="block";
    }
    if(d.checked){
        d=1;
        var e=document.getElementById("EdenGarden");
        e.style.display="block";
    }
    
    
    
}