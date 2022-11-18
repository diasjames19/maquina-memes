async function mapImagens(){
    const arrayImagens = [
        {
            "nome":"funny-cat1",
            "url":"./imagens/funny-cat1.png"
        },
        {
            "nome":"funny-cat2",
            "url":"./imagens/funny-cat2.png"
        },
        {
            "nome":"chloe",
            "url":"./imagens/chloe.jpg"
        },
        {
            "nome":"chapolin",
            "url":"./imagens/chapolin.jpg"
        },
    ]
    return arrayImagens;
}
function imagemUpload(){
    const imageInput = document.querySelector('#image-input')
    imageInput.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result
            trocarImagem(uploadImage)
            // document.querySelector('#display-image').style
            // .backgroundImage = `url('${uploadImage}')`
        })
        reader.readAsDataURL(this.files[0]);
    })
}
async function criarGaleriaDeImagens(listaDeImagens){
   const opcaoDeImagens = document.querySelector('#meme-list');
   listaDeImagens.forEach(imagem => {
       let novaImagem = document.createElement("option")
       novaImagem.text = imagem.nome.toUpperCase()
       novaImagem.value = imagem.url
       opcaoDeImagens.appendChild(novaImagem)
   });
}

async function trocarImagem(imagem){
    let displayImagens = document.querySelector('#display-image')
    displayImagens.style.backgroundImage = `url('${imagem}')`;
     
}
async function main(){
    const memesImagensList = await mapImagens();
    imagemUpload()
    await criarGaleriaDeImagens(memesImagensList);
    await trocarImagem(memesImagensList[0].url);
}


main()