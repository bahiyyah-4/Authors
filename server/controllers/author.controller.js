const { Author } = require('../models/author.model');

module.exports = {
    getAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },
    getAll: (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        const { name, book1 } = req.body;
        Author.create({ name, book1 })
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    }
}