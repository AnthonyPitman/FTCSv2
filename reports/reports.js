function change_src() {
	var reportvalue = document.getElementById("reports").value;
	//alert(reportvalue);
	document.getElementById("isrc").setAttribute("src", reportvalue);
	//var sources = document.getElementByTagName("IFRAME")[0].src;
	//alert(sources);
}
function change_src2() {
    var reportvalue = document.getElementById("datalists").value;
    document.getElementById("isrc").setAttribute("src", reportvalue);
}