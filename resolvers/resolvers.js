const User = require('../models').User;
const Post = require('../models').Post;
const bcrypt = require('bcryptjs');
const resolvers = {
    User: {
        async posts(user) {
            return user.getPosts();
        }
    },
    Post: {
        async user(post) {
            return post.getUser();
        }
    },
    Query: {
        oneUser(root, { id }) {
            return User.findOne({
                where: { id: id }
            }).then((user) => {
                return user;
            }).catch((error) => error);
        },
        allPosts(root, args) {
            return Post.findAll()
                .then((posts) => posts)
                .catch((error) => error);
        },
        onePost(root, { id }) {
            return Post.findOne({
                where: { id: id }
            }).then((post) => {
                return post;
            }).catch((error) => error);
        }
    },
    Mutation: {
        createUser(root, { name, email, password, confirmPassword }) {
            if (password !== confirmPassword) {
                throw new Error;
            }
            return bcrypt.hash(password, 10).then((pass) => {
                return User.create({
                    name: name,
                    email: email,
                    password: pass
                }).then((created) => created)
                    .catch(error => error)
            }).catch(error => error);

        },
        createPost(root, { userId, title, subtitle, description }) {
            return Post.create({
                userId: userId,
                title: title,
                subtitle: subtitle,
                description: description
            }).then(post => post)
                .catch(error => error);
        },
        updatePost(root, { id, title, subtitle, description }) {
            let content = {}
            if (title) {
                content.title = title;
            }
            if (subtitle) {
                content.subtitle = subtitle;
            }
            if (description) {
                content.description = description;
            }
            console.log(JSON.stringify(content));
            return Post.findOne({ where: { id: id } }).then(found => {
                return found.update(content)
                    .then(updated => updated)
                    .catch(error => error);
            }).catch(error => error);

        },
        deletePost(root, { id }) {
            return Post.findOne({
                where: { id: id }
            }).then(post => {
                return post.destroy().then(() => post).catch(error => error)
            }).catch(error => error);
        }
    }
}

module.exports = resolvers;