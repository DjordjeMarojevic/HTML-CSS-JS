function prosjek(arr){

    let s = 0;

    for(let i = 0; i < arr.length; i++){
        s += arr[i];
    }

    return s/arr.length;
}


function StudentSaNajvisimProsjekom(studenti){

    let max = 0;
    let rj;

    studenti.forEach(s => {
        if(prosjek(s.ocjene) > max){
            max = prosjek(s.ocjene);
            rj = s;
        }    
    });

    
    console.log(rj);


    return rj;
}

function prosjecanProsjekSvihStudenata(studenti){


    let s = 0;

    studenti.forEach(student => {
        
        s += prosjek(student.ocjene)
        
    });


    return s/studenti.length;

}

function sortiranje(studenti){

    for(let i = 0; i < studenti.length-1; i++){
        for(let j = i+1; j < studenti.length; j++){
            if(prosjek(studenti[i].ocjene) < prosjek(studenti[j].ocjene)){
                let a = studenti[i]
                studenti[i] = studenti[j]
                studenti[j] = a;
            }
        }

    }

    console.log(studenti)

}


function dodavanjeKljuca(studenti){


    studenti.forEach(s => {
        s['prosjek'] = prosjek(s.ocjene)
    });

    console.log(studenti)
}

const studenti = [
    { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
    { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
    { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
    { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
    { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] }
   ];
/*
studenti.forEach(s => {

    if(prosjek(s.ocjene) > 8.5){
        console.log(s);
    }
    else{
        console.log(s.ime);
    }

});*/
/*

console.log("-------------------------------------")
StudentSaNajvisimProsjekom(studenti)


console.log("=====================================")
console.log(prosjecanProsjekSvihStudenata(studenti))


console.log("======================================")
*/

//sortiranje(studenti)


//dodavanjeKljuca(studenti)




