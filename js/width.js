function size() {
    var w = window.outerWidth;    
    var txt = "Window size: width=" + w;
    
		if (w > 705){
			document.getElementById("size").innerHTML = 'Константин Константинович Константинопольский';
		}
		if (w <= 705){
			document.getElementById("size").innerHTML = 'Константин Константинопольский';
		}
		if (w <= 590){
			document.getElementById("size").innerHTML = 'Константин Константинович';
		}
		if (w <= 550){
			document.getElementById("size").innerHTML = 'Константинопольский К. К.';
		}
}