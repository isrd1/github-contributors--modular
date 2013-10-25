YUI().add('repoView', function (Y) {
    // -- Repo View
    // ----------------------------------------------------------------
    Y.RepoView = Y.Base.create('repoView', Y.View, [], {
        // Compiles the Repo Template into a reusable Handlebars
        // template.
        //template: Y.Handlebars.compile(Y.one('#t-repo').getHTML()),

        render: function () {
            // Retrieves all of the model instance's data as a
            // simple JSON struct.
            var repo = this.get('model').toJSON(), content;

            // Add proper pluralized labels for numerical data
            // fields.
            Y.GITAPP.addLabel(repo, 'watchers', 'Watcher');
            Y.GITAPP.addLabel(repo, 'forks', 'Fork');

            // Applies the `Repo` model data to the Repo
            // Template and sets the
            // resulting HTML as the contents of this view's
            // container.
            content = Y.GITAPP.RepoView.template(repo);
            this.get('container').setHTML(content);

            return this;
        }
    });
},'1.0.0', {
    requires: ['utils', 'handlebars', 'node-base', 'repoViewTemplate']
});