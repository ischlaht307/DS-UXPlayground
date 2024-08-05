cfg.Fast;
//Called when application is started.
function OnStart()
{
myui.Theme('Light');
	//Create a layout with objects vertically centered.
	mainLay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	var txt = app.CreateText( "Hello hello helo hello")
	txt.SetTextSize( 32 )
	mainLay.AddChild( txt )
	
var menuList =  "item1 hvkuyvuiyvigvg| item2| item3|item4| item5| item6";
	var dd = myui.DropdownButton("Light", mainLay, "Dropdown menu", -1);
	dd.addItems = "items 1x sdfgsdfgsdfg";
	dd.addItems = "items 2";
	dd.addItems = "Items 3";
	dd.addItems = "items 4";
	dd.addItems = "items 5";
	dd.AddDropdownMenu;


//	dd.SetBackColor("red");
	
	
	var btn =app.CreateButton( "ptgffghg", 0.8,-1.0 )
	mainLay.AddChild(btn);
	
	app.AddLayout( mainLay )


}
app.Script("UIFactory.js");

/*-
-
-
-
-
-
-
-
-
-
-
-

-
-
-
-
-
-

*/