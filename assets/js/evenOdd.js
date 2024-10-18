function toplamiBul(){
    let numberList = [];
    let evenNumbers = [];
    let oddNumbers = [];
    let amountOfNumbers = Number(prompt("Kaç adet sayı girmek istiyorsunuz?"));
    for(let i = 0; i < amountOfNumbers; i++){
        let enteredNumber = Number(prompt((i + 1) + ". sayıyı giriniz: "));
        numberList.push(enteredNumber);
        evenNumbers = Number(evenNumbers);
        oddNumbers = Number(oddNumbers);
        if(enteredNumber % 2 === 0){
            evenNumbers += enteredNumber; 
        }else{
            oddNumbers += enteredNumber;
        }
    }
    console.table("Girilen sayılar: " + numberList);
    console.log("Tek sayıların toplamı: " + oddNumbers);
    console.log("Çift sayıların toplamı: " + evenNumbers);
}

toplamiBul();

