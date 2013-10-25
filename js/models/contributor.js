YUI().add('contributor', function (Y){
    // -- Contributor
    // --------------------------------------------------------------
    Y.Contributor = Y.Base.create('contributor', Y.User, [], {}, {
        ATTRS: {
            contributions: {
                value: 0
            }
        }
    });
});
