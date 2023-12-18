module.exports = {
    mutipleToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    toObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
