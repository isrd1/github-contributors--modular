YUI().add('repoListViewTemplate', function (Y) {
    Y.namespace('GITAPP.RepoListView').template = Y.Handlebars.compile(
        '<h2 class="no-toc">Public Repositories</h2>'+

        '    <ul class="repos">'+
                '{{#each repos}}'+
        '<li id="{{clientId}}" class="repo yui3-g">'+
            '<div class="repo-name yui3-u-2-3">'+
            '<h3 class="no-toc">'+
            '<a href="#/github/{{owner.login}}/{{name}}/">{{name}}</a>'+
            '</h3>'+
'        <p class="repo-desc">{{description}}</p>'+
'    </div>'+
'    <div class="repo-stats yui3-u-1-3">'+
'        <ul class="yui3-g">'+
'            <li class="repo-lang yui3-u-1-3">'+
'                <b>{{language}}</b>'+
'            </li>'+
'            <li class="repo-watchers yui3-u-1-3">'+
'                <b>{{watchers}}</b>'+
'                <span>{{watchers_label}}</span>'+
'            </li>'+
'            <li class="repo-forks yui3-u-1-3">'+
'                    {{#if forks}}'+
'                <b>{{forks}}</b>'+
'                <span>{{forks_label}}</span>'+
'                    {{/if}}'+
'            </li>'+
'        </ul>'+
'    </div>'+
'</li>'+
'{{/each}}'+
'</ul>'

    );
}, '0.0.1', {
    requires: ['handlebars']
});