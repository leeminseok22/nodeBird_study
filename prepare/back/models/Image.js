
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        src : {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8_generic_ci',
    })
    Image.associate = (db) => {
        db.belongsTo(db.Post);
    };
    return Image;
}