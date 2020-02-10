var out = document.querySelector('.out')

for (var n=0; n<1; n++){
    for(var k=0; k<6; k++){
   
    var i = (1/Math.pow(k,2)+1)+(1/Math.pow(k,2)+2)+n+(1/Math.pow(k,2)+k+1)
    out.innerHTML += i;
    }
   
}