'use strict'
const myui = {}
myui.theme = "Light";
myui.DropdownButton = function(layout, name, size) {
   return new DropDown(myui.theme, layout, name, size)
}

class UITheme {
   constructor(theme_mode) {
         this._theme = theme_mode;
         this._colors = {
            "base": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "window": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "accent": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "utility": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "error": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "text": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : ""),
               "head": (this._theme === "Light" ? "" : ""),
               "sub": (this._theme === "Light" ? "" : ""),
            },
            "icon": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "grad": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "accent": {
               "1": (this._theme === "Light" ? "" : ""),
               "2": (this._theme === "Light" ? "" : "")
            },
            "text": (this._theme === "Light" ? "" : ""),
            "extra": (this._theme === "Light" ? "" : ""),
            "secondary": (this._theme === "Light" ? "" : ""),
            "secondary": (this._theme === "Light" ? "" : ""),
         }
         this.dims = {
           "text" : {
             "tiny": 14,
             "small" : 18,
             "medium" : 24,
             "large" : 30 ,
             "head": 50
           }
         }
        //# if(this._theme === "Light" || this._theme === "Dark") {} //IF-END

      } //CONSTRUCTOR---END
   get theme() {
      return this._theme;
   }
   set theme(x) {
      this._theme = x;
   }
   get color() {
      return {
         "btn": "red",
      }
   }
} //-CLASS------END------END------END------END------END

class DropDown extends UITheme {
   constructor(theme_mode, layout, name, size) {
         super(theme_mode);
         this._name = name;
         this._size = size;
         this._layout = layout;
         this._items = [];
         this._menuVisibility = false;
         this._IsActive = false;
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
         dropdownlay.SetSize(this._size, -1);
         dropdownlay.SetBackColor("00000000")
         dropdownlay.SetPadding(0,0,0,0,"px");
         dropdownlay.SetChildMargins( 0,0,0,0,"px" );

         var ddtoggle = app.AddButton(dropdownlay, "[fa-angle-down]" +
            "  " + this._name, -1, -1,
            "FillXY, SingleLine, Custom,Bold, FontAwesome")
         ddtoggle.SetStyle("white", "lightgrey", 8, null, 0,
            0.4)
         ddtoggle.SetTextColor("#FF000000");
         ddtoggle.SetMargins(-9,0,-9, 0, "px");
         ddtoggle.SetPadding(40, 0, 40, 0, "px");
         ddtoggle.SetTextSize(24, "ps");

         var menulayabs = app.AddLayout(dropdownlay, "Absolute",
            "FillX");
         var menucardlay = app.AddLayout(menulayabs, "Card",
            "FillX");
         menucardlay.SetCornerRadius(10)
         menucardlay.SetElevation(10);

         menucardlay.SetPadding(0, 0, 0, 0, "px");
         menucardlay.SetMargins(0,0,0,0, "px");

         var btnlay = app.AddLayout(menucardlay, "Linear",
            "Vertical,FillX");
         btnlay.SetPadding(0, 0, 0, 0, "px");
         btnlay.SetBackColor("#FFFFFFFF")
         let i = 0;
         let len = this._items.length;
         for(i; i < len; i++) {
            let shadow = (i === len - 1 ? 0.2 : 0.2);
            var dlist = app.AddButton(btnlay, this._items[i], -1, 0.04,
               "FillX, Custom")
            dlist.SetStyle("#FFFFFFFF", "#FFFFFFFF", 10, null,
               0, shadow)
               dlist.SetTextSize(18, "ps")
            dlist.SetTextColor("#FF000000")
            dlist.SetPadding(0, 0, 0, 0, "px")
            dlist.SetMargins(-8, 0,-8, 0, "px");
         } //END for loop
         ddtoggle.data.btnwidth = btnlay.GetWidth();
         ddtoggle.data.itemscount = len;
         ddtoggle.data.name = this._name;
         ddtoggle.data.list = dlist;
         ddtoggle.data.menu = menucardlay;
         ddtoggle.SetOnTouch(this.ToggleDropdown)
         menucardlay.SetSize(-1, 0.0)


      } //AddDropdown-----END---END
ToggleDropdown(data) {
      if(this._IsActive) {
         return;
      } 
      else {
         this._IsActive = true;
         let target = {};
         target.hpx = this.data.list.GetPosition();
        // target.height = target.hpx/DH();
         console.log("≥>>>>>>"+target.hpx.height)
         //target.w = par.width;
         target.h = (this._menuVisibility ? 0.0 : 0.040/*0.05523893*/ *this.data.itemscount);
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