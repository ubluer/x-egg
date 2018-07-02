const Controller = require('egg').Controller;

class FamilyController extends Controller {
    async index() {
        this.ctx.body = 'Hello world';
    }
}

module.exports = FamilyController;