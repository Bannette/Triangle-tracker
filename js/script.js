function typeOfTriangle(){

	var side1= document.querySelector('#side1').value;
	var side2= document.querySelector('#side2').value;
	var side3= document.querySelector('#side3').value;	
    
    var answer=document.querySelector('#answer')

    if (side1 > 0 && side2 > 0 && side3 > 0) {

      if (side1 === side2 && side2 === side3) {
        window.alert("EQUILATERAL TRIANGLE!!");
        answer.innerHTML='EQUILATERAL TRIANGLE!!';
      }
      else if (side1 === side2 || side1 === side3 || side2 === side3) {
        window.alert("ISOSCELES TRIANGLE!!");
        answer.innerHTML='ISOSCLES TRIANGLE!!';
      } 
    
      else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        window.alert("IT'S A SCALENE!!");
        answer.innerHTML='SCALENE TRIANGLE!!';
      }
    
    }
     else {
         (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1))
        window.alert("Insert a number greater than zero, values cannot make a triangle");
      answer.innerHTML='VALUES CANNOT MAKE A TRIANGLE!!';
    }
  }
  function refresh(){
      location.reload();
  }