(function () {
    var params = {};
    var search = location.search.replace(/^\?/, '');
    var arr = search.split('&');

    for ( var i = 0;i< arr.length;i++ ) {
        var ps = arr[i].split('=');
        params[ps[0]] = ps[1] || '';
    }
    
    window.params = params;
})();