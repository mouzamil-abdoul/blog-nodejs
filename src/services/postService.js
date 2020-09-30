  const Post = require("../db/models/postModels");

  exports.find = async function (options = {}) {
      return Post.find(options)
          .sort('field -createdAt')
          .sort('field -updatedAt');
  }

  exports.findOne = async function (options = {}) {
      return Post.findOne(options);
  }