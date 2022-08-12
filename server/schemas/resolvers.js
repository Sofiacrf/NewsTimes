const { Stock } = require("../models")

const resolvers = {
    Query: {
        stocks: async (parent, args) => {
            return await Stock.find({})
        }
    }

}

module.exports = resolvers;