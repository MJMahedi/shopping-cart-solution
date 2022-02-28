function updateCase(isincreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value ;
    if(isincreasing){
        caseNumber =parseInt(caseNumber)  + 1;
    }else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
  const caseTotal=  document.getElementById('case-total');
  caseTotal.innerText = caseNumber*59;
}
document.getElementById('case-plus').addEventListener('click', function(){
 updateCase(true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value; */
    updateCase(false);
    // 
})