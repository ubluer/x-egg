const Controller = require('egg').Controller;

class FamilyController extends Controller {
    async index() {
        this.ctx.body = this.ctx.service.family.list();
    }
}

module.exports = FamilyController;