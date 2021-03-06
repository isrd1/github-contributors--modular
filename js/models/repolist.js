YUI().add('repoList', function (Y) {
    // -- RepoList
    // -----------------------------------------------------------------
    Y.RepoList = Y.Base.create('repoList', Y.ModelList, [Y.GithubSync], {
        model: Y.Repo,
        githubURL: '/users/{user}/repos',

        buildURL: function () {
            // This list's `user` is used to build the API URL.
            return Y.Lang.sub(this.githubURL, {
                user: this.get('user').getAsURL('login')
            });
        },

        // Override the default `comparator()` so items are
        // sorted by most number of
        // watchers to least number of watchers.
        comparator: function (repo) {
            // Note the minus sign.
            return -repo.get('watchers');
        }
    }, {
        ATTRS: {
            // A `RepoList` has a `User` associated with it,
            // this allows for a
            // loose-coupling between a user and set of
            // repositories.
            user: {
                value: null
            }
        }
    });


});