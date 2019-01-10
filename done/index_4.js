/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];
    var preResult = [];
    var finalTag ='';
    tweetWords = tweet.split(' ');
    preResult = tweetWords.filter(filterHashtags);
    function filterHashtags(tweetTag) {
      return tweetTag.startsWith('#') == true;
    };
    preResult.forEach(leaveTag);
    function leaveTag(tag) {
      finalTag = tag.slice(1,tag.length);
      return result.push(finalTag);
    };
    return result;
};