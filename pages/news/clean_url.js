exports.clean_url = (url) => {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url
    }
    return url
}