YUI().add('repo', function (Y){
    // -- Repo
    // ---------------------------------------------------------------------
    Y.Repo = Y.Base.create('repo', Y.Model, [], {
        // The `id` attribute for this Model will be an alias
        // for `name`.
        idAttribute: 'name'
    }, {
        // These attributes correspond to the GitHub repo data
        // we care about:
        // http://developer.github.com/v3/repos/
        ATTRS: {
            name: {
                value: null
            },
            html_url: {
                value: null
            },
            description: {
                value: null
            },
            watchers: {
                value: 0
            },
            forks: {
                value: 0
            },
            language: {
                value: null
            },
            owner: {
                value: null
            }
        }
    });

});