const { test : base} = require('@playwright/test');
const { createPages } = require("../../pageObjects/index.js");
const { UniqueGenerator } = require('../../utils/UniqueGenerator.js');
const { getPetData} = require("../../testData/petData.js");

const test=base.extend({
  pages : async({page}, use) =>{
    const mypage =createPages(page)
    await use(mypage);
  
  }, 

  petData : async({}, use) =>{
    const petData = getPetData();
    await use(petData);
  }
})
module.exports={test};





