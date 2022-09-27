function imgCSS(ed) {
	let code = ed.getCss(), imags;
	const local = document.location.host.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');
	const  regex = new RegExp('(http:|https:){0,1}\/\/'+local,'g');
	code = code.replace(regex,'');
	code = code.replace(/(http:|https:){0,1}\/\//g,'#');
	imags = code.match(/\("{0,1}[^#^\(]+?\.(gif|jpg|png|jpeg|tif|tiff|webp|svg|ico)"{0,1}\)/gi);
	if (imags !== null){
		imags =imags.map(function(x){ return x.replace(/\("{0,1}(.*){0,1}"\)/,'$1');});
		}
	else 
		imags =[];	
	return imags;
}
function imgHTML(){
	var imags = [];
	var src;
    
	var code = document.querySelector('.gjs-frame').contentDocument;
	code = code.getElementsByTagName('img');
	for ( var i = 0; i < code.length; i++)
		{
		src = code[i].src;
		src = src.replace(window.location.origin,'');
		if (!src.includes('http')){
		 	imags.push(src);
			}
		};

	return imags;	
}
function arrayBufferToBinary(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return binary;
};
async function readImgs(ed){
	var imgData;
	var listaImgs, imagsSet;
	var peticion, archivo;
	var content=[];
	listaImgs = imgHTML(ed).concat(imgCSS(ed));
	imagsSet = new Set(listaImgs);
	listaImgs = [...imagsSet];
	for (var i = 0; i<listaImgs.length; i++)
		{
		try{
			peticion = await fetch(listaImgs[i]);
			imgData =  await peticion.arrayBuffer();
			archivo = peticion.url.match(/[^\/\.]*\.[^\.]*$/, '$&')[0];
			content[archivo] = arrayBufferToBinary(imgData);;		
			}
		catch(e){
			console.log("error "+e.message);
			
			}
		};
	return content	
}

export { readImgs }