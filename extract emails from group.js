var a = document.getElementsByClassName("fsl fwb fcb");
var emails = "";
for(var i=0;i<a.length;i++) {
  var s = a[i].children[0].href;
  s = s.replace(/.*facebook\.com\//i,"");
  s = s.replace(/\?.*/i,"");
  if(s!="profile.php"){
    emails += (s + "@facebook.com") + '\n';
  }
}
