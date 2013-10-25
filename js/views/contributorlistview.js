YUI().add('contributorListView', function (Y) {

    Y.ContributorListView = Y.Base.create('contributorListView', Y.View, [], {
        // Compiles the ContributorList Template into a reusable Handlebars template.
        //template: Y.Handlebars.compile(Y.one('#t-contributor-list').getHTML()),

        render: function () {
            var contributors = this.get('modelList'), contributorsData, content;

            /*
            Iterates over all `Contributor` models in the list and retrieves a sub - set of each model
            instance's data as a simple JSON structs and collects it in an array.
            */
            contributorsData = contributors
                .map(function (contributor) {
                    // Only a few of the `Contributor` data attributes are needed.
                    var data = contributor.getAttrs([
                            'login',
                            'avatar_url',
                            'contributions'
                        ]);

                    // Add proper pluralized labels for numerical data fields.
                    Y.GITAPP.addLabel(data, 'contributions', 'Contribution');
                    return data;
                });

            /*
            Applies the `ContributorList` data to the ContributorList Template along with the total number of
            contributors for the repo.
            */
            content = Y.GITAPP.ContributorListView.template({
                num: contributors.size(),
                contributors: contributorsData
            });

            /*
            *  Sets the resulting HTML from apply the data to the template as the contents of this view 's container.
            * */
            this.get('container').setHTML(content);
            return this;
        }
    });

}, '0.0.1', {
    requires: ['utils', 'handlebars', 'node-base', 'contributorListViewTemplate']
});