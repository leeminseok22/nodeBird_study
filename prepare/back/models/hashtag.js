
module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        content : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8_generic_ci',
    })
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});
    };
    return Hashtag;
}