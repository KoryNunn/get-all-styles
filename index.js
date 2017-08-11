var righto = require('righto');
var cpjax = require('cpjax');

function getLinkStyles(element, callback){
    var url = element.href;

    cpjax(
        {
            url: url,
            dataType: 'text',
            contentType: 'text'
        },
        callback
    );
}

function getStyleTagStyles(element, callback){
    callback(null, element.textContent);
}

var styleRetrievers = {
    link: getLinkStyles,
    style: getStyleTagStyles
};

module.exports = function(targetNode, callback){
    var elements = targetNode.querySelectorAll('style, link[rel=stylesheet]');

    var styles = Array.prototype.map.call(elements, function(element){
            return righto(styleRetrievers[element.tagName.toLowerCase()], element)();
        });

    var concatted = righto.reduce(styles, function(result, next){
            return next.get(function(styles){
                return result + '\n' + styles;
            });
        }, '');

    concatted(callback);
};