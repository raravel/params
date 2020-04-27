(function () {
    var params = {};
	var uri = decodeURI(location.search);
    var search = uri.replace(/^\?/, '');
    var arr = search.split('&');

    for ( var i = 0;i< arr.length;i++ ) {
        var ps = arr[i].split('=');
        params[ps[0]] = ps[1] || '';
    }
    
    location.params = params;
})();
