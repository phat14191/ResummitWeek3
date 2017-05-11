//user Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event){
    var evenNumber = parseInt$("input#userNumber").val();
      $("#output").appent('<li>' +  + '</li>')
    SumAllEvenNumber(callNumber(evenNumber));
    event.preventDefault();

  });
});

//Business Logic
var input = [];
var result = [];
var callNumber = function(evenNumber) {

  for(i = 1; i <= evenNumber; i++) {
    if(i%2 === 0) {
      result.push(i);
    }
  }
  return(result);
  $("#output").appent('<li>' +  + '</li>')
};

  var array= ();

  var SumAllEvenNumber = function(result){
    for(i=0 ; i<array.length; i++){
      result = result +array[i];

    }
  }
