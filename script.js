window.onload = function () {
    let kintamasis = 3;
    
    let rezultatas = skaiciausKubas(3);
    console.log(rezultatas);
    let rezultatas1 =skaiciausKubas(5);
    console.log(rezultatas1);
    let rezultatas2 = skaiciausKubas(117);
    console.log(rezultatas2);
    let rezultatas3 = skaiciausKubas(258);
    console.log(rezultatas3);


}
function skaiciausKubas(kintamasis) {
    return kintamasis * kintamasis *kintamasis;
}

