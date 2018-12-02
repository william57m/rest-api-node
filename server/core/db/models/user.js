import db from '../index'

var User = db.sequelize.define('User', {
	firstname: {type: db.Sequelize.STRING},
	lastname: {type: db.Sequelize.STRING}
});

export default User;
