YUI().add('homePageView', function (Y) {

    Y.HomePageView = Y.Base.create('homePageView', Y.View, [], {
        // Compiles the HomePage Template into a reusable Handlebars template.
        //template:  '',//Y.Handlebars.compile(Y.one('#t-home').getHTML()),

        /**
         * Attach DOM events for the view. The `events` object is a mapping of selectors to an object containing one
         * or more events to attach to the node(s) matching each selector.
         * */
        events: {
            'button': {
                click: 'changeUser'
            },

            'input': {
                keypress: 'enter'
            }
        },

        initializer: function () {
            /**
             *  The `changeUser` event is fired when the user chooses a GitHub user to start browsing.This event
             *  will bubble up to the `ContributorsApp` when this view is the app 's `activeView`.
            */
            this.publish('changeUser', {
                preventable: false
            });
        },

        render: function () {
            /** Retrieves just the `login` of the `User` model instance and applies it to the HomePage Template
             *  which is defined in ../tempates/homePageViewTemplate.js */
            var user = this.get('model'), content = Y.GITAPP.HomePageView.template(user.getAttrs([
                    'login'
                ]));

            /** Adds the "home-page" CSS class to aid styling and sets the resulting HTML as the contents
             * of this view's container. */
            this.get('container').addClass('home-page').setHTML(content);

            return this;
        },

        /**
         *  Called when the user clicks the "Show Repos" button.This will retrieve the GitHub username
         *  from the text `<input>` and fire the `changeUser` event, passing on the username to the app.
        */
        changeUser: function () {
            var user = this.get('container').one('input').get('value');
            if (user) {
                this.fire('changeUser', {
                    user: user
                });
            }
        },

        /** Called when the user types inside the text `<input>`; when the "enter" key is pressed,
         * this will call the `changeUser()`  method.
         * */
        enter: function (e) {
            // Check for "enter" keypress.
            if (e.keyCode === 13) {
                this.changeUser();
            }
        }
    });


}, '0.0.1', {
    requires: ['node-base', 'handlebars', 'homePageViewTemplate']
});