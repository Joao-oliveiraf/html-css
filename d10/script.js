function resize(){
    let w = window.innerWidth;
    if (w < 600){
        document.getElementById('irina').scr = 'imagens/irina-blok-pq.jpg'
        document.getElementById('dandroids').scr = 'imagens/dan-droids-pq.png'
    }else{
        document.getElementById('irina').scr = 'imagens/irina-blok.jpg'
        document.getElementById('dandroids').scr = 'imagens/dan-droids.png'
    }
}