function generate(){
  let site=document.getElementById('site').value;
  let url=document.getElementById('url').value;
  let title=document.getElementById('title').value;
  let desc=document.getElementById('desc').value;
  let keywords=document.getElementById('keywords').value;
  let image=document.getElementById('image').value;

  let code=`<title>${title} | ${site}</title>
<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${image}">`;

  document.getElementById('output').innerText=code;
}

function copy(){
  let text=document.getElementById('output').innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}