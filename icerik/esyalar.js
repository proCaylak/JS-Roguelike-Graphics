Game.ItemRepository = new Game.Repository('items', Game.Item);

$esya = Game.ItemRepository;
$esya_ozellik = Game.ItemMixins;

$esya.define('uzum', {
    name: 'üzüm',
    character: '♫',
    foreground: 'rgba(120, 0, 120, 0.5)',
    foodValue: 50,
    mixins: [$esya_ozellik.Edible]
});

$esya.define('kavun', {
    name: 'kavun',
    character: '∟',
    foreground: 'rgba(180, 180, 0, 0.5)',
    foodValue: 40,
    consumptions: 4,
    mixins: [$esya_ozellik.Edible]
});

$esya.define('ceset', {
    name: 'ceset',
    character: '►',
    foodValue: 75,
    consumptions: 1,
    mixins: [$esya_ozellik.Edible]
},{
    disableRandomCreation: true
});

$esya.define('tas', {
    name: 'taş',
    character: '◄',
    //foreground: 'white'
    rangedAttackValue: 8,
    ammoValue: 5,
    throwable: true,
    mixins: [$esya_ozellik.Equippable]
});

$esya.define('hancer', {
    name: 'hançer',
    character: '↕',
    //foreground: 'brown',
    attackValue: 5,
    wieldable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('kilic', {
    name: 'kılıç',
    character: '‼',
    //foreground: 'white',
    attackValue: 10,
    wieldable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('cirit', {
    name: 'cirit',
    character: '⌂',
    attackValue: 8,
    rangedAttackValue: 12,
    ammoValue: 4,
    wieldable: true,
    throwable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('asa', {
    name: 'asa',
    character: '¶',
    //foreground: 'yellow',
    attackValue: 5,
    defenseValue: 3,
    wieldable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('tunik', {
    name: 'tunik',
    character: '§',
    //foreground: 'brown',
    defenseValue: 2,
    wearable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('zincir zirh', {
    name: 'zincir zırh',
    character: '▬',
    //foreground: 'white',
    defenseValue: 4,
    wearable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('plaka zirh', {
    name: 'plaka zırh',
    character: '↨',
    //foreground: 'blue',
    defenseValue: 6,
    wearable: true,
    mixins: [$esya_ozellik.Equippable]
},{
    disableRandomCreation: true
});

$esya.define('balkabagi', {
    name: 'balkabağı',
    character: '∟',
    foreground: 'rgba(240, 150, 0, 0.7)',
    background: 'transparent',
    foodValue: 50,
    attackValue: 2,
    defenseValue: 2,
    wearable: true,
    wieldable: true,
    mixins: [$esya_ozellik.Edible, $esya_ozellik.Equippable]
});