let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let tabs = document.getElementsByClassName("tab");
let content = document.getElementsByClassName("content");

tab1.addEventListener("click", function(){setContent("tab1", "content1")});
tab2.addEventListener("click", function(){setContent("tab2", "content2")});
tab3.addEventListener("click", function(){setContent("tab3", "content3")});


function setContent(tabName, contentName) {
	//remove active class from all tabs
	for (i = 0; i < tabs.length; i++) {
		tabs[i].className = tabs[i].className.replace("active", "");
	}
	//remove active class from all content
	for (i = 0; i < content.length; i++) {
		content[i].className = content[i].className.replace("active", "");
	}
	//find tab and content and add class active
	document.getElementById(tabName).setAttribute("class", "tab active");
	document.getElementById(contentName).setAttribute("class", "content active");
	
}