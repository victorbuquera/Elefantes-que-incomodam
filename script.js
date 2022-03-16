
function cantar(){
    var N = document.getElementById('qntdElefantes').value
    let Elefantes = 1
    let texto;
    if(N % 2 == 0)
    {
        while(Elefantes <= N)
        {
            if(Elefantes == 1)
            {
                texto = "1 elefante incomoda muita gente <br>";
                Elefantes++
            }
                if(Elefantes % 2 != 0)
                {
                    texto += Elefantes+ " Elefantes incomodam muita gente <br>"
                }else{
                    texto += Elefantes+ " Elefantes  "
                    for(i=0; i < Elefantes-1; i++){
                      texto += " incomodam, "
                    }
                   texto += " incomodam, muito mais <br>"                    
                }
            Elefantes++
        }
        espacoMusica.innerHTML = texto;
    }else{
        espacoMusica.innerHTML = 'Numero invalido'
    }

}