

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userid : {
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
        phoneNumber: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        victory: {
            type: DataTypes.INTEGER(255),
            allowNull: false,
        },
        userColor: {
            type: DataTypes.INTEGER(5),
            allowNull: false,
        },
        record: {
            type: DataTypes.INTEGER(255),
            allowNull: false,
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        timestamps: true,
    })
    User.associate = (db) => {
        
    };
    return User;
}