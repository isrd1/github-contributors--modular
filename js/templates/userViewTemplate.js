YUI().add('userViewTemplate', function (Y) {
    Y.namespace('GITAPP.UserView').template = Y.Handlebars.compile(
        '<div class="yui3-g">'+
        '    <p class="back yui3-u-1-2">'+
        '        <a href="#/">« Choose Someone Different</a>'+
        '    </p>'+
        '    <p class="view-on-github yui3-u-1-2">'+
        '        <a href="{{html_url}}">View on GitHub</a>'+
        '    </p>'+
        '</div>'+

        '<div class="yui3-g">'+
        '    <div class="info yui3-u-2-3">'+
        '        <h1>'+
        '            <span class="avatar user-avatar">'+
        '                <img src="{{avatar_url}}" alt="{{login}}\'s avatar" />'+
        '            </span>'+
        '            <span class="user-login">{{login}}</span>'+
        '        {{#if name}}'+
        '            <span class="user-name">({{name}})</span>'+
        '        {{/if}}'+
        '        </h1>'+
        '   </div>'+
        '    <div class="stats yui3-u-1-3">'+
        '    <ul class="yui3-g">'+
        '        <li class="user-repos yui3-u-1-2">'+
        '            <b>{{public_repos}}</b> {{public_repos_label}}'+
        '        </li>'+
        '        <li class="user-followers yui3-u-1-2">'+
        '            <b>{{followers}}</b> {{followers_label}}'+
        '        </li>'+
        '    </ul>'+
        '    </div>'+
        '</div>'
    );
  }, '0.0.1', {
    requires: ['handlebars']
});