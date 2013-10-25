YUI({
    modules: {
        user:               {fullpath: '/yui-git/js/models/user.js'},
        githubsync:         {fullpath: '/yui-git/js/utilities/githubsync.js'},
        repo:               {fullpath: '/yui-git/js/models/repo.js'},
        repoList:           {fullpath: '/yui-git/js/models/repolist.js'},
        contributor:        {fullpath: '/yui-git/js/models/contributor.js'},
        contributorList:    {fullpath: '/yui-git/js/models/contributorlist.js'},
        userView:           {fullpath: '/yui-git/js/views/userview.js'},
        utils:              {fullpath: '/yui-git/js/utilities/utils.js'},
        repoViewTemplate:   {fullpath: '/yui-git/js/templates/repoViewTemplate.js'},
        repoView:           {fullpath: '/yui-git/js/views/repoview.js'},
        repoListViewTemplate:{fullpath: '/yui-git/js/templates/repoListViewTemplate.js'},
        repoListView:       {fullpath: '/yui-git/js/views/repolistview.js'},
        contributorListViewTemplate: {fullpath: '/yui-git/js/templates/contributorListViewTemplate.js'},
        contributorListView:{fullpath: '/yui-git/js/views/contributorlistview.js'},
        homePageViewTemplate:{fullpath: '/yui-git/js/templates/homePageViewTemplate.js'},
        homePageView:       {fullpath: '/yui-git/js/views/homepageview.js'},
        userViewTemplate:   {fullpath: '/yui-git/js/templates/userViewTemplate.js'},
        userPageView:       {fullpath: '/yui-git/js/views/userpageview.js'},
        repoPageView:       {fullpath: '/yui-git/js/views/repopageview.js'},
        contributorsApp:    {fullpath: '/yui-git/js/contributorsapp.js'}
    }
}).use('app', 'handlebars', 'jsonp', 'cssbutton', 'githubsync',  'user',
       'repo', 'repoList', 'contributor', 'contributorList', 'utils', 'userView', 'repoViewTemplate',
       'repoView','repoListViewTemplate', 'repoListView', 'contributorListViewTemplate', 'contributorListView',
       'homePageViewTemplate','homePageView', 'userViewTemplate', 'userPageView',
       'repoPageView', 'contributorsApp',
       function (Y) {

        // Create and render a new instance of our `ContributorsApp`!
        var MyApp = new Y.ContributorsApp({
            // We force this to false for this example app because there is no server.
            serverRouting: false,

            // Here we set our app's rendering container, and restrict which links on the page should cause the app to navigate.
            container: '#github-app',
            linkSelector: '#github-app a',

            // Enable view transitions when users are navigating around the app.
            transitions: true,

            // We'll define the default GitHub user to be "yui".
            user: new Y.User({
                login: 'yui'
            })
        });

        MyApp.render();

    });