appDef("QSJS Application", "0.0", "Default");
appIcon("./media/img/QuasarStackLogo.ico");

FinalPackage.forEach(function(i) {
	applicationScreen.appendChild(i);
});