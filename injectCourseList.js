var buttons = document.getElementsByTagName('input');
var buttonHide;
var intCount=0;


function createButton(){
	var buttonId="buttonHide" + intCount;
	buttonHide = document.createElement('input');
	buttonHide.value="Hide";
	buttonHide.click="alert('hi')";
	buttonHide.type="button";
	buttonHide.id=buttonId;
	intCount++;
	buttonHide.onclick = function(){
		var trParent = $('#' + buttonId).closest('tr');
		trParent.hide();
		if(!localStorage['amuHide']){localStorage['amuHide']='';}
		localStorage['amuHide']+=trParent.find('a').attr('href') + ";";
	};
}
var intRowCount=0;
function createRow(){
	var tblUpcoming = $('#htlmTblUpcomingCourses');
	var trNew = document.createElement('tr');
	var tdNew = document.createElement('td');
	tdNew.id="tdNew" + intRowCount;
	intRowCount++;
	tblUpcoming.append(trNew);
	trNew.appendChild(tdNew);
}


for(var b = 0; b < buttons.length; b++){
	if(buttons[b].value=="Enter Classroom"){
		createButton();
		buttons[b].parentNode.appendChild(buttonHide);
	}
}
function hideRows(){
	if(localStorage['amuHide']){
		var arr = localStorage['amuHide'].split(';');
		var arrLength = arr.length;
		for (var i = 0; i < arrLength; i++) {
			//console.log(arr[i]);
			$('a[href="' + arr[i] + '"]').closest('tr').parent().closest('tr').hide();
		}
	}
}

hideRows();
createRow();
createRow();
createRow();

var boo=false;
var lnkShowAll = document.createElement('a');
lnkShowAll.id="lnkShowAll";
lnkShowAll.innerHTML='Show';
lnkShowAll.setAttribute('style', 'cursor: pointer;');
lnkShowAll.onclick=function(){
$("#htmlTblRegCourses tr").each(function( index ) {
	if(boo==false){
		$(this).show();
		$("#lnkShowAll").text("Hide");
	}else{
		//$(this).hide();
		
		$("#lnkShowAll").text("Show");
	}
});
boo=!boo;
if($("#lnkShowAll").text()=="Show"){hideRows();}
}
$('#tdNew0').append(lnkShowAll);

var lnkUnHide = document.createElement('a');
lnkUnHide.setAttribute('style', 'cursor: pointer;');
lnkUnHide.innerHTML='Unhide All';
lnkUnHide.onclick=function(){
	localStorage['amuHide']="";
	location.reload();
}
$('#tdNew1').append(lnkUnHide);

var lnkBranding=document.createElement('a');

lnkBranding.innerHTML='More From Developer';
var strBrandingPath = chrome.extension.getURL('appsFromDeveloper/appsFromDeveloper.html');
lnkBranding.href=strBrandingPath;
$('#tdNew2').append(lnkBranding);








