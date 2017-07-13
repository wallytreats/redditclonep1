(function() { //opens iife
  'use strict';

  angular.module("app")

    .component('post',{
      controller: function () {
        const vm = this;

        vm.$onInit = function () {
          vm.show = false;
          vm.propertyName = 'Votes';
          vm.posts = [{
            title: "You Don't Know JS",
            author: "Kyle Simpson",
            body: "great book!",
            imageUrl: "http://lorempixel.com/200/200",
            numComments: 0,
            comments: [],
            date: new Date(),
            votes: 1
          },
          {
            title: "Javascript, The Good Parts",
            author: "Douglas Crockford",
            body: "great book!",
            imageUrl: "http://lorempixel.com/200/200",
            numComments: 0,
            comments: [],
            date: new Date(),
            votes: 0
          },
          {
            title: "Harry Potter and the Goblet of Fire",
            author: "Harry Potter's ghost writer",
            body: "teen angst!",
            imageUrl: "http://lorempixel.com/200/200",
            numComments: 0,
            comments: [],
            date: new Date(),
            votes: 0
          }
        ];
        };

        vm.newPost = function () {
          if(vm.show === true) {
            vm.show = false;
          } else {
            vm.show = true;
          }
        };

        vm.createPost = function () {
          vm.post.date = new Date();
          vm.post.comments = [];
          vm.post.votes = 0;
          vm.posts.push(vm.post);
          delete vm.post;
          vm.show = false;
        };

        vm.showComments = function (post) {
          if(post.show === true) {
            post.show = false;
          } else {
            post.show = true;
          }
        };

        vm.createComment = function (post) {
          post.comments.push(post.message);
          delete post.message;
        };

        vm.upVote = function (post) {
          post.votes += 1;
        };

        vm.downVote = function (post) {
          if(post.votes > 0) {
            post.votes -= 1;
          }
        };

      },
      templateUrl: './post/post.template.html'
    });

})(); //closes iife
