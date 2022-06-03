var tileSet = document.createElement("img");
tileSet.src = "textures.png";

var Game = {
    _display: null,
    _currentScreen: null,
    _screenWidth: 80,
    _screenHeight: 24,        
    init: function(){
        //parantez içindekiler ayrı bir options'a alınabilir
        this._display=new ROT.Display({
            layout: "tile",
            tileWidth: 16,
            tileHeight: 16,
            tileSet: tileSet,
            tileColorize: true,
            tileMap: { //ALT CODE
                "☺":[0,0],         //1
                "☻":[16,0],        //2
                "♥":[32,0],        //3
                "♦":[48,0],        //4
                "♣":[64,0],        //5
                "♠":[80,0],        //6
                "•":[96,0],        //7
                "◘":[112,0],       //8
        
                "○":[0,16],        //9
                "◙":[16,16],       //10
                "♂":[32,16],       //11
                "♀":[48,16],       //12
                "♪":[64,16],       //13
                "♫":[80,16],       //14
                "☼":[96,16],       //15
                "►":[112,16],      //16
        
                "◄":[0,32],        //17
                "↕":[16,32],       //18
                "‼":[32,32],       //19
                "¶":[48,32],       //20
                "§":[64,32],       //21
                "▬":[80,32],       //22
                "↨":[96,32],       //23
                "∟":[112,32],      //28
        
                "Ü":[0,48],
                "A":[16,48],
                "B":[32,48],
                "C":[48,48],
                "D":[64,48],
                "E":[80,48],
                "F":[96,48],
                "G":[112,48],
        
                "H":[0,64],
                "I":[16,64],
                "J":[32,64],
                "K":[48,64],
                "L":[64,64],
                "M":[80,64],
                "N":[96,64],
                "O":[112,64],
        
                "P":[0,80],
                "Q":[16,80],
                "R":[32,80],
                "S":[48,80],
                "T":[64,80],
                "U":[80,80],
                "V":[96,80],
                "W":[112,80],
        
                "X":[0,96],
                "Y":[16,96],
                "Z":[32,96],
                "Ç":[48,96],
                "Ğ":[64,96],
                "İ":[80,96],
                "Ş":[96,96],
                "Ö":[112,96],
        
                "ü":[0,112],
                "a":[16,112],
                "b":[32,112],
                "c":[48,112],
                "d":[64,112],
                "e":[80,112],
                "f":[96,112],
                "g":[112,112],
        
                "h":[0,128],
                "i":[16,128],
                "j":[32,128],
                "k":[48,128],
                "l":[64,128],
                "m":[80,128],
                "n":[96,128],
                "o":[112,128],
        
                "p":[0,144],
                "q":[16,144],
                "r":[32,144],
                "s":[48,144],
                "t":[64,144],
                "u":[80,144],
                "v":[96,144],
                "w":[112,144],
        
                "x":[0,160],
                "y":[16,160],
                "z":[32,160],
                "ç":[48,160],
                "ğ":[64,160],
                "ı":[80,160],
                "ş":[96,160],
                "ö":[112,160],
        
                "[":[0,176],
                "\\":[16,176],
                "]":[32,176],
                "^":[48,176],
                "_":[64,176],
                "\'":[80,176],
                "@":[96,176],
                "|":[112,176],
        
                "0":[0,192],
                "1":[16,192],
                "2":[32,192],
                "3":[48,192],
                "4":[64,192],
                "5":[80,192],
                "6":[96,192],
                "7":[112,192],
        
                "8":[0,208],
                "9":[16,208],
                ":":[32,208],
                ";":[48,208],
                "<":[64,208],
                "=":[80,208],
                ">":[96,208],
                "?":[112,208],
                
                " ":[0,224],
                "!":[16,224],
                "\"":[32,224],
                "#":[48,224],
                "$":[64,224],
                "%":[80,224],
                "&":[96,224],
                
                
                "(":[0,240],
                ")":[16,240],
                "*":[32,240],
                "+":[48,240],
                ",":[64,240],
                "-":[80,240],
                ".":[96,240],
                "/":[112,240],

                "⌂":[0,256],    //127
                "╚":[16,256],   //200
                "╔":[32,256],   //201
            },
            width: this._screenWidth,
            height: this._screenHeight + 2});

        var game = this;
        var bindEventToScreen = function(event) {
            window.addEventListener(event, function(e){
                if(game._currentScreen !== null){
                    game._currentScreen.handleInput(event, e);
                }
            });
        };

        bindEventToScreen('keydown');
        bindEventToScreen('keyup');
        bindEventToScreen('keypress');
    },
    refresh: function(){
        this._display.clear();
        this._currentScreen.render(this._display);
    },
    getDisplay: function(){
        return this._display;
    },
    getScreenWidth: function(){
        return this._screenWidth;
    },
    getScreenHeight: function(){
        return this._screenHeight;
    },
    switchScreen: function(screen){
        if (this._currentScreen !== null){
            this._currentScreen.exit();
        }

        this.getDisplay().clear();

        this._currentScreen = screen;
        if(!this._currentScreen !==null){
            this._currentScreen.enter();
            this.refresh();
        }
    }
}

window.onload = function(){
    if(!ROT.isSupported()){
        alert("rot.js bu tarayıcıda mevcut değildir!.");
    }
    else{
        Game.init();
        document.body.appendChild(Game.getDisplay().getContainer());
        Game.switchScreen(Game.Screen.startScreen);
    }
}