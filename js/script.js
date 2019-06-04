function typeOfTriangle(){

	var side1= document.querySelector('#side1').value;
	var side2= document.querySelector('#side2').value;
	var side3= document.querySelector('#side3').value;	
    
    var result=document.querySelector('#result')
  
    var arrSide = [side1, side2, side3];

    if (side1 > 0 && side2 > 0 && side3 > 0) {
      if (side1 === side2 && side2 === side3) {
        alert("EQUILATERAL TRIANGLE!!");
      }
      else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("ISOSCELES TRIANGLE!!");
      } 
    
      else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        alert("IT'S A SCALENE!!");
      }
    
    }
     else {
         (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1))
      alert("Insert a number greater than zero, values can't make a triangle");
    }
  }