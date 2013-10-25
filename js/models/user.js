YUI().add('user', function (Y) {
    // -- User
    // ---------------------------------------------------------------------
    Y.User = Y.Base.create('user', Y.Model, [ Y.GithubSync ], {
        githubURL: '/users/{user}',

        buildURL: function () {
            return Y.Lang.sub(this.githubURL, {
                user: this.getAsURL('login')
            });
        }
    }, {
        // These attributes correspond to the GitHub user data
        // we care about:
        // http://developer.github.com/v3/users/
        ATTRS: {
            login: {
                value: null
            },
            name: {
                value: null
            },
            html_url: {
                value: null
            },
            avatar_url: {
                value: null
            },
            public_repos: {
                value: 0
            },
            followers: {
                value: 0
            }
        }
    });

}, '1.0.0',{

});