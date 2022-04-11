resetCounter();



function countWords() {
  
  var charQty = 0;
  var wordQty = 0;
  var punctuationQty = 0;
  var paragraphQty = 0;
   
  var textAreaField = document.getElementById("textArea");
  var originalText = textAreaField.value;
   
  var paragraphRemovedText = originalText.replace(/(\n\n|\r\n|\n|\r)/gm," ");
  
  var separatedChar = paragraphRemovedText.split("");
  charQty = separatedChar.length;
  
  var separatedWords = paragraphRemovedText.split(" ");
  separatedWords = separatedWords.filter(Boolean);
  wordQty = separatedWords.length;

  if (wordQty > 0) {
    
    paragraphRemovedText += " ";

    var punctuationMatch = paragraphRemovedText.match(/(\! |\? |\. )/g);

    if (punctuationMatch == null) {
      punctuationQty = 0;

    } else {
      punctuationQty = punctuationMatch.length;

      if (originalText.endsWith("\n\n")) {
        originalText += "";
        
      } else if (originalText.endsWith("\n")) {
        originalText += "\n";
        
      } else {
        originalText += "\n\n";
        
      }
      
      var separatePar = originalText.replace(/(\n\n)/g,"&^");
      separatePar = separatePar.split("&^");

      var count = [];
      for (let i=0; i < separatePar.length; i++) {
        if (separatePar[i] == "") count.push(i);

      }
      for (let i=0; i < count.length; i++) {
        separatePar.splice(count[i], 1);

      }
     
      paragraphQty = separatePar.length;
      
      var check = separatePar[separatePar.length-1];
      check = check.replace(/(\! |\? |\. |\!|\?|\.)/g,"&^");
      if (check.match(/\&\^/g) == null) paragraphQty = paragraphQty - 1;
      
    }

  }
  
  var charResultField = document.getElementById("charId");
  charResultField.innerHTML = charQty;
  
  var wordResultField = document.getElementById("wordId");
  wordResultField.innerHTML = wordQty;
  
  var sentResultField = document.getElementById("sentId");
  sentResultField.innerHTML = punctuationQty;
  
  var parResultField = document.getElementById("parId");
  parResultField.innerHTML = paragraphQty;
  
}

function resetCounter() {
  
  var textAreaField = document.getElementById("textArea");
  textAreaField.value = "";
  
  var charResultField = document.getElementById("charId");
  charResultField.innerHTML = 0;
  
  var wordResultField = document.getElementById("wordId");
  wordResultField.innerHTML = 0;
  
  var sentResultField = document.getElementById("sentId");
  sentResultField.innerHTML = 0;
  
  var parResultField = document.getElementById("parId");
  parResultField.innerHTML = 0;
  
}

function changeLanguage(countryChoice) {
  
  var title = document.getElementsByTagName("h2");
  
  var resetButton = document.getElementById("resetButton");
    
  var resultArea = document.getElementById("resultArea");
  var spans = resultArea.getElementsByTagName("span");
  
  var madeBy = document.getElementById("madeBy");
    
  if (countryChoice == "us") {
    
    title[0].innerHTML = "<span id='titleId'>Text Element Counter Tool:</span> Count characters, words, sentences and paragraphs";
    
    resetButton.innerHTML = "Reset";
    
    spans[0].innerHTML = "Characters: ";
    spans[2].innerHTML = "Words: ";
    spans[4].innerHTML = "Sentences: ";
    spans[6].innerHTML = "Paragraphs: ";
    
    madeBy.innerHTML = "made by ";
    
  } else if (countryChoice == "br") {
    
    title[0].innerHTML = "<span id='titleId'>Contador de Elementos de Texto:</span> Conta caracteres, palavras, frases e parágrafos";
    
    resetButton.innerHTML = "Redefinir";
    
    spans[0].innerHTML = "Caracteres: ";
    spans[2].innerHTML = "Palavras: ";
    spans[4].innerHTML = "Frases: ";
    spans[6].innerHTML = "Parágrafos: ";
    
    madeBy.innerHTML = "feito por ";
    
  }

}