
(function () {
	
	let accordbutton = document.getElementsByClassName("accordion-front__button");
   
	for (let i = 0; i < accordbutton.length; i++) {
		accordbutton[i].addEventListener("click", function() {
		  this.classList.toggle("accordion-front__button--acive");
         
          let text = document.getElementsByClassName("accordion-front__text")[i];
		  if (text.style.maxHeight) {
			text.style.maxHeight = null;
		  } else {
			text.style.maxHeight = text.scrollHeight + "px";
		  } 
		});

        
	  }

     
	})();