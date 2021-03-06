YUI().add('userPageView', function (Y) {

    Y.UserPageView = Y.Base.create('userPageView', Y.View, [], {

        initializer: function () {
            var user = this.get('model'),
                repos = this.get('modelList');

            // This view serves as a "page"-level view
            // containing two sub-views to
            // which it delegates rendering and stitches
            // together the resulting UI.
            // Sub-views are created to render the `User` and
            // `RepoList`.
            this.userView = new Y.UserView({
                model: user
            });
            this.repoListView = new Y.RepoListView({
                modelList: repos
            });

            // This will cause the sub-views' custom events to
            // bubble up to here.
            this.userView.addTarget(this);
            this.repoListView.addTarget(this);
        },

        // This destructor is specified so this view's sub-views
        // can be properly
        // destroyed and cleaned up.
        destructor: function () {
            this.userView.destroy();
            this.repoListView.destroy();

            delete this.userView;
            delete this.repoListView;
        },

        render: function () {
            // A document fragment is created to hold the
            // resulting HTML created
            // from rendering the two sub-views.
            var content = Y.one(Y.config.doc.createDocumentFragment());

            // This renders each of the two sub-views into the
            // document fragment,
            // then sets the fragment as the contents of this
            // view's container.
            content.append(this.userView.render().get('container'));
            content.append(this.repoListView.render().get('container'));

            // Adds the "user-page" CSS class to aid styling and
            // sets the document
            // fragment containing the two rendered sub-views as
            // the contents of
            // this view's container.
            this.get('container').addClass('user-page').setHTML(content);

            return this;
        }
    });


}, '0.0.1', {
    requires: ['userView', 'repoListView', 'node-base']
});