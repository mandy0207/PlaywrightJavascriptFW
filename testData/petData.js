const { UniqueGenerator } = require('../utils/UniqueGenerator');

function getPetData(){
    return {
       petName: UniqueGenerator.getFakeData('firstname')

    }
}
module.exports= {getPetData};