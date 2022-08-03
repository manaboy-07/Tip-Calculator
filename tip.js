const Bill = document.getElementById('bill')
const Tip = document.getElementById('tip')
const NumberOfPeople = document.getElementById('NumberOfPeople')
const InputTotal = document.getElementById('InputTotal')
let NumberOfPeopleText = Number(NumberOfPeople.innerText)
const clear = document.getElementById('clear')
//**  Tip formula = bill + (bill * tip ) / Number of people

function calculateBill(){
    const BillValue = Number(Bill.value)
    const TipValue = Number(Tip.value ) / 100
    const tipAmount = BillValue * TipValue
    const PersonTotal = tipAmount + BillValue
    const Total = PersonTotal / NumberOfPeopleText
    InputTotal.value= `${Total.toFixed(2).toLocaleString('en-Us')}`
}

function increment(){
  NumberOfPeopleText += 1
  NumberOfPeople.innerText = NumberOfPeopleText
  calculateBill()
}
 
function decrement(){
    if(NumberOfPeopleText <= 1){
        alert("Number of people can't be less than one")
        return
    }
    NumberOfPeopleText -= 1
    NumberOfPeople.innerText = NumberOfPeopleText
  
    calculateBill()
}

clear.addEventListener('click', ()=>{
  InputTotal.value = ""
  NumberOfPeopleText = 1
  NumberOfPeople.innerText = NumberOfPeopleText
  Bill.value= ""
  Tip.value =""
})


