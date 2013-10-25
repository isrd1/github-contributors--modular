YUI().add('repoViewTemplate', function (Y) {
    Y.namespace('GITAPP.RepoView').template = Y.Handlebars.compile(
'            <div class="yui3-g">'+
'                <p class="back yui3-u-1-2">'+
'                    <a href="#/github/{{owner.login}}/">« Select Repository</a>'+
'                </p>'+
'                <p class="view-on-github yui3-u-1-2">'+
'                    <a href="{{html_url}}">View on GitHub</a>'+
'                </p>'+
'            </div>'+

'            <div class="yui3-g">'+
'               <div class="info yui3-u-2-3">'+
'                    <h1>'+
'                        <span class="avatar user-avatar">'+
'                            <img src="{{owner.avatar_url}}" alt="{{owner.login}}\'s avatar" />'+
'                        </span>'+
'                        <span class="user-login">{{owner.login}}</span> /'+
'                        <span class="repo-name">{{name}}</span>'+
'                    </h1>'+
'                </div>'+
'                <div class="stats yui3-u-1-3">'+
'                    <ul class="yui3-g">'+
'                        <li class="repo-watchers yui3-u-1-2">'+
'                            <b>{{watchers}}</b> {{watchers_label}}'+
'                        </li>'+
'                        <li class="repo-forks yui3-u-1-2">'+
'                            <b>{{forks}}</b> {{forks_label}}'+
'                        </li>'+
'                    </ul>'+
'                </div>'+
'            </div>'
    );
}, '0.0.1', {
    requires: ['handlebars']
});