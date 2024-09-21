function inputValue (id){
  return parseFloat(document.getElementById(id).value) ;
   
}
function savingPercentace(id) {
  return parseFloat(document.getElementById(id).value);
}
function showError(id) {
  document.getElementById(id).classList.remove('hidden');
}

let count=0
document.getElementById('calculate').addEventListener('click', function(){
    count+=1
    const income = inputValue('income');
    const software= inputValue('software');
    const courses= inputValue('courses');
    const   internet= inputValue('internet');

    if (income <=0 || isNaN(income)) {
      showError('income-error')
      return
    }
    if (software <=0 || isNaN(software)) {
      showError('software-error')
      return
    }
    if (courses <=0 || isNaN(courses)) {
      showError('courses-error')
      return
    }
    if (internet <=0 || isNaN(internet)) {
      showError('internet-error')
      return
    }
  //  if (totalExpenses > balance) {
  //   document.getElementById('logic-error').classList.remove('hidden')
  //   return;
  //  }
   
    const totalExpenses = software+ courses+ internet;
    const balance = income- totalExpenses;
     document.getElementById('results').classList.remove('hidden')
     document.getElementById('total-expenses').innerText=totalExpenses.toFixed(2);
     document.getElementById('balance').innerText=balance.toFixed(2);
     document.getElementById('results').classList.remove('hidden')
})

document.getElementById('calculate-savings').addEventListener('click', function(){
 
const saving = savingPercentace('savings');
const income = inputValue('income');
const software= inputValue('software');
const courses= inputValue('courses');
const   internet= inputValue('internet');
if (isNaN(saving)) {
  showError('savings-error')
  return
}


const totalExpenses = software+ courses+ internet;
const balance = income- totalExpenses;

const savingAmount = (saving*balance)/100;
const remainingBalance= balance-savingAmount;

document.getElementById('savings-amount').innerText=savingAmount. toFixed(2);
document.getElementById('remaining-balance').innerText= remainingBalance.toFixed(2);

// history

const historyItem = document.createElement('div');
historyItem.className="bg-white p-3 rounded-md border-l-2 border-indigo-500";

historyItem.innerHTML=`<p class="text-xs text-gray-500">Serial: ${count}</p>
          <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
           <p class="text-xs text-gray-500">Income: $${income}</p>
          <p class="text-xs text-gray-500">Expenses: $${ totalExpenses }</p>
          <p class="text-xs text-gray-500">Balance: $${balance }</p>
          `;
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(historyItem, historyContainer.firstChild)

})



// history tab functionality

const historyTab =document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
  historyTab.classList.add( 
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600");

    historyTab.classList.remove("text-gray-600");
    assistantTab.classList.remove(
      "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
    )
    assistantTab.classList.add("text-gray-600");
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

    
})
assistantTab.addEventListener('click', function(){
  assistantTab.classList.add( "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600");
    historyTab.classList.remove(  "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600");
      document.getElementById('expense-form').classList.remove('hidden');
      document.getElementById('history-section').classList.add('hidden')
})
