
'use strict';
//export by default
module.exports = function (app) {
    // grab 
    var strain = require('../controllers/User');
    var siteRoot = require('../routes/root');

    // Site Index
    app.use('/', siteRoot);

    // Strains
    app.route('/user')
        .get(strain.getAllItems);
		
		
	app.route('/strains/id/:rowId')
        .get(strain.getItemById)
        .put(strain.updateItem)
        .delete(strain.deleteItem);
}