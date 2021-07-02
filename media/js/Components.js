var QuasarStackBox = $createElement('div', {
	align: "center"
});

var QuasarStackLogo = $createElement('img', {
	src: "./media/img/QuasarStackLogo.png",
	style: "-webkit-animation: rotating 2s linear infinite; height: 40px"
});

var QuasarStackTitle = $createElement('p', {
	content: "Welcome to QuasarStackJS, click in a topic to get started",
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 20px"
});

var HotMenu = $createElement('p', {
	content: "<a href='#' onclick='Basics()'>Basics</a> | <a href='#' onclick='Manipulating()'>Manipulating Elements</a> | <a href='#' onclick='Componentization()'>Components</a> | <a href='#' onclick='Functions()'>Special Functions</a> | <a href='./media/files/QuasarStackProject.zip' download>Download Model Project</a>",
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 16px"
});



QuasarStackBox.appendChild(QuasarStackLogo);
QuasarStackBox.appendChild(QuasarStackTitle);
QuasarStackBox.appendChild(HotMenu);

newComponent(QuasarStackBox);

var Heading = [getComponent(0)];

//=======================================================================

var ArchProjectCreation = $createElement('div', {
	content: `
	<br>
	<p>
	<h2>1. Project Architecture</h2>
	</p>
	<p>
	The architecture of a QuasarStackJS project is simple and consists of an index.html, an Application.js
	and a Components.js (it can be shaped in any way, this is just the default organization).
	By default the QuasarStackJS is located in the folder "<span style='color: blue'>./media/js/</span>",
	to change this it is necessary to change the "<span style='color: blue'>rootdir</span>" variable located in the QuasarStackCore.js.
	CSS files and images and other forms of media can be stored anywhere else and need no special intervention.
	</p>
	<div align="center">
	<img src="./media/img/basics/ProjectFolder.png">
	</div>
	
	<p>
	<h2>2. Setting the project attributes</h2>
	</p>
	<p>
	In QuasarStackJS the definition of project attributes is simple and performed directly in the code using appDef(name, version, author) 
	and appIcon(iconUrl), preferably at the beginning of Application.js:
	</p>
	<div align="center">
	<img src="./media/img/basics/AppDefIcon.png">
	</div>
	
	<p>
	<h2>3. Time Watcher</h2>
	</p>
	<p>
	If you want to test how long your application takes to start you can use the <span style='color: blue'>displayTimeSinceStartup()</span>
	function right at the beginning of your Application.js.
	</p>
	`,
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 16px"
});

newComponent(ArchProjectCreation);
var ContentBasics = [getComponent(1)];

//=======================================================================

var Manipulating = $createElement('div', {
	content: `
	<br>
	<p>
	<h2>1. Element Manipulators: <span style='color: blue'>$qs() and $qsAll()</span></h2>
	</p>
	<p>
	$qs and $qsAll are QuasarStack selectors that are intended to promote fast object manipulation (similar to plugins like jquery)
	as well as other conveniences to streamline code and bring efficiency.
	</p>
	<p>
	The syntax for both is: <span style='color: blue'>[$qs|$qsAll](target, action, arguments)</span> where the first selects only the first 
	element found and the second selects all that match the assigned requirements.
	</p>
	
	<p>
	The current list of actions that the element handler can perform is:
	</p>
	<div style="border: 2px solid black; padding-left: 3%;">
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "find")</span> - Returns the element(s)
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "destroy")</span> - Destroys the targeted element(s) 
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "clear")</span> - Clear the interior the targeted element(s) 
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "update", "newContent")</span> - Updates the inside of the element(s) with new content
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "setStyle", "newStyle")</span> - Updates the CSS style of the element(s) with new content
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "addStyle", "newStyle")</span> - Add a CSS style to the element(s) [Will overwrite repeated styles]
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "color", "newColor")</span> - Updates the current element(s) context color
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "resize", "widthXheight")</span> - Resizes the element(s) using width and height
	</p>
	
	<p>
	<span style='color: blue'>[$qs|$qsAll](target, "scale", "newScale")</span> - Resizes the element(s) using scale
	</p>
	
	</div>
	
	<p>
	This image below has already been manipulated to have a smooth transition, in the text box below you can use $qs()
	on it using its identifier to execute any function, I recommend you try using "resize", it's pretty nice.
	</p>
	
	<br>
	
	<div align="center">
	<img id="MYIMG" src="./media/img/manipulator/MyIMG.png">
	
	<br><br>
	<p>
	<input id="doIt" type="text" value="$qs('#MYIMG', 'resize', '600x400')" size="44"> <button onclick="DoFunction()">Do It!</button>
	</p>
	</div>

	
	<p>
	<h2>2. Creating Dynamic Elements</h2>
	</p>
	<p>
	In QuasarStackJS you can create dynamic elements and store them in variables, they accept a type (which cannot be invalid or obsolete)
	and a dictionary of attributes that can be of any type.
	There is also the content attribute that defines what will exist inside the element (in html).
	The syntax is: <span style='color: blue'>$createElement(type, argumentsDictionary)</span>
	</p>
	<p>
	Example of dynamic object creation:
	</p>
	<div id="myContainerDiv">
	</div>
	<p>
	This is the result of the following code:
	</p>
	<img src="./media/img/manipulator/DynamicElement.png">
	`,
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 16px"
});

newComponent(Manipulating);
var ManipulatingBasics = [getComponent(2)];

// Creation (Components.js)
var MyBeautifulDiv = $createElement('div', {
	style: "border: 2px solid red; padding: 50px",
	content: "Hello! This is my beautiful div"
});

//=======================================================================

var ComponentsE = $createElement('div', {
	content: `
	<br>
	<p>
	<h2>1. Components</h2>
	</p>
	<p>
	In QuasarStackJS components are reusable blocks that are stored in a global array and can be 
	retrieved based on their numbering (index). In the near future we will be adding special dynamic
	properties and attributes along with auto-update.
	</p>
	<p>
	You can use either dynamic element creation or pure html to create the components.
	The function syntax is <span style='color: blue'>newComponent(content, type[object/html])</span> or <span style='color: blue'>newComponent(content)</span>.
	</p>
	<div align="center">
	<img src="./media/img/components/Components.png">
	</div>
	`,
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 16px"
});

newComponent(ComponentsE);
var TheComponents = [getComponent(3)];

//=======================================================================

var FunctionsE = $createElement('div', {
	content: `
	<br>
	<p>
	<h2>1. Functions</h2>
	</p>
	<p>
	QuasarStackJS has special functions for several purposes:
	</p>
	<div style="border: 2px solid black; padding-left: 3%;">
	<p>
	<span style='color: blue'>qscom(command)</span> - Activates the QuasarStackJS internal console and allows you to use a command of list:
	<div style="border: 2px solid black; padding-left: 3%; width: 93%;">
		<p>
		<span style='color: red'>quasarstack-version</span> - Shows the current QuasarStackJS version information in console
		</p>
		<p>
		<span style='color: red'>force-full-reset</span> - Refresh the whole page and ALL the objects (same as SHIFT + F5)
		</p>
		<p>
		<span style='color: red'>force-reset</span> - Refresh the page and ALL the objects
		</p>
		<p>
		<span style='color: red'>app-info</span> - Shows the current application version info
		</p>
		<p>
		<span style='color: red'>disable-zoom</span> - Disable the zoom option in application [!]
		</p>
	</div>
	</p>
	<p>
	<span style='color: blue'>responsivityCheck()</span> - Detects if there has been a big change in the viewport and if so calls a reload for the page
	</p>
	
	<p>
	<span style='color: blue'>consPrint(text, type)</span> - Write a text on the console, type can be "warn", "text" or "error"
	</p>
	
	<p>
	<span style='color: blue'>Start(stringScript)</span> - Calls an action in code from the string that can only be called once
	</p>
	
	<p>
	<span style='color: blue'>Update(loopInterval, stringScript)</span> - Calls a code from the string that happens after the initial timeout and loops again
	</p>
	
	<p>
	<span style='color: blue'>numFilter(content)</span> - Returns only numbers of a STRING
	</p>
	
	<p>
	<span style='color: blue'>numRemove(content)</span> - Returns only NaN of a STRING
	</p>
	
	<p>
	<span style='color: blue'>$domJump(object, objectIndex, plusPixels, minusPixels)</span> - Select an object and scroll the page to it [!]
	</p>
	<span style='color: blue'>$domGo(object, objectIndex, plusPixels, minusPixels)</span> - Same as the previous one (But not smooth by default)
	</p>
	</div>
	`,
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 16px"
});

newComponent(FunctionsE);
var TheFunctions = [getComponent(4)];