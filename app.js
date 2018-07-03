const path = require('path');
// load model as this.app.model
function loadModelToApp(app) {
    const dir = path.join(app.config.baseDir, 'app/model');
    app.loader.loadToApp(dir, 'model', {
        inject: app,
        caseStyle: 'upper',
        // filter(model) {
        //     return typeof model === 'function' && model.prototype instanceof app.mongoose.Model;
        // },
    });
}

// app.js
module.exports = app => {
    app.beforeStart(async () => {
        loadModelToApp(app);
    });
};