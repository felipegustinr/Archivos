const items = require("../models").items_model;
module.exports = {
    list(req, res) {
        return items
            .findAll({})
            .then((items) => res.status(200).send(items))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};
