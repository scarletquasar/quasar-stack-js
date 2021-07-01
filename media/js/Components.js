var QuasarStackBox = $createElement('div', {
	align: "center"
});

var QuasarStackLogo = $createElement('img', {
	src: "./media/img/QuasarStackLogo.png",
	style: "-webkit-animation: rotating 2s linear infinite; height: 40px"
});

var QuasarStackTitle = $createElement('p', {
	content: "Welcome to QuasarStackJS, insert a cool page here!",
	style: "font-family: Helvetica, sans-serif; font-weight: bold; font-size: 20px"
});

QuasarStackBox.appendChild(QuasarStackLogo);
QuasarStackBox.appendChild(QuasarStackTitle);

newComponent(QuasarStackBox);

var FinalPackage = [getComponent(0)];