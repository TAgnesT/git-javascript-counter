//alapertek felvetele - 0 helyere megy - nyomkodva a gombokat ez fog valtozni
let count = 0;

//gombok es egyeb elemek eltarolasa valtozokba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

//megoldas verzio hardos
//console.log(btns);

//tomb tehat ciklussal vegig lepkedek az eltarolt gombokon, melyeken rajta van a btn class
btns.forEach((btn)=>{

    //az osszes gomb kozul melyeket bejarok ciklussal, azt kattintom meg amelyik az aktualis ciklusfutaskor jon a sorban
    //elso ciklusfutas - 0.indexu gomb (decrease)...stb
    btn.addEventListener("click", (e)=>{

        //az eppen aktualisan megkattintott gombon milyen class/ok vannak
        const style = e.currentTarget.classList;

        //console.log(style);

        //ha az aktualisan megkattintott gombom classai kozul tartalmazza a "decrease" classt akkor csokkentjuk az alaperteket
        if(style.contains("decrease")){

            count--;
        } 
        else if(style.contains("increase")){

            //noveljuk az alaperteket
            count++;
        } 
        else{

            //visszaallitjuk az alaperteket
            count = 0;
        }

        //szinek beallitasa - span hez
        if(count > 0){

            value.style.color = "green";
        }
        else if(count < 0){

            value.style.color = "red";
        }
        else{

            value.style.color = "black";
        }

        value.textContent = count;
    })
})

































/*
//egyszeru pigro modszer
increase.addEventListener("click", ()=>{

    count++; //ha rakattintok 1el novelem az erteket

    //megnezem, h az alapertekem nagyobb e mint nulla
    if(count > 0){

        //ha nagyobb hozzaadok egy zold betuszint
        value.style.color = "green";
    }

    //majd az alapertekben aktualis erteket beallitom a value id-val ellatott spannek
    value.textContent = count;
})

decrease.addEventListener("click", ()=>{

    count--; //ha rakattintok 1el csokkentem az erteket

    //megnezem, h az alapertekem kisebb e mint nulla
    if(count < 0){

        //ha nagyobb hozzaadok egy piros betuszint
        value.style.color = "red";
    }

    //majd az alapertekben aktualis erteket beallitom a value id-val ellatott spannek
    value.textContent = count;
})

reset.addEventListener("click", ()=>{

    //alaperteket visszaallitom 0ra
    count = 0;

    //visszaallitom a fekete betuszint
    value.style.color = "black";

    //majd az alapertekben aktualis erteket beallitom a value id-val ellatott spannek
    value.textContent = count;
}) */