var nomes = [];
var txtNomes = document.querySelector("#nomes");
var btn = document.querySelector("#iniciar");
var pontuacao = 0;
var rodada = 1;
var tempo = 1; 

btn.addEventListener("click", function () {
   var valores = txtNomes.value;
   nomes = valores.split(" ");
   txtNomes.value = " ";
   txtNomes.disabled = true;
   btn.disabled = true
   setTimeout(function() {
      jogar();
   }, tempo);
});

function jogar() {
   var numeroAleatorio = Math.floor(Math.random() * nomes.length) + 1;
   var palpite = prompt(`Digite o ${numeroAleatorio}º nome da lista:`);

   var nomeCorreto = nomes[numeroAleatorio - 1];
   var mensagem;
   if (palpite === nomeCorreto) {
      pontuacao++;
      mensagem = "otimo, você acertou!";
   } else {
      pontuacao--;
      mensagem = `errado! O nome correto era ${nomeCorreto}.`;
   } if (pontuacao<0){
       pontuacao=0;
   }

   alert(mensagem +`essa no momento é sua atual pontuação ${pontuacao}.`);

   rodada++;
   if (rodada <= 5) {
      jogar();
   } else {
      alert(`Fim de jogo! Sua pontuação final é ${pontuacao}.`);
      txtNomes.disabled = false;
      document.getElementById("btn").disabled = true;
   }
}
