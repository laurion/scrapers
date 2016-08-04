people = document.querySelectorAll("._h24._h25")
var finalObjects=[];
for(var i = 0; i < people.length; i ++){ 
	peopleLink = people[i].parentNode;
	var obj={};  
	obj.name = peopleLink.innerText;
  obj.href = peopleLink.href;
  var datah = peopleLink.getAttribute("data-hovercard");
  obj.data = datah;
  obj.id = parseInt(datah.replace(/.*\?id=/g,""))
	finalObjects.push(obj)
}
finalObjects.length;
JSON.stringify(finalObjects);
