module.exports = function main(number){
    let response;
    if(number>1&&number<99){
        response=String(number)+' bottles of beer on the wall,'+String(number)+' bottles of beer.\n'+
        'Take one down, pass it around,'+String(number-1)+' bottles of beer on the wall.\n'
    }
    else if(number===1){
        response='1 bottle of beer on the wall, 1 bottle of beer.\n'+
        'Take one down and pass it around, no more bottles of beer on the wall.\n'
    }
    else if(number<1){
        response='No more bottles of beer on the wall, no more bottles of beer.\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.\n'
    }
    return response;
}