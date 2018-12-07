const red = document.getElementsByTagName('tr');
   for(var r of red){
 	r.addEventListener('click', () => {
 		window.location = 'index.html'
 	});
 }