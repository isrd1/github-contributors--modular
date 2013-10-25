YUI().add('repoPageView', function (Y) {
    // -- RepoPage View
    // ------------------------------------------------------------
    Y.RepoPageView = Y.Base.create('repoPageView', Y.View, [], {
        initializer: function () {
            var repo = this.get('model'),
                contributors = this.get('modelList');

            // This view serves as a "page"-level view
            // containing two sub-views to
            // which it delegates rendering and stitches
            // together the resulting UI.
            // Sub-views are created to render the `RepoView`
            // and
            // `ContributorListView`.
            this.repoView = new Y.RepoView({
                model: repo
            });
            this.contributorListView = new Y.ContributorListView(
                {
                    modelList: contributors
                });

            // This will cause the sub-views' custom events to
            // bubble up to here.
            this.repoView.addTarget(this);
            this.contributorListView.addTarget(this);
        },

        // This destructor is specified so this view's sub-views
        // can be properly
        // destroyed and cleaned up.
        destructor: function () {
            this.repoView.destroy();
            this.contributorListView.destroy();

            delete this.repoView;
            delete this.contributorListView;
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
            content.append(this.repoView.render().get('container'));
            content.append(this.contributorListView.render().get('container'));

            // Adds the "repo-page" CSS class to aid styling and
            // sets the document
            // fragment containing the two rendered sub-views as
            // the contents of
            // this view's container.
            this.get('container').addClass('repo-page').setHTML(content);

            return this;
        }
    });

}, '0.0.1', {
    requires: ['contributorListView', 'repoView', 'node-base']
});