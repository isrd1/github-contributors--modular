YUI().add('contributorList', function (Y){

    // -- ContributorList
    // ----------------------------------------------------------
    Y.ContributorList = Y.Base.create('contributorList', Y.ModelList, [Y.GithubSync ], {
        model: Y.Contributor,
        githubURL: '/repos/{user}/{repo}/contributors',

        buildURL: function () {
            // This list's `repo` is used to
            // build the API URL.
            var repo = this.get('repo');

            return Y.Lang
                .sub(
                this.githubURL,
                {
                    user: repo
                        .getAsURL('owner.login'),
                    repo: repo
                        .getAsURL('name')
                });
        },

        // Override the default `comparator()`
        // so items are sorted by most number of
        // contributors to least number of
        // contributors.
        comparator: function (contributor) {
            // Note the minus sign.
            return -contributor
                .get('contributions');
        }
    }, {
        ATTRS: {
            // A `ContributorList` has a `Repo`
            // associated with it, this allows
            // for
            // a loose-coupling between a repo
            // and set of contributors.
            repo: {
                value: null
            }
        }
    });

});