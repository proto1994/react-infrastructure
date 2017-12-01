export function getUrlParam(name) {
    var reg = new RegExp("[?&]" + name + "=([^&]*)");
    var r = location.href.match(reg);
    if (r != null) return unescape(r[1]);
    return '';
}

export function sum(a, b) {
    return a + b;
}
  