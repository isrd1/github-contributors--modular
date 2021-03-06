YUI().add('githubsync', function (Y){

    Y.GithubSync = Y.Base.create('githubsync', Y.Base, [], {
        API_ORIGIN: 'https://api.github.com',

    // Intended to be overridden with a GitHub API endpoint
        // URL.
        githubURL: '/',

        // Can be overridden to customize the actual URL used
        // when making the
        // request; this way the `githubURL` can be more of a
        // template, and this
        // method can substitute place-holders in the template
        // with specific values.
        buildURL: function () {
            return this.githubURL;
        },

        // Provides an implementation for a Model/ModelList's
        // `sync()` method which
        // can read data from GitHub's API.
        sync: function (action, options, callback) {
            Y.Lang.isFunction(callback)
            || (callback = function () {
            });

            // Enforce ready-only constraint.
            if (action !== 'read') {
                return callback('Read-only');
            }

            // Creates the API URL and adds params for 100 items
            // per-page and a
            // JSONP callback placeholder.
            var url = this.buildURL()
                + '?per_page=100&callback={callback}';

            // Performs JSONP request to GitHub's API.
            Y.jsonp(this.API_ORIGIN + url, function (res) {
                var meta = res.meta, data = res.data;

                // Check for a successful response, otherwise
                // return the error
                // message returned by the GitHub API.
                if (meta.status >= 200 && meta.status < 300) {
                    callback(null, res);
                } else {
                    callback(data.message, res);
                }
            });
        },

        // Provides an implementation for a Model/ModelList's
        // `parse()` method which
        // simply returns the `data` object or array from the
        // response JSON.
        parse: function (res) {
            return res.data;
        }
    });

}, '1.0.0',{
    requires: ['jsonp']
});
