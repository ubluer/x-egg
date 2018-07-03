const Service = require('egg').Service;

class FamilyService extends Service {
    async list() {
        const collection = this.app.mongo.db.collection('Person');
        // Find some documents
        collection.find({}).toArray((err, docs) => {
            console.log('Found the following records');
            console.log(err,docs);
        });
        return 'Arry';
    }
}

module.exports = FamilyService;