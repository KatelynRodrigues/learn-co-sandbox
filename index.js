$(document).ready(function(){
  
  var winArray = [
    ["#0-0","#1-0","#2-0"],
    ["#0-1","#1-1","#2-1"],
    ["#0-2","#1-2","#2-2"],
    ["#0-0","#0-1","#0-2"],
    ["#1-0","#1-1","#1-2"],
    ["#2-0","#2-1","#2-2"],
    ["#0-0","#1-1","#2-2"],
    ["#0-2","#1-1","#2-0"]
    
    ]
  
  function listenForClicksOnCells(){
    $(".cell").click(markCell) //logs the cell that was clicked
  }
  
listenForClicksOnCells()  
  
  var MARK = "X"
  
  function markCell(){
    //check whether or not the cell has been marked already so you cant remark it
    if (this.innerText === ""){
      
      this.innerText = MARK
      if (playerWon(MARK) === true){
        console.log(MARK + " won the game")
      }
      
      xOro()
  }
  
  //alternates between x and o on each click
  function xOro(){
        if (MARK == "X"){
      MARK = "O"
    }
    else if (MARK == "O"){
      MARK = "X"
    }
  }
      
    }

// takes in a DOM id and checks whether its text is equal to the second argument (mark)
function elementContains(id, mark) {
  return $(id).text() === mark
}

// to be run after each turn. checks whether a given mark ('X'/'O') populates all three spots in any given win combination
function playerWon(mark) {
  for (var idx = 0; idx < winArray.length; idx++) { // for every win combination
    var winCombo = winArray[idx]
    var won = winCombo.every(id => elementContains(id, mark)) // check if elementContains returns true for every id
    if (won) return true
  }
  return false // if we got here, it means no winning combination was found and we can safely return false
}
  
})