let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = [];
  for (var j=0; j < itensOrdenados.length; j++){
    if (itensUnicos.includes(itensOrdenados[j]) != true){
      itensUnicos.push(itensOrdenados[j])
    }
  }
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}
