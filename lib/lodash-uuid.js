
// Creates a new UUID.
// Slightly modified from http://jsfiddle.net/briguy37/2MVFd/
function uuid() {
    var d = new Date().getTime(),
        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return uuid.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
};

module.exports = uuid;

