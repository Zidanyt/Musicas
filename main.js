const nomeMusica = document.getElementById('nome__musica_');
const capa = document.getElementById('cover')
const musica = document.getElementById('audio');
const nomeBanda = document.getElementById('nome__banda_');
const playMusica = document.getElementById('icone__play')
const skip_start = document.getElementById('skip-start')
const skip_end = document.getElementById('skip-end')
const barra__progresso = document.getElementById('barra__current')
const container__barradeprogersoo = document.getElementById('container__barradeprogersoo')
const inicioMusica = document.getElementById('inicio__musica')
const totalMusica = document.getElementById('total__musica')


const img_left = document.getElementById('img_left')
const img_right = document.getElementById('img_right')

// objeto js
// \' escapa, deixar passa
// const onePiece = {
//     nomeMusica : 'We are!',
//     NomeReferencia : 'One Piece',
//     file : 'Onepiece',
//     file__musica : 'Onepiece',
//     img_left : 'Onepiece',
//     img_right : 'Onepiece',
// };
const fullmetalAlchemistBrotherhood = {
    nomeMusica : ' Again',
    NomeReferencia : 'Fullmetal Alchemist: Brotherhood',
    file : 'fullmetalAlchemistBrotherhood',
    file__musica : 'fullmetalAlchemistBrotherhood',
    img_left : 'fullmetalAlchemistBrotherhood',
    img_right : 'fullmetalAlchemistBrotherhood',
};
const pokemon  = {
    nomeMusica : 'Gotta catch\'em all',
    NomeReferencia : 'pokemon',
    file : 'pokemon',
    file__musica : 'pokemon',
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazClintEastwood  = {
    nomeMusica : 'Gorillaz - Clint Eastwood',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica: 'Gorillaz - Clint Eastwood',
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazTranz  = {
    nomeMusica : 'Gorillaz - Tranz',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - Tranz', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazFeelGood  = {
    nomeMusica : 'Gorillaz - Feel Good',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - Feel Good', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazSaturnzBarzSpiritHouse  = {
    nomeMusica : 'Gorillaz - Saturnz Barz (Spirit House)',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - Saturnz Barz (Spirit House)', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazOnMelancholyHill  = {
    nomeMusica : 'Gorillaz - On Melancholy Hill',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - On Melancholy Hill', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazHollywoodfeatSnoopDoggJamiePrinciple  = {
    nomeMusica : 'Gorillaz - Hollywood feat. Snoop Dogg & Jamie Principle',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - Hollywood feat. Snoop Dogg & Jamie Principle', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazDARE  = {
    nomeMusica : 'Gorillaz - DARE',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - DARE', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const GorillazDirtyHarry   = {
    nomeMusica : 'Gorillaz - Dirty Harry ',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - Dirty Harry ', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const Gorillaz192000   = {
    nomeMusica : 'Gorillaz - 19-2000 ',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - 19-2000', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
const Gorillaz12DAUDIO   = {
    nomeMusica : 'Gorillaz - 12D AUDIO',
    NomeReferencia : 'Gorillaz',
    file : 'Gorillaz',
    file__musica : 'Gorillaz - 12D AUDIO', 
    img_left : 'pokemon',
    img_right : 'pokemon',
};
let isPlaying = false;
const originalPlaylist = [fullmetalAlchemistBrotherhood, pokemon, GorillazClintEastwood, GorillazTranz, GorillazFeelGood, GorillazSaturnzBarzSpiritHouse, GorillazOnMelancholyHill, GorillazHollywoodfeatSnoopDoggJamiePrinciple, GorillazDARE, GorillazDirtyHarry, Gorillaz192000, Gorillaz12DAUDIO];
let index = 0;

function tocaMusica() {
    playMusica.querySelector('.bi').classList.remove("bi-play-circle-fill");
    playMusica.querySelector('.bi').classList.add('bi-pause-circle-fill');
    musica.play();
    isPlaying = true;
}

function pausaMusica() {
    playMusica.querySelector('.bi').classList.add('bi-play-circle-fill');
    playMusica.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    musica.pause();
    isPlaying = false;
}

function playPause() {
    if(isPlaying === true) {
        pausaMusica();
    } else {
        tocaMusica();
    }
}

function iniciarMusica() {
    capa.src = `image/${originalPlaylist[index].file}.jpeg`;
    musica.src = `music/${originalPlaylist[index].file}.mp3`;
    musica.src = `music/${originalPlaylist[index].file__musica}.mp3`;
    img_left.src = `img_left/${originalPlaylist[index].img_left}.png`
    img_right.src = `img_right/${originalPlaylist[index].img_right}.png`
    nomeMusica.innerHTML = originalPlaylist[index].nomeMusica
    nomeBanda.innerHTML = originalPlaylist[index].NomeReferencia
}
// -= decrementa o proprio: index = index - 1
function skipEndMusica() {
    if(index === 0) {
        index = originalPlaylist.length - 1;
    } else {
        index -=  1
    }
    iniciarMusica()
    tocaMusica()
}
function skipStartMusica() {
    if(index === originalPlaylist.length - 1) {
        index = 0;
    } else {
        index +=  1
    }

    iniciarMusica()
    tocaMusica()
}

function barraDeProgresso() {
    // musica.currentTime
    // // quantos segundos se passaram desde do inicio da musica, tempo atual 
    // musica.duration
    // // duração total da musica em segudos
    // setProperty() -- defina um valor par a propriedade 'css'
    const larguraDaBarra = (musica.currentTime/musica.duration)*100;
    barra__progresso.style.setProperty('--progresso', `${larguraDaBarra}%`);
    inicioMusica.innerText = toHHMMSS(musica.currentTime);
}

function jumpTo(event) {
    const width = container__barradeprogersoo.clientWidth
    const clickPsotion = event.offsetX
    const jumpToTime = (clickPsotion/width)*musica.duration
    musica.currentTime = jumpToTime
}

function toHHMMSS(numeroOriginal) {
    let horas = Math.floor(numeroOriginal/3600);
    let minutos = Math.floor((numeroOriginal - horas * 3600)/60);
    let segundos = Math.floor(numeroOriginal - horas * 3600 - minutos * 60);

    return `${horas.toString().padStart(2, '0')}:${minutos
                .toString().padStart(2, '0')}:${segundos
                    .toString().padStart(2, '0')}`
}

function tocaProximaMusica() {
    // Avança para a próxima música (se houver uma)
    index = (index + 1) % originalPlaylist.length;
    iniciarMusica();
    tocaMusica();

}

function TempoMusicaTotal() {
    totalMusica.innerText = toHHMMSS(musica.duration);
}

// execulta
iniciarMusica();

playMusica.addEventListener('click', playPause);

skip_end.addEventListener('click', skipEndMusica)
skip_start.addEventListener('click', skipStartMusica)
musica.addEventListener('timeupdate', barraDeProgresso)
musica.addEventListener('loadedmetadata', TempoMusicaTotal)
container__barradeprogersoo.addEventListener('click', jumpTo)
musica.addEventListener('ended', tocaProximaMusica);

// PlayMusica.addEventListener('Eventos', oq vou fazer);


// https://youtu.be/mhJp7npBtfk?si=i9KpaeIexCVgipqD

// ScrollReveal //

ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.img_right', {
    delay: 400,
    origin: "left"
})
ScrollReveal().reveal('.img_left', {
    delay: 800,
    origin: "bottom"
})