

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email : {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    })
    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked' });
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
    };
    return User;
}