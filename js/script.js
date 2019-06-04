function typeOfTriangle(){

	var side1= document.querySelector('#triangle-side1').value;
	var side2= document.querySelector('#triangle-side2').value;
	var side3= document.querySelector('#triangle-side3').value;
	var answer=document.querySelector('#answer');

	// console.log('clickes')
	if (side1==side2 && side2==side3){
		console.log('equal')
		 window.alert('equilateral')
		answer.innerHTML = 'equilateral'
    }
    
}