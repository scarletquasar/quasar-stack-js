appDef("QSJS Application", "0.0", "Default");
appIcon("./media/img/QuasarStackLogo.ico");


function GotoPage(page) {
	switch(page) {
		case "elementsMan":
		break;
	}
}

Heading.forEach(function(i) {
	$qs('#applicationHeader', 'find').appendChild(i);
});

function Basics() {
	$qs('#applicationScreen', 'clear');
	
	ContentBasics.forEach(function(i) {
		$qs('#applicationScreen', 'find').appendChild(i);
	});
}

function Manipulating() {
	$qs('#applicationScreen', 'clear');

	ManipulatingBasics.forEach(function(i) {
		$qs('#applicationScreen', 'find').appendChild(i);
	});
	
	$qs('#MYIMG', 'resize', '400x200');
	//Insertion (Application.js)
	$qs('#myContainerDiv', 'find').appendChild(MyBeautifulDiv);
}

function Componentization() {
	$qs('#applicationScreen', 'clear');

	TheComponents.forEach(function(i) {
		$qs('#applicationScreen', 'find').appendChild(i);
	});

}

function Functions() {
	$qs('#applicationScreen', 'clear');

	TheFunctions.forEach(function(i) {
		$qs('#applicationScreen', 'find').appendChild(i);
	});

}

function DoFunction() {
	eval($qs('#doIt', 'find').value);
}

Basics();

