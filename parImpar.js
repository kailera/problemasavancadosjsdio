let totalItems = gets();
let items = [];
let arrp = [];
let arri = [];

for (let i = 0; i < totalItems; i++) {
  items.push(parseInt(gets()));
}

for (let j = 0; j < items.length; j ++){
  if((items[j] % 2)===0){
    arrp.push(items[j])
  }
  else{
    arri.push(items[j])
  }
}

//funcao de ordenacao
const compararImpar = (a,b) => {
  if(a>b){
    return -1;
  }
  if(a<b){
    return 1
  }
}

const compararPar = (a,b) => {
  if(a>b){
    return 1;
  }
  if(a<b){
    return -1
  }
}



arrp.sort(compararPar);
arri.sort(compararImpar);

let resposta = [...arrp, ...arri].splice(" ");

for (let k = 0; k < resposta.length; k++){
  console.log(resposta[k])
}
