YUI.add('utils', function (Y) {
    Y.namespace('GITAPP');

    // -- Utility Functions
    // --------------------------------------------------------

    // A helper function used by the Views to create labels for
    // numerical fields
    // which are correctly pluralized, and puts the label back
    // on the `data` object.
    Y.GITAPP.addLabel = function (data, field, label) {
        var num = data[field];
        data[field] || (data[field] = '0');
        data[field + '_label'] = num === 1 ? label
            : (label + 's');
    }

});