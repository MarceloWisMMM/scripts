
var pathname = new URL(url).pathname;

console.log(pathname);


var i = 0;
var strLength = pathname.length;
 
for(i; i < strLength; i++) {

 pathname = pathname.replace("/", "");
}
console.log(pathname);

// Procura os hrefs

var tags = document.querySelectorAll('article .post-content a');
for (i = 0; i < tags.length; i++) {
        var link = tags[i].href;
		
	console.log(link);
        if (url.indexOf(link) != -1) {}
    }

