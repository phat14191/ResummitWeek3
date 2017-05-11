//user Interface Logic
$(document).ready(function() {
  console.log("ready");
  $("#userInput").submit(function(event){
    console.log("submit");
    var userNumber = $("input#userNumber").val();
    console.log("userNumber: " + userNumber);
    var evenNumber = parseInt(userNumber);
    console.log("evenNumber: " + evenNumber);
    var allEvenNumbers = callNumber(evenNumber);
    console.log(allEvenNumbers);
    SumAllEvenNumber(allEvenNumbers);
    event.preventDefault();
  });
});

// Business Logic
var input = [];
var result = [];
var callNumber = function(evenNumber) {

  for(i = 1; i <= evenNumber; i++) {
    if(i%2 === 0) {
      result.push(i);
      console.log(result);
    }
  }
  $("#output").append('<li>' + result + '</li>')
  return(result);
};


  var SumAllEvenNumber = function(array){
    var sum = 0;
    for(i=0 ; i<array.length; i++){
      sum = sum +array[i];
      console.log(sum);
    }
    console.log(sum);
    $("#output").append('<li>' + sum + '</li>');
    return(sum);
  }
