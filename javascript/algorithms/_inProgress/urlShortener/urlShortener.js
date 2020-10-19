// shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
// restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

const shorten = (url) => {
    return generateHash(url);

};

const restore = (hash) => {

};

const generateHash = (url) => {
    const domain = url.split('.')[1];
    

};