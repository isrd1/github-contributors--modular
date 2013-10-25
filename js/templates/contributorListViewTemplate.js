YUI().add('contributorListViewTemplate', function (Y) {
    Y.namespace('GITAPP.ContributorListView').template = Y.Handlebars.compile(
'        <h2 class="no-toc">Project Contributors ({{num}})</h2>'+
'            <ul class="contributors">'+
'            {{#each contributors}}'+
'                <li class="contributor">'+
'                   <a class="avatar" href="#/github/{{login}}/"'+
'                    title="{{login}} has {{contributions}} {{contributions_label}}">'+
'                        <img alt="{{login}}\'s avatar" src="{{avatar_url}}" />'+
'                        <span class="contributor-name">{{login}}</span>'+
'                        <span class="contributor-contributions">{{contributions}}</span>'+
'                    </a>'+
'                </li>'+
'            {{/each}}'+
'            </ul>'
    );
}, '0.0.1', {
    requires: ['handlebars']
});