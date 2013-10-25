YUI().add('homePageViewTemplate', function (Y) {
    Y.namespace('GITAPP.HomePageView').template = Y.Handlebars.compile(
            '<h1>Contributors of GitHub Projects</h1>' +
            '<p>' +
                '<input id="github-app-username" type="text" value="{{login}}" placeholder="GitHub Username" />' +
                '<button class="yui3-button">Show Repos</button>' +
            '</p>' +
            '<p>' +
                '<label for="github-app-username">(e.g. yui, davglass, rgrove)</label>' +
            '</p>'
    );
}, '0.0.1', {
    requires: ['handlebars']
});