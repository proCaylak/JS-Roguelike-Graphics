Game.ItemMixins = {};

$esya_ozellik = Game.ItemMixins;

$esya_ozellik.Edible = {
    name: 'Edible',
    init: function(template){
        this._foodValue = template['foodValue'] || 5;
        this._maxConsumptions = template['consumptions'] || 1;
        this._remainingConsumptions = this._maxConsumptions;
    },
    eat: function(entity){
        if(entity.hasMixin('FoodConsumer')){
            if(this.hasRemainingConsumptions()){
                entity.modifyFullnessBy(this._foodValue);
                this._remainingConsumptions--;
            }
        }
    },
    hasRemainingConsumptions: function(){
        return this._remainingConsumptions > 0;
    },
    describe: function(){
        if(this._maxConsumptions != this._remainingConsumptions){
            return 'kısmen tüketilmiş ' + Game.Item.prototype.describe.call(this);
        }else{
            return this._name;
        }
    },
    listeners: {
        'details': function(){
            return [{key: 'gıda', value: this._foodValue}];
        }
    }
};

$esya_ozellik.Equippable = {
    name: 'Equippable',
    init: function(template){
        this._attackValue = template['attackValue'] || 0;
        this._defenseValue = template['defenseValue'] || 0;
        this._rangedAttackValue = template['rangedAttackValue'] || 0;
        this._ammoValue = template['ammoValue'] || 0;
        this._wieldable = template['wieldable'] || false;
        this._wearable = template['wearable'] || false;
        this._throwable = template['throwable'] || false;
    },
    getAttackValue: function(){
        return this._attackValue;
    },
    getDefenseValue: function(){
        return this._defenseValue;
    },
    getRangedAttackValue: function(){
        return this._rangedAttackValue;
    },
    getAmmoValue: function(){
        return this._ammoValue;
    },
    setAmmoValue: function(ammo){
        this._ammoValue = ammo;
    },
    isWieldable: function(){
        return this._wieldable;
    },
    isWearable: function(){
        return this._wearable;
    },
    isThrowable: function(){
        return this._throwable;
    },
    listeners: {
        'details': function(){
            var results = [];
            if(this.getAttackValue() > 0){
                results.push({key: 'saldırı', value: this.getAttackValue()});                
            }
            if(this.getDefenseValue() > 0){
                results.push({key: 'savunma', value: this.getDefenseValue()});                
            }
            if(this.getAmmoValue() > 0){
                results.push({key: 'cephane', value: this.getAmmoValue()});
            }
            if(this.getRangedAttackValue() > 0){
                results.push({key: 'menzilli saldırı', value: this.getRangedAttackValue()});
            }
            return results;
        }
    }    
}