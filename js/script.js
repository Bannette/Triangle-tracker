function typeOfTriangle(){

	var side1= document.querySelector('#triangle-side1').value;
	var side2= document.querySelector('#triangle-side2').value;
	var side3= document.querySelector('#triangle-side3').value;
    

	
    var result=document.querySelector('#result')
    if (side1<=0 || side2<=0 || side3<=0)
    {
        result.innerHTML=('<h2>Value Cannot be a triangle');
        alert("check your values")
    
    }
    else if 
    (side1<=0 && side2<=0 && side3<=0)
    {
        result.innerHTML=('<h2>Value Cannot be a triangle');
        alert("values cannot make a triangle")

    }
    else if
    (side1===side2 && side2===side3 ){
    result.innerHTML=('<h2>Equilateral triangle</h2>');
    alert("Equilateral triangle ")
    
    }
    else if(side1===side2 ||side2===side3 || side1===side3){
        result.innerHTML=(' <h2>Isoseles triangle</h2>');
        alert("Isosceles triangle")
    }
    
    else if(side3 + side2 > side1 || side1 + side3 > side2 || side1 + side2 > side3){
        result.innerHTML=(' <h2>Scalene triangle</h2>');
        alert("scalene triangle")
    
    }
   else{
       (side1+side2 <= side3 || side2+side3 <= side1 || side3+side1 <= side2)
           alert("not a triangle");
       }
   }
  function refresh(){
    location.reload();
}
