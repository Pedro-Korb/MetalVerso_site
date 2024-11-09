function modoEscuro() {
    let body = document.body;
    let header = document.getElementById("header");
    let h1 = document.getElementById("h1");
    let principal = document.getElementById("principal");

    let fontfundo = document.getElementsByClassName("fontfundo");

    let h1principal = document.getElementById("h1principal");
    let imagem = document.getElementsByClassName("imagem");
    let divseparada = document.getElementById("divseparada");
    let curiosidade = document.getElementById("hcuriosidade");
    let prodape = document.getElementById("prodape");
    let prodapetitulo = document.getElementById("prodapetitulo");
    let fundocarrocel = document.getElementById("fundocarrocel");
    let nomeintegrante = document.getElementById("nomeintegrante");


    if (body.style.backgroundColor === "rgb(184, 184, 184)" || body.style.backgroundColor === "") {
        body.style.backgroundColor = "black";
        header.style.backgroundColor = "rgb(220 220 220)";
        h1.style.color = "rgb(255, 50, 50)";
        principal.style.backgroundColor = "rgba(48, 48, 48, 0.2)";
        body.style.color = "white";
        h1principal.style.color = "white";

        prodape.style.color = "black";
        prodapetitulo.style.color = "black";

        divseparada.style.backgroundColor = "#232323";
        curiosidade.style.backgroundImage = "linear-gradient(to right, white, red)";

        fundocarrocel.style.backgroundColor = " black";
        nomeintegrante.style.color = "white";


        for (let i = 0; i < fontfundo.length; i++) {
            fontfundo[i].style.color = "black";
            fontfundo[i].style.backgroundImage = "linear-gradient(to right, white, red)";
            imagem[i].style.backgroundColor = "black";
        }

    } else {
        body.style.backgroundColor = "rgb(184, 184, 184)";
        header.style.backgroundColor = "rgb(243, 243, 243)";
        h1.style.color = "#C9D991";
        principal.style.backgroundColor = "white";
        body.style.color = "black";
        h1principal.style.color = "rgb(49, 49, 49)";

        divseparada.style.backgroundColor = "#F2EBD5";
        curiosidade.style.backgroundImage = "linear-gradient(to right, #C9D991, #C9D991)";

        prodape.style.color = "black";
        prodapetitulo.style.color = "black";

        fundocarrocel.style.backgroundColor = "rgb(220 220 220)";
        nomeintegrante.style.color = "black";

        for (let i = 0; i < fontfundo.length; i++) {
            fontfundo[i].style.color = "rgb(49, 49, 49)";
            fontfundo[i].style.backgroundImage = "linear-gradient(to right, #C9D991, #F2EBD5)";
            imagem[i].style.backgroundColor = "rgba(182, 182, 182, 0.425)";
        }
    }
}



function proximoIntegrante()
{

    let dados = [
        {
            id: 0,
            nome: "James Hetfield",
            funcao: "GUITARRISTA BASE E VOCALISTA",
            imagem: "imagens/james.png",
            descricao: "James Hetfield, o principal vocalista e um dos fundadores da banda, Hetfield é conhecido por sua voz poderosa e presença de palco intensa. Ele também compõe grande parte das letras e riffs icônicos do Metallica."
        },
        {
            id: 1,
            nome: "Kirk Hammet",
            funcao: "GUITARRISTA SOLO",
            imagem: "imagens/kirk.png",
            descricao: "Kirk Hammett é o responsável pelos solos marcantes da banda, Hammett entrou no Metallica em 1983 e trouxe um estilo técnico e melódico, influenciado por blues e heavy metal. Seus solos são uma marca registrada do som do Metallica."
        },
        {
            id: 2,
            nome: "Robert Trujillo",
            funcao: "BAIXISTA",
            imagem: "imagens/trujillo.png",
            descricao: "Robert Trujillo é o integrante mais recente, entrou para a banda em 2003. Trujillo é conhecido por seu estilo de tocar muito energético e habilidades impressionantes no baixo, trazendo influências de funky, jazz e metal ao som da banda."
        },
        {
            id: 3,
            nome: "Lars Ulrich",
            funcao: "BATERISTA",
            imagem: "imagens/lars.png",
            descricao: "Lars Ulrich é o baterista e co-fundador, Ulrich é uma figura central no Metallica, tanto na parte musical quanto na gestão da banda. Seu estilo de bateria é característico e ele é conhecido por ter um papel importante na criação dos arranjos das músicas."
        }
    ];

    let imagem = document.getElementById("imagemcarrocel");
    let nome = document.getElementById("nomeintegrante");
    let funcao = document.getElementById("funcaointegrante");
    let descricao = document.getElementById("descricaointegrante");

    if (nome.textContent == dados[0].nome)
    {
        nome.textContent = dados[1].nome;
        funcao.textContent = dados[1].funcao;
        imagem.src = dados[1].imagem;
        descricao.textContent = dados[1].descricao;
    }
    else if (nome.textContent == dados[1].nome)
    {
        nome.textContent = dados[2].nome;
        funcao.textContent = dados[2].funcao;
        imagem.src = dados[2].imagem;
        descricao.textContent = dados[2].descricao;
    }

    else if (nome.textContent == dados[2].nome)
    {
        nome.textContent = dados[3].nome;
        funcao.textContent = dados[3].funcao;
        imagem.src = dados[3].imagem;
        descricao.textContent = dados[3].descricao;
    }

    else if (nome.textContent == dados[3].nome)
    {
        nome.textContent = dados[0].nome;
        funcao.textContent = dados[0].funcao;
        imagem.src = dados[0].imagem;
        descricao.textContent = dados[0].descricao;
    }
}

function tocarAleatorio() {
    const musicas = [
        {nome: "Enter Sandman", url: "https://www.youtube.com/embed/CD-E-LDc384"},
        {nome: "Master of Puppets", url: "https://www.youtube.com/embed/E0ozmU9cJDg?si=8-60kxVgoR7rFyMz"},
        {nome: "One", url: "https://www.youtube.com/embed/WM8bTdBs-cw"},
        {nome: "Nothing Else Matters", url: "https://www.youtube.com/embed/ozXZnwYTMbs?si=QQw6MZIHVk7DuKTW"},
        {nome: "Seek & Destroy", url: "https://www.youtube.com/embed/FLTchCiC0T0?si=GLVKKDhFXNs8A3yO"},
        {nome: "Sad But True", url: "https://www.youtube.com/embed/TpohVYomw2o?si=b8Ir3ZVj4_qUUeyr"},
        {nome: "For Whom The Bell Tolls", url: "https://www.youtube.com/embed/B_HSa1dEL9s?si=o07mRNz8cbzSIJ4w"},
        {nome: "Ride The Lightning", url: "https://www.youtube.com/embed/DVOImtJY7po?si=UVX7yVaLjvKl4-Ec"},
        {nome: "To Live Is To Die", url: "https://www.youtube.com/embed/DhqbGYI970k?si=j4HxyRKF3LAas-b1"},
        {nome: "Creeping Death", url: "https://www.youtube.com/embed/QaMySFc-Rec?si=gvSkm3cV9G7-w4Dz"},
        {nome: "Fuel", url: "https://www.youtube.com/embed/G1cjHbXdU0s?si=qbnGTQbXFwXPnvEW"},
        {nome: "Blackened", url: "https://www.youtube.com/embed/IuIBSvh2aVk?si=p-skfNTMnpcksTr1"},
        {nome: "The Thing That Should Not Be", url: "https://www.youtube.com/embed/b_ObqZtxuj0?si=GFgJuVnuzHMQrprJ"},
    ];
    
    let randomMusic = musicas[Math.floor(Math.random() * musicas.length)];
    let player = document.getElementById("player");
    let imageMetallicazada = document.getElementById("imageMetallicazada");

    imageMetallicazada.style.display = 'none';
    player.style.display = 'block';
    player.src = randomMusic.url;

    window.alert("Música escolhida: " + randomMusic.nome);
}

// Infelizmente não consegui realizar as 5 funções necessárias :(
// Mas, se eu fosse repartir essas funções mais extensas que criei, poderia reparti-las em varias funções menores (varias = mais que 4) :)