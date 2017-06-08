/**
 * Adds utility functions to lodash.
 */
(function (context, _) {
    'use strict';

    // Converts arguments of a method into a real JavaScript array.
    //  args - The arguments to convert.
    function argsToArray(args) {
        var value = [],
            index = 0,
            length = args.length;
        for(index; index < length; index++) {
            value.push(args[index]);
        }
        return value;
    }

    _.mixin({ 'uuid': uuid });
    _.mixin({ 'replaceAll': replaceAll });
    _.mixin({ 'getParams': getParams });
    _.mixin({ 'argsToArray': argsToArray });
}(global, _))