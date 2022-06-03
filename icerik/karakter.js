Game.Glyph = function(properties){
    properties = properties || {};
    this._char= properties['character'] || [' '];
    this._foreground = properties['foreground'] || 'rgba(0, 0, 0, 0.0)';
    this._background = properties['background'] || 'rgba(0, 0, 0, 0.0)';
};

$karakter = Game.Glyph.prototype;

$karakter.getChar = function(){
    return this._char;
}
$karakter.getBackground = function(){
    return this._background;
}
$karakter.getForeground = function(){
    return this._foreground;
}
$karakter.getRepresentation = function(){
    return '%c{' + this._foreground + '}%b{' + this._background + '}' +
    this._char + '%c{white}%b{black}';
};
