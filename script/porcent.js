let btn_one = document.querySelector("#btn-one");
let btn_two = document.querySelector("#btn-two");
let btn_three = document.querySelector("#btn-three");
let btn_four = document.querySelector("#btn-four");

btn_one.addEventListener("click",function(event){
    event.preventDefault();
    
    let  per = document.querySelector("#a1").value;
    let tod = document.querySelector("#a2").value;

    let res = (tod * per / 100);
    res = res.toFixed(2);
    console.log(res);

    let rend = document.querySelector("#r1");
    rend.innerHTML=res;
    
});

btn_two.addEventListener("click",function(event){
    event.preventDefault();
    
    let  b1 = document.querySelector("#b1").value;
    let b3 = document.querySelector("#b3").value;

    let res = (b1*100)/b3;
    res = res.toFixed(2);
    console.log(res);

    let rend = document.querySelector("#r2");
    rend.innerHTML=res;
    
});

btn_three.addEventListener("click",function(event){
    event.preventDefault();
    
    let  c1 = document.querySelector("#c1").value;
    let  c2 = document.querySelector("#c2").value;

    let res = (c1*100)/c2;
    res = res.toFixed(2);
    console.log(res);

    let rend = document.querySelector("#r3");
    rend.innerHTML=res;
    
});

btn_four.addEventListener("click",function(event){
    event.preventDefault();
    
    let  d1 = document.querySelector("#d1").value;
    let d3 = document.querySelector("#d3").value;

    let res = (d1*100)/d3;
    res = res.toFixed(2);

    console.log(res);

    let rend = document.querySelector("#r4");
    rend.innerHTML=res;
    
});