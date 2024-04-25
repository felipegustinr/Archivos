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
    getById(req, res) {
        console.log(req.params.id);
        return items
            .findByPk(req.params.id)
            .then((items) => {
                console.log(items);
                if (!items) {
                    return res.status(404).send({
                        message: 'items Not Found',
                    });
                }
                return res.status(200).send(items);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return items
            .create({
                name: req.body.name,
                category: req.body.category,
                date_add: req.body.date_add,
                in_stock: req.body.in_stock,
                price: req.body.price,
            })
            .then((items) => res.status(201).send(items))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return items
            .findByPk(req.params.id)
            .then(items => {
                if (!items) {
                    return res.status(404).send({
                        message: 'items Not Found',
                    });
                }
                return items
                    .update({
                        name: req.body.name || items.name,
                        category: req.body.category || items.category,
                        date_add: req.body.date_add || items.date_add,
                        in_stock: req.body.in_stock || items.in_stock,
                        price: req.body.price || items.price,
                    })
                    .then(() => res.status(200).send(items))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return items
        .findByPk(req.params.id)
        .then(items => {
        if (!items) {
        return res.status(400).send({
        message: 'items Not Found',
        });
        }
        return items
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
        },
};
