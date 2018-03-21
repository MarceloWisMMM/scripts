

var pathnameurl = new URL(url).pathname;

//console.log(pathname);


var i = 0;
var strLength = pathnameurl.length;
 
for(i; i < strLength; i++) {

 pathnameurl = pathnameurl.replace("/", "");
}
//console.log(pathname);

// Procura os hrefs

var tags = document.querySelectorAll('article .post-content a');
for (i = 0; i < tags.length; i++) {
  var link = tags[i].href+"?utm_campaign=mcmc-"+pathnameurl;
   
     tags[i].href = link;
		
		
//	console.log(link);
        if (url.indexOf(link) != -1) {}
    }



