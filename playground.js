cfg.Fast;
//Called when application is started.
function OnStart()
{
app.Hide();
	//Create a layout with objects vertically centered.
	mainLay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	var txt = app.CreateText( "Hello hello helo hello")
	txt.SetTextSize( 32 )
	mainLay.AddChild( txt )
	
var menuList =  "item1 hvkuyvuiyvigvg| item2| item3|item4| item5| item6";
	var dd = myui.DropdownButton(mainLay, "Dropdown menu", -1);
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

setTimeout(()=>{app.Show()}, 500)
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