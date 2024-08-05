const myui = {}
//myui.theme("Light");
myui.theme = function(ThemeMode){
  return new UITheme("Light");
}

myui.DropdownButton = function(layout, name, size) {
   return new DropDown(myui.theme(), layout, name, size)          
}

class UITheme {
   constructor(theme_mode) {
         this._theme = theme_mode;
 
            if(this._theme === "Light" || this._theme === "Dark") {
               static color = {"btn" : "red"}
            } //IF-END
            else {
               app.Alert("Theme is Invalid");
            }

         } //CONSTRUCTOR---END

      } //-CLASS------END------END------END------END------END


class UXFactory {
   constructor(theme_mode) {
      //this._themeMode = theme_mode;
         //return this
      }
   }



class DropDown extends UXFactory {
   constructor(theme_mode, layout, name, size) {
         super(theme_mode);
         this.color = theme_mode;
         this._name = name;
         this._size = size;
         this._layout = layout;
         this._items = [];
         this._menuVisibility = false;
         this._IsActive = false;
         app.Alert(JSON.stringify(this.color));
      }
      //Getters and Setters↓↓↓
   get items() {
      return this._items;
   }
   set addItems(x) {
      this._items.push(x);
   }

   get AddDropdownMenu() {
         var dropdownlay = app.AddLayout(this._layout, "Linear",
            "Center")
            dropdownlay.SetSize(this._size,-1);
         dropdownlay.SetBackColor("#00000000")
         
         var ddtoggle = app.AddButton(dropdownlay, "[fa-angle-down]" +
            "  " + this._name, null, -1,
            "FillX, SingleLine, Custom,Bold, FontAwesome")
         ddtoggle.SetStyle("white", "lightgrey", 5, "#00000000", 0,
            0.6)
         ddtoggle.SetTextColor("#FF000000")
         ddtoggle.SetMargins(0, 0, 0, -10, "px");
         ddtoggle.SetPadding(40, 40, 40, 40, "px");
         ddtoggle.SetTextSize(24, "ps")
        // ddtoggle.SetSize( -1,-1 )

         var menulayabs = app.AddLayout(dropdownlay, "Absolute", "FillX");
         menulayabs.SetSize(-1,-1);
         var menucardlay = app.AddLayout(menulayabs, "Card", "FillX");
         menucardlay.SetCornerRadius(10)
         //menucardlay.SetPosition(0.0,0.0, 1, 0.00);
         menucardlay.SetSize(-1,0.0 )
         
         var btnlay = app.AddLayout(menucardlay, "Linear",
            "Vertical,FillX");
         btnlay.SetBackColor("#FFFFFFFF");

         let i = 0,
            len = this._items.length;
         for(i; i < len; i++) {
            let shadow = (i === len -1? 0.0 : 0.2);
            var dlist = app.AddButton(btnlay, this._items[i], -1, -1,
               "FillX, Custom")
            dlist.SetStyle("#FFFFFFFF", "#FFFFFFFF", 0, "#00000000",
               0, shadow)
            dlist.SetTextColor("#FF000000")
            dlist.SetPadding(20, 8, 20, 8, "px")
         } //END for loop
         ddtoggle.data.itemscount = len + 1;
         ddtoggle.data.name = this._name;
         ddtoggle.data.menucontainer = menulayabs
         ddtoggle.data.menu = menucardlay;
         ddtoggle.SetOnTouch(this.ToggleDropdown)
    
     

      } //AddDropdown-----END---END
     
   ToggleDropdown(data) {
         if(this._IsActive) {
            return;
         } else {
            this._IsActive = true;
            let target = {};
            target.h = (this._menuVisibility ? 0.0 : 0.045* this.data .itemscount);
            target.animation = "Quadratic";
            this.data.menu.Tween(target, 1000, target.animation +
               ".Out", null, false, () => {
                  this._menuVisibility = !this._menuVisibility;
                  this._IsActive = false;
               }
            )
         }
         /*if(this.data.menu.IsVisible())this.data.menu.Animate("SlideToTop", ()=> {
                 this.SetText("[fa-angle-up]"+"  "+this.data.name );
                  this.data.menu.Gone();
          }, 600);
          else	this.data.menu.Animate("SlideFromTop", ()=> {
                  this.SetText("[fa-angle-down]"+"  "+this.data.name);
                 
          }, 600);*/
      } //ToggleDropdown----END------END
}



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///
//
//
///
///
///
//
/*
//class DropDown extends uif{
    constructor(mode, layout, name,  size){
        super(mode);
            this._name = name;
            this._size = size;
            this._layout = layout;
            this._items = []; 
           // this.wid = btnLay.GetWidth();
              //this.AddDropdown();
        }
        //Getters and Setters↓↓↓
        get items(){
           return this._items;
        }
       set addItems(x){
           this._items.push(x);
        }
        AddDropdown(){
          var dropdownlay = app.AddLayout(this._layout, "Linear", "Center")
        	        dropdownlay.SetSize(-1, -1 );
        	        dropdownlay.SetBackColor( "#00000000" )
        	        
        		   var ddtoggle = app.AddButton(dropdownlay, "[fa-angle-down]"+"  "+this._name,-1,-1, "FillX, SingleLine, Custom, FontAwesome")
                       ddtoggle.SetStyle("white","lightgrey", 5, "#00000000",0,0.6  )
                       ddtoggle.SetTextColor( "#FF000000" )
                       ddtoggle.SetMargins(0,0,0,0);
                       ddtoggle.SetPadding(40,40,40,40,"px");
                       ddtoggle.SetTextSize( 24, "ps" )
                       
                       var wid = ddtoggle.GetWidth();
                       app.Alert( wid )
                     var menulayabs = app.AddLayout(dropdownlay, "Absolute", "FillXY");
                     var menucardlay= app.AddLayout(menulayabs, "Card", "FillX");
                             
                             menucardlay.SetCornerRadius( 10 )
                             menucardlay.SetPadding(0,0,0,0 )
                         
                        // menucardlay.Animate("SlideToTop", null, 0);
                          //menulayabs.Gone();
                         var btnlay = app.AddLayout(menucardlay, "Linear", "Vertical,FillX" );
                                 btnlay.SetBackColor( "#FFFFFFFF" );
                                 //menucardlay.SetPosition(0,0,500,1000, "px")
                         
                       let i = 0,  len = this._items.length;
                          for(i; i<len; i++){
                        			    var dlist = app.AddButton(btnlay, this._items[i], -1, -1, "FillX, Custom" )
                        			            dlist.SetStyle("#FFFFFFFF", "#FFFFFFFF",0,"#00000000",0,0.2 )
                        			            dlist.SetTextColor( "#FF000000" )
                        			           dlist.SetPadding( 20,8,20,8, "px")
                        			           dlist.SetMargins(-10,-14,-10,0, "px")
                        }//END for loop
                        
                           ddtoggle.data.name = this._name;
                           ddtoggle.data.menucontainer = menulayabs
                           ddtoggle.data.menu = menucardlay;
                          ddtoggle.SetOnTouch( this.ToggleDropdown )
                       
                          return this;;
                      
        }//AddDropdown-----END---END
         ToggleDropdown(data){
         let target = {x:0,y:0,w:null,h:0.06}
         //this.data.menu.Tween()
         
         if(this.data.menu.IsVisible())this.data.menu.Animate("SlideToTop", ()=> {
                 this.SetText("[fa-angle-up]"+"  "+this.data.name );
                  this.data.menucontainer.Gone();
          }, 600);
          else	this.data.menu.Animate("SlideFromTop", ()=> {
                  this.SetText("[fa-angle-down]"+"  "+this.data.name);
                 
          }, 600);
         }//ToggleDropdown----END------END
}
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///
//
//