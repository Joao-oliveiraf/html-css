
function resize(){
    var w = window.innerWidth;
    if (w < 600){
        document.getElementById('dandroids').src='imagens/dan-droids-pq.png'
        document.getElementById('irina').src = 'imagens/irina-blok-pq.jpg'

    }else{
        document.getElementById('dandroids').src='imagens/dan-droids.png'
        document.getElementById('irina').src = 'imagens/irina-blok.jpg'
    }
}


