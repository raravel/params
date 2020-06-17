function __params_parse__() {
    var params = {};
    var qsIdx = location.href.indexOf('?');

    if ( qsIdx < 0 ) {
        return;
    }

    var qs = location.href.substr(qsIdx);
	var uri = decodeURI(qs);
    var search = uri.replace(/^\?/, '');
    var arr = search.split('&');

    for ( var i = 0;i< arr.length;i++ ) {
        var ps = arr[i].split('=');
        params[ps[0]] = ps[1] || '';
    }
    
    location.params = params;

};

__params_parse__();
window.addEventListener('hashchange', __params_parse__, false);
