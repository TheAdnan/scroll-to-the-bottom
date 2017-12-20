 var lastScrollHeight = 0; 
 function ScrollDown(){ 
 	var sh = document.documentElement.scrollHeight; 
 	if (sh != lastScrollHeight) { 
 		lastScrollHeight = sh; 
 		document.documentElement.scrollTop = sh; 
 	} 
 } 

 ScrollDown();