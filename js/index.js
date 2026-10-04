// get input value by id function 

function GetInputValueById (id){
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

// toggleButton State 
function toggleButton(activeBtn , inactiveBtn){
  activeBtn.classList.add( "rounded-l-md", "focus:outline-none", "transition-colors" , "duration-200", "text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600")
  activeBtn.classList.remove( "rounded-r-md" ,"focus:outline-none", "transition-colors", "duration-200", "text-gray-600" ,"font-semibold")

  inactiveBtn.classList.add( "rounded-r-md" ,"focus:outline-none", "transition-colors", "duration-200", "text-gray-600" ,"font-semibold");
  inactiveBtn.classList.remove( "rounded-l-md", "focus:outline-none", "transition-colors" , "duration-200", "text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600")
}

function toggleSection (showSection  , hideSection){
  showSection.classList.remove("hidden")
  hideSection.classList.add("hidden")
}

const assistantBtn = document.getElementById("assistant-tab");
const historyBtn = document.getElementById("history-tab");

const expenseSection = document.getElementById('expense-form');
const historySection = document.getElementById('history-section');

assistantBtn.addEventListener('click',function(){
  toggleButton(assistantBtn,historyBtn);
  toggleSection(expenseSection,historySection);
})

historyBtn.addEventListener('click',function(){
  toggleButton(historyBtn,assistantBtn);
  toggleSection(historySection,expenseSection);
})

// calculate btn 

const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener('click',function(){
   const income = GetInputValueById('income');
   const software = GetInputValueById('software');
   const course = GetInputValueById('course');
   const internet = GetInputValueById('internet');
   
   if(income <=0 || isNaN (income)){
    document.getElementById('income-error').classList.remove('hidden');
    return;
   }
   if(software <=0 || isNaN (software)){
    document.getElementById('Software-error').classList.remove('hidden');
    return;
   }
   if(course <=0 || isNaN (course)){
    document.getElementById('course-error').classList.remove('hidden');
    return;
   }
   if(internet <=0 || isNaN (internet)){
    document.getElementById('internet-error').classList.remove('hidden');
    return;
   }
  //  Total Expense 
   const totalExpense = software + course + internet;
   if(totalExpense > income){
    document.getElementById('logic-error').classList.remove('hidden');
    return;
   }
   const TotalExpense = document.getElementById('total-expenses');
   TotalExpense.innerText = totalExpense.toFixed(2);
   
    // Balance 
     const Balance = income - totalExpense;
    const balance = document.getElementById('balance');
    balance.innerText = Balance.toFixed(2);

   const result = document.getElementById('results');
   toggleSection(result);


   
})

// Saving button  

const SavingsBtn = document.getElementById('calculate-Savings');
SavingsBtn.addEventListener('click',function(){
 
   const income = GetInputValueById('income');
   const software = GetInputValueById('software');
   const course = GetInputValueById('course');
   const internet = GetInputValueById('internet');
   const savings = GetInputValueById('savings');

   if(income <=0 || isNaN (income)){
    document.getElementById('income-error').classList.remove('hidden');
    return;
   }
   if(software <=0 || isNaN (software)){
    document.getElementById('Software-error').classList.remove('hidden');
    return;
   }
   if(course <=0 || isNaN (course)){
    document.getElementById('course-error').classList.remove('hidden');
    return;
   }
   if(internet <=0 || isNaN (internet)){
    document.getElementById('internet-error').classList.remove('hidden');
    return;
   }
   if(savings <=0 || isNaN (savings)){
    document.getElementById('saving-error').classList.remove('hidden');
    return;
   }
   const totalExpense = software + course + internet;
    if(totalExpense > income){
    document.getElementById('logic-error').classList.remove('hidden');
    return;
   }
   const TotalExpense = document.getElementById('total-expenses');
   TotalExpense.innerText = totalExpense.toFixed(2);
   
    // Balance 
     const Balance = income - totalExpense;
    const balance = document.getElementById('balance');
    balance.innerText = Balance.toFixed(2);

  const SavingAmount = Balance * savings  / 100;
  
  const saveAmoount = document.getElementById('savings-amount');
  saveAmoount.innerText = SavingAmount.toFixed(2);

  // Remainning Balance 
  const RemainingBalance = Balance - SavingAmount;
  const remaining = document.getElementById('remaining-balance');
  remaining.innerText = RemainingBalance.toFixed(2);


  const div = document.createElement('div');
div.className = "bg-white border-l-2 border-indigo-500 p-2 rounded-md"
div.innerHTML = `

 <p class="text-gray-500 text-xs">${new Date().toLocaleDateString()} </p>
  <p class="text-gray-500 text-xs"> Income : ${income.toFixed(2)} </p>
  <p class="text-gray-500 text-xs"> Total Expense : ${totalExpense.toFixed(2)} </p>
  <p class="text-gray-500 text-xs"> Balance : ${Balance.toFixed(2)} </p>
`
const historyContainer = document.getElementById('history-list');
historyContainer.insertBefore(div , historyContainer.firstChild )

})


// Instant validation error 

document.getElementById('income').addEventListener('input',function(){
  const inputValue = GetInputValueById('income');
  if(isNaN(inputValue) || inputValue <= 0){
    document.getElementById('income-error').classList.remove('hidden');
    return;
  }
})
