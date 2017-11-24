let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let tabs = document.getElementsByClassName("tab");
let content = document.getElementsByClassName("content");

tab1.addEventListener("click", setContent("tab1", "content1"));
tab2.addEventListener("click", setContent("tab2", "content2"));
tab3.addEventListener("click", setContent("tab3", "content3"));


function setContent(tabName, contentName) {
	for (i = 0; i < tabs.length; i++) {
		tabs[i].className = tabs[i].className.replace(" active", "");
	}

	for (i = 0; i < content.length; i++) {
		content[i].className = content[i].className.replace(" active", "");
	}
	document.getElementById(tabName).setAttribute("class", " active");
	document.getElementById(contentName).setAttribute("class", " active");
}