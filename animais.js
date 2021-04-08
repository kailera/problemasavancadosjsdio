const filter1 = gets();
const filter2 = gets();
const filter3 = gets();
//complete a solução de acordo com suas variáveis

if (filter1 === "vertebrado") {
  if (filter2 === "ave") {
    if (filter3 === "carnivoro") {
      console.log("aguia");
    } else {
      console.log("pomba");
    }
  } else {
    if (filter3 === "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
} else {
  if (filter2 === "inseto") {
    if (filter3 === "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else{
    if (filter3 === "hematofago") {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}
