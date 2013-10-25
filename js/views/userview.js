YUI().add('userView', function (Y){
    // -- User View
    // ----------------------------------------------------------------
    Y.UserView = Y.Base.create('userView', Y.View, [], {

        render: function () {
            // Retrieves all of the model instance's data as a simple JSON struct.
            var user = this.get('model').toJSON(), content;

            // Add proper pluralized labels for numerical data fields.
            Y.GITAPP.addLabel(user, 'public_repos', 'Public Repo');
            Y.GITAPP.addLabel(user, 'followers', 'Follower');

            /**
             *  Applies the `User` model data to the User Template and sets the resulting HTML as the contents
             *  of this view 's container. content = Y.GITAPP.UserView.template(user);
             *  Y.GITAPP.UserView.template is defined in ../templates/userViewTemplate.js
            */
            content = Y.GITAPP.UserView.template(user);
            this.get('container').setHTML(content);

            return this;
        }
    });

},'1.0.0', {
    requires: ['utils', 'handlebars', 'userViewTemplate']
});