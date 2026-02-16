<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MetaTag Pro – Premium</title>
<style>
body {
  margin:0;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:#0f172a;
  color:#f3f4f6;
}
.container {
  max-width:900px;
  margin:40px auto;
  background:#1e293b;
  padding:30px;
  border-radius:12px;
  box-shadow:0 8px 25px rgba(0,0,0,.4);
}
h1,h2{margin-bottom:20px;}
label{display:block;margin:10px 0 5px;color:#9ca3af;font-size:14px;}
input,textarea{
  width:100%;padding:10px;margin-bottom:15px;
  border-radius:8px;border:1px solid #334155;
  background:#0f172a;color:#fff;font-size:14px;
}
textarea{min-height:80px;resize:vertical;}
button{
  background:#2563eb;
  border:none;
  padding:10px 15px;
  border-radius:8px;
  color:#fff;
  cursor:pointer;
  font-weight:600;
  margin-right:10px;
}
button:hover{opacity:.85;}
.preview{
  background:#111827;
  color:#fff;
  padding:15px;
  border-radius:8px;
  margin-top:20px;
  font-family:monospace;
  white-space:pre-wrap;
  border:1px solid #334155;
}
.demo-button{
  background:#d63384;
  margin-top:10px;
}
</style>
</head>
<body>

<div class="container">
  <h1>MetaTag Pro – Premium Generator</h1>
  <p>Safe Mode untuk Blogger & Website. Generate meta tags, Open Graph, Twitter Card, lalu copy ke clipboard.</p>

  <button class="demo-button" onclick="window.open('https://tuanbaguestools.blogspot.com/p/metatag-pro-generator.html?m=1','_blank')">Demo Blogspot</button>

  <h2>Meta Tag Inputs</h2>

  <label>Website Name</label>
  <input type="text" id="site" placeholder="Example: My Website">

  <label>Page URL</label>
  <input type="text" id="url" placeholder="https://example.com/page">

  <label>Title (max 60 characters)</label>
  <input type="text" id="title" maxlength="60" oninput="updatePreview()">

  <label>Description (max 160 characters)</label>
  <textarea id="desc" maxlength="160" oninput="updatePreview()"></textarea>

  <label>Keywords (comma separated)</label>
  <input type="text" id="keywords">

  <label>Image URL (for Open Graph)</label>
  <input type="text" id="image">

  <button onclick="generateMeta()">Generate</button>
  <button onclick="copyMeta()">Copy</button>

  <div class="preview" id="output">Generated meta tags will appear here...</div>
</div>

<script>
function updatePreview(){
  let title=document.getElementById('title').value;
  let desc=document.getElementById('desc').value;
  let url=document.getElementById('url').value;
}

function generateMeta(){
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
<meta property="og:title" content="${title} | ${site}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title} | ${site}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${image}">`;

  document.getElementById('output').innerText=code;
}

function copyMeta(){
  let text=document.getElementById('output').innerText;
  navigator.clipboard.writeText(text).then(()=>{
    alert("Meta tags copied to clipboard!");
  });
}
</script>

</body>
</html>
