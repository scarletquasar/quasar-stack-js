// QuasarStackJS 0.0.1 ALPHA [07/2021] (c) 2021 Kayky Vitor Cruz
// This code is licensed under MIT license (see LICENSE.txt for details)

/* =====================================================================

QuasarStackJS Setup Session - The following information is extremely important
 for the correct functioning of the framework, change them if it is extremely necessary.
 
===================================================================== */

// System Variables
var rootdir = "./media/js/"; // => QuasarStackJS + Project Root Directory
var quasarStackTMR_S = performance.now(); // => Starting the time counter to performance analysis
var quasarStackJS_FBN= "QuasarStackJS"; // => QuasarStackJS Current Title
var quasarStackJS_FVN = [0, 0, 1, 0]; // => QuasarStackJS Current Version
var quasarStackJS_SM = ""; // => QuasarStackJS Startup Message
var startupTime = 0; // => A variable used by displayTimeSinceStartup()
var d = document;
var w = window;

// Environment Variables
var applicationDef = ['quasarStack Default AppName', '0.0.1', 'default'];
var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var applicationScreen = d.getElementById('applicationScreen');
var startupWidth = w.innerWidth;
var currentRenderedIndex = 0;
var currentTitle = null;
var lastLoadedPage = [];
var components = [];



consPrint("Initializing " + quasarStackJS_FBN + " - Version " + quasarStackJS_FVN, type = "text");
if (quasarStackJS_SM != "") { consPrint(quasarStackJS_SM, type = "warn"); }

/* =====================================================================

Application Setup Session - Items in this section are used to define the 
behavior of the application.
 
===================================================================== */

// App Definition
function appDef(appName, appVersion, appAuthor) {
	document.title = appName;
	applicationDef = [appName, appVersion, appAuthor];
}

function appIcon(target) {
	let link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.getElementsByTagName('head')[0].appendChild(link);
		}
	link.href = target;
}

// App Performance
function displayTimeSinceStartup()
{
	startupTime = (performance.now() - quasarStackTMR_S) / 1000;
	let warn = "";
	let i_type = "text";
	
	if(startupTime > 1) {
		warn = "[Warning: The loading time is higher than expected and may result from performance issues that will interfere with the final experience]";
		i_type = "warn";
	}
	
	consPrint("QuasarStackJS > Time since initial startup: " + Math.round(startupTime * 100) / 100 + " seconds " + warn, i_type);
}

/* =====================================================================

QuasarStackJS Heart - Here most of the framework's utilities are defined, 
console, DOM handler and other features
 
===================================================================== */

//QuasarStackJS Build-in console/command shortcut system

function qscom(command) {
	switch(command) {
		/* quasarStack related commands */
		case "quasarstack-version": // Shows the current quasarstack version info
		consPrint("QuasarStackJS > " + quasarStackJS_FBN + " - " + quasarStackJS_FVN[0] + "." + quasarStackJS_FVN[1] + "." + quasarStackJS_FVN[2] + "." + quasarStackJS_FVN[3]);
		break;
		
		case "force-full-reset": //Refresh the whole page and ALL the objects (same as SHIFT + F5)
		w.location.href = w.location.href;
		break;
		
		case "force-reset": //Refresh the page and ALL the objects
		location.reload();
		break;
		
		/* Application related commands */
		case "app-info": // Shows the current application version info
		consPrint("QuasarStackJS > " + applicationDef[0] + " - " + applicationDef[1] + " - " + applicationDef[2]);
		break;
		
		case "disable-zoom": //Disable the zoom option in application [*]
		d.body.addEventListener("wheel", e=>{
			if(e.ctrlKey)
			e.preventDefault();
		}, { passive: false });
		break;
		
		/* Defaults */
		default:
		consPrint('QuasarStackJS > Error: The command "' + command + '" doesn\'t exist', type = "error");
		break;
	}
}

//Misc Components

/* responsivityCheck() checks if there has been a major change in the proportions of the 
current screen and calls a reload on the page in order to differentiate versions and 
components of the same application for different screens */
async function responsivityCheck(interval) {
  await new Promise(r => setTimeout(r, interval));
  
  if (w.innerWidth != startupWidth) {
	  qscom('force-reset');
  }
  
  responsivityCheck(interval);
}

function consPrint(text, type = "text") {
	switch(type) {
		case "error":
		console.error(text);
		break;
		
		case "warn":
		console.warn(text);
		break;
		
		case "text":
		console.log(text);
		break;
	}
}

//Componentization

function newComponent(content, type = "object") {
	switch (type) {
		case "object":
		components.push(content);
		break;
		
		case "html":
		let dm = new DOMParser().parseFromString(content, "text/html");
		components.push(dm.documentElement);
		break;
		
	}
}

function getComponent(index) {
	return components[index];
}

function applyComponent(index, object) {
	object.appendChild(components[index]);
}

// Time-based functions

var startedTimer = false;

function Start(todo) {
	if (!startedTimer) {
		startedTimer = true;
		eval(todo);
	}
	else {
		consPrint("QuasarStackJS > Error, the Start function can only be used one time", "error");
	}
}

async function Update(todo, interval) {
  await new Promise(r => setTimeout(r, interval));
  eval(todo);
  Update(todo, interval);
}

// Data validators/parsers

function numFilter(content) { //Keep only numbers of a STRING
	let finalContent = "";
	
	try {
		let parsedContent = content.toString();
		for (let i = 0; i < parsedContent.length; i++) {
			if (numList.includes(parsedContent.charAt(i))) {
			finalContent += parsedContent.charAt(i);
			}
		}
	} catch (e) {
		consPrint("QuasarStackJS > " + e, "error");
	}
	
	return finalContent;
}

function numRemove(content) { //Keep only NaN of a STRING
	let finalContent = "";
	
	try {
		let parsedContent = content.toString();
		for (var i = 0; i < parsedContent.length; i++) {
			if (!numList.includes(parsedContent.charAt(i))) {
			finalContent += parsedContent.charAt(i);
			}
		}
	} catch (e) {
		consPrint("QuasarStackJS > " + e, "error");
	}
	
	return finalContent;
}

/*==============================================================================================================================*/

var htmlDictionary = [
'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption',
'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend',
'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 'o', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress',
'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody',
'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'
];

var enableVirtualization = true; //Virtualization mitigates direct changes to the DOM by making a comparison between new data and previous data before taking action
var userScrollingEvent = false;

document.onmousewheel = function() { userScrollingEvent = true; };

Update("userScrollingEvent = false", 100);

function $qsVirtualization(bool) {
	if (bool) { enableVirtualization = true; }
	if (!bool) { enableVirtualization = false; }
}

//=====
function $qs(object, action, argument = "0") {
	switch (action) {
		case "destroy":
		$domDestroy(d.querySelector(object));
		break;
		
		case "clear":
		d.querySelector(object).innerHTML = "";
		break;
		
		case "update":
		if (enableVirtualization) {
			let objContent = d.querySelector(object).innerHTML;
			if (!$qs_compare(objContent, argument)) {
				d.querySelector(object).innerHTML = argument;
			}
		}
		else {
			d.querySelector(object).innerHTML = argument;
		}
		break;
		
		case "find":
		return d.querySelector(object);
		break;
		
		case "setStyle":
		d.querySelector(object).style.cssText = argument;
		break;
		
		case "addStyle":
		d.querySelector(object).style.cssText += argument;
		break;
		
		case "color":
		d.querySelector(object).style.color = argument;
		break;
		
		case "resize":
		$domResize(d.querySelector(object), argument);
		break;
		
		case "scale":
			object.qsScale = argument;
			$qs(object, 'addStyle', 'transform: scale(' + argument + ');');
		break;
	}
}

function $qsAll(object, action, argument = "0") {
		switch (action) {
		case "destroy":
		d.querySelectorAll(object).forEach(function (i) {
			$domDestroy(i);
		});
		break;

		case "clear":
		d.querySelectorAll(object).forEach(function (i) {
			i.innerHTML = "";
		});
		
		case "update":
		if (enableVirtualization) {
			d.querySelectorAll(object).forEach(function (i) {
				let objContent = i.innerHTML;
				if (!$qs_compare(objContent, argument)) {
					i.innerHTML = argument;
				}
			});
		}
		else {
			d.querySelectorAll(object).forEach(function (i) {
				i.innerHTML = argument;
			});
		}
		break;
		
		case "find":
		return d.querySelectorAll(object);
		break;
		

		case "setStyle":
		d.querySelectorAll(object).forEach(function (i) {
			i.style.cssText = argument;
		});
		
		case "addStyle":
		d.querySelectorAll(object).forEach(function (i) {
			i.style.cssText += argument;
		});
		
		case "color":
		d.querySelectorAll(object).forEach(function (i) {
			i.style.color = argument;
		});
		
		case "resize":
		d.querySelectorAll(object).forEach(function (i) {
			$domResize(i, argument);
		});
		break;
		
		case "scale":
		$qsAll(object, 'find').forEach(function(i) {
			i.qsScale = argument;
		});
		$qsAll(object, 'addStyle', 'transform: scale(' + argument + ');');
		break;
	}
}
//=====

/*  TODO::
dcom (Dynamic Component) renders the selected component or variable in a div and performs a dynamic
update that checks if the object in question has had changes and performs them in real time.

obj => The object to be rendered
target => The target object
updateTime => The checkup frequence
args => DOM (HTML) args to be added in the object


Example: $dcom(getComponent(0), , 250, "style='color: blue'")
*/

function $createElement(objType, propObj) {
	let finalElement;
	
	if (htmlDictionary.includes(objType)) {
		finalElement = d.createElement(objType);
		Object.keys(propObj).forEach(function (i) {
			if (i == 'content') {
				finalElement.innerHTML = propObj[i];
			}
			else {
				finalElement.setAttribute(i, propObj[i]);
			}
		});
	}
	else {
		consPrint("QuasarStackDOM > The parameters entered do not refer to a valid html or it has been discontinued. | Line [" + _dbgCurrentLine() + "]", "error");
	}
	
	return finalElement;
}

function $domResize(object, args) {
	var divisoryq = 0;
	var args_arr;
	
	for (var i = 0; i < args.length; i++) {
		if(args.charAt(i) == 'x' || args.charAt(i) == 'X') {
			divisoryq++;
		}
	}
	
	if (divisoryq == 1) {
		args = args.replaceAll('x', 'X');
		args_arr = args.split('X');
		object.qsWidth = args_arr[0];
		object.qsHeight = args_arr[1];
		object.style.width = numFilter(args_arr[0]) + "px";
		object.style.height = numFilter(args_arr[1]) + "px";
	}
}

async function $domJump(object, index = 0, plus = 0, minus = 0) {
    var objpos = ($qsAll(object, "find")[index].offsetTop + plus) - minus;
	
	if (document.documentElement.scrollTop < objpos && !userScrollingEvent) {
		await new Promise(r => setTimeout(r, 10));
		document.documentElement.scrollTop += (objpos  - document.documentElement.scrollTop) / 20;
		$domJump(object, index, plus, minus);
	}

}

function $domGo(object, index = 0, plus = 0, minus = 0) {
	w.scroll(0, $qsAll(object, 'find')[index].offsetTop);
}

function $domDestroy(object) {
	object.parentElement.removeChild(object);
}

function $qs_compare(oldValue, newValue) {
	if (oldValue === newValue) {
		return true;
	}
	return false;
}
