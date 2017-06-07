/**
 * Extends cheerio.js to repeat the first child of the selected element for
 * each element in an array of items.  If additional child elements are in
 * the selected element, they will be removed before the items are repeated.
 *
 * For example:
 *
 * $ = cheerio.load('<ul class="foo"><li>Bananas</li><li>Plums</li></ul>');
 * var items = [
 *   { apple: 'Fuji' },
 *   { apple: 'Gala' }
 * ];
 *
 * $('.foo').repeat(items, function (item, li) {
 *   li.text(item.apple);
 * });
 *
 * $.html();
 * // => '<html><head></head><body><ul class="foo"><li>Fuji</li><li>Gala</li></ul></body></html>
 *
 * @param {Array} items The array of items to iterate through.
 * @param {Function} callback The function called when iterating through items.
 *                            callback accepts two arguments, the current item
 *                            in the array and a cheerio object containing the
 *                            first element of the selected element.
 * @author Mike Atkisson
 * @since 0.1.0
 */
exports.repeat = function (items, callback) {
    var $ele = $(this),
        $first = $ele.children().first(),
        template = $('<div>').append($first.clone()).html();
    $ele.empty();
    items.forEach(function (item) {
        var $template = $(template);
        if (callback) {
            callback(item, $template);
        }
        $ele.append($template);
    });
};