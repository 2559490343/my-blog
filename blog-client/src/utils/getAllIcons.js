const files = require.context('/src/ppComponents/Icon/icons', true, /\.tsx$/);

const modules = files.keys().reduce((modules, path) => {
  const name = path.split('/')[1];
  modules[name] = files(path).default;
  return modules;
}, {});

module.exports = modules;
