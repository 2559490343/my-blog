// const nodeCmd = require('child_process').execSync;
const nodeCmd = require('node-cmd');
const kindsCategory = require('../pages/examples/components/Aside/category.json')
kindsCategory.forEach(category => {
  category.list && category.list.forEach(item => {
    if (item.en !== 'Button' || item.en !== 'Icon') {
      nodeCmd.run(`mk dir ${item.url}`);
    }
  })
})
