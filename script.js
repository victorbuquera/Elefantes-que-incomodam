/*function cantar(){
    var N = document.getElementById('qntdElefantes').value
    let elefantes = 1
    var espacoMusica = document.getElementById('espacoMusica')
    if(N % 2 == 0){
        while(elefantes <= N){
            if(elefantes == 1){
               
            }
        }
    }
}
*/
function cantar(){
    var N = document.getElementById('qntdElefantes').value
    let Elefantes = 1
    let texto;
    if(N % 2 == 0)
    {
        while(Elefantes <= N){
            if(Elefantes == 1){
                texto = "1 elefante incomoda muita gente <br>";
               // espacoMusica.innerHTML += "1 elefante incomoda muita gente "
                Elefantes++
            }
                if(Elefantes % 2 != 0){
                    texto += Elefantes+ " Elefantes incomodam muita gente <br>"
                   // espacoMusica.innerHTML = Elefantes, "Elefantes incomodam muita gente "
                }else{
                    texto += Elefantes+ " Elefantes  "
                   // espacoMusica.innerHTML = Elefantes, "elefantes "
                    for(i=0; i < Elefantes-1; i++){
                      //  espacoMusica.innerHTML += "incomodam "
                      texto += " incomodam, "
                    }
                   // espacoMusica.innerHTML += "incomodam muito mais "
                   texto += " incomodam, muito mais <br>"
                   
                    
                }
            Elefantes++
        }
        espacoMusica.innerHTML = texto;
    }else{
        espacoMusica.innerHTML = 'Numero invalido'
    }

}

/*function cantar(){
    var N = document.getElementById('qntdElefantes').value
    let Elefantes = 1
    if(N % 2 == 0){
        while(Elefantes <= N){
            if(Elefantes == 1){
                console.log("1 elefante incomoda muita gente")
                Elefantes++
            }
                if(Elefantes % 2 != 0){
                   console.log(Elefantes, "Elefantes incomodam muita gente" ) 
                }else{
                    console.log( Elefantes, "elefantes")
                    for(i=0; i < Elefantes-1; i++){
                        console.log('incomodam') 
                    }
                    console.log("incomodam muito mais")  
                    if(Elefantes + 1 < N){
                        espacoMusica.innerHTML = ' '
                    }
                }
            Elefantes++
        }
    }else{
        espacoMusica.innerHTML = 'Numero invalido'
    }

}
*/