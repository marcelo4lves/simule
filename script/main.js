//Botões
let btn_add = document.querySelector('#simular-btn');
let btn_simular = document.querySelector('#btn-simular');
let btn_comp = document.querySelector("#comparar");

//Caixas
let cx1 = document.querySelector('#sim1');
let cx2 = document.querySelector('#sim2');
let cx3 = document.querySelector('#sim3');
let cx_add = document.querySelector("#cx-add");
let cx_com = document.querySelector(".comparar")
let cx_rend = document.querySelector("#result");

//Variaveis dos inputs
let vl = [];
let tx = [];
let tt = [];
let pz = [];
 let tp=[];

 //Constates
 const CDB = 12.83;
 const SELIC = 13.75;
 const POP = 7;

/** Mostrar opções de comparação no formulário**/
btn_add.addEventListener ("click",function(e){
    if(cx1.classList.contains('ocult')){
        cx1.classList.remove('ocult');
    }else  if(cx2.classList.contains('ocult')){
        cx2.classList.remove('ocult');
        cx_com.classList.remove('ocult');
        btn_simular.classList.add('ocult')
    }else  if(cx3.classList.contains('ocult')){
        cx3.classList.remove('ocult');
        cx_add.classList.add('ocult');
    }else

    e.preventDefault();
   
});



//Função após apertar o botão de simulação
btn_simular.addEventListener("click", function(e){
     e.preventDefault();      
     
     pegarValor();
    cal_porcentagem(vl[0],tx[0],tt[0],pz[0],tp[0],0);
    cal_porcentagem(vl[0],POP,"p",pz[0],tp[0],50);
    
    btn_simular.classList.add('ocult');
        
 });


 btn_comp.addEventListener("click", function(e){
    e.preventDefault();
    cx_rend.innerHTML="";
    for(let i=0; i<3; i++){
        pegarValor();
        if(vl[i]!=null){
            cal_porcentagem(vl[i],tx[i],tt[i],pz[i],tp[i],i);
            
        }
        
        



    }
    
    btn_comp.classList.add('ocult');
    
 });

//Função para pegar o valor das dos inputs e armazenar em um array
 function pegarValor(){
    if(!cx1.classList.contains('ocult')){
        vl[0] = document.querySelector("#valor1").value;
        tx[0] = document.querySelector("#taxa1").value;
        tt[0] = document.querySelector("input[name='val-tax1']:checked").value; 
        pz[0] = document.querySelector("#prazo1").value;
        tp[0]= document.querySelector("input[name='tp-praz1']:checked").value; 

        if(vl[0] === '' || tx[0] === '' || tt[0] == '' || pz[0] ==='' || tp[0]===''){
            alert("Campos informados não podem ficar vazio");
            return;
                }
                
        }
            
        
    if(!cx2.classList.contains('ocult')){
        vl[1] = document.querySelector("#valor2").value;
        tx[1] = document.querySelector("#taxa2").value;
        tt[1] = document.querySelector("input[name='val-tax2']:checked").value; 
        pz[1] = document.querySelector("#prazo2").value;
        tp[1]= document.querySelector("input[name='tp-praz2']:checked").value;
                
    }
             
    if(!cx3.classList.contains('ocult')){
        vl[2] = document.querySelector("#valor3").value; // dinheiro investido
        tx[2] = document.querySelector("#taxa3").value; //taxa 
        tt[2] = document.querySelector("input[name='val-tax3']:checked").value; //tipo de taxa % ou cdi
        pz[2] = document.querySelector("#prazo3").value; // prazo
        tp[2]= document.querySelector("input[name='tp-praz3']:checked").value; //tipo de prazo mês ano
                
    }                
      
}

btn_comp.addEventListener("click", (e)=>{
        e.preventDefault();
        renderizarTela();
});

function renderizarTela(){
    
    cx_rend.classList.remove('ocult');
   
}

function cal_porcentagem(vl,tx,tt,pz,tp,it){
    let c = parseFloat(vl);
    let m = null;
    let t = null;
    let i = null;


    if(tt==='cdi'){
        i =(((CDB * tx) / 100)/  12)/ 100;
    }else{
        i = (tx/ 100 )/ 12;
    }

    if(tp ==='d'){
        t = pz/ 30
    }else{
        t=pz;
    }
    m = c * Math.pow(1+i,t);
    m =  m.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'});
    console.log("I+1 "+(1 + i))

    console.log("C: "+c);
    console.log("M: "+m)
    console.log("T: "+t)
    console.log("i: "+i)

    rend_dados(vl,tx,pz,m,it);
    
}

function rend_dados(vl,tx,pz,m,it){
    renderizarTela();
    let rend_dados = document.createElement('div');
    rend_dados.classList.add('result');

    let h2 = document.createElement('h2');

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    
    let tex = null;
    if(it==50){
        tex = document.createTextNode("Simulardor " + "Poupança");
    }else{
        tex = document.createTextNode("Simulardor " + (it+1));  
    }
    
    var c = document.createTextNode("O capital R$"+vl);
    var i = document.createTextNode("Aplicado a uma taxa de: "+tx);
    var t= document.createTextNode("Durante "+pz);
    var mt = document.createTextNode("Renderá: R$"+m);
    
    h2.appendChild(tex);
    rend_dados.appendChild(h2);

    p1.appendChild(c);
    p2.appendChild(i);
    p3.appendChild(t);
    p4.appendChild(mt);

    rend_dados.appendChild(p1);
    rend_dados.appendChild(p2);
    rend_dados.appendChild(p3);
    rend_dados.appendChild(p4);

    cx_rend.appendChild(rend_dados);

}


