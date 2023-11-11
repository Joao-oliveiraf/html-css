function resize(){
    let w = window.innerWidth;
    if (w < 600){
        document.getElementById('irina').src = 'imagens/irina-blok-pq.jpg'
        document.getElementById('dandroids').src = 'imagens/dan-droids-pq.png'
    }else{
        document.getElementById('irina').src = 'imagens/irina-blok.jpg'
        document.getElementById('dandroids').src = 'imagens/dan-droids.png'
    }
}