
export const setMetaInformation = (title, description, image, url) => {

    document.title = "Aspicientis Lux - " + title;

    updateMetaProperty("og:title","Aspicientis Lux - " + title);
    updateMetaProperty("og:description",description);
    updateMetaProperty("og:image",image);
    updateMetaProperty("og:url","https://aspicientis-lux.nl" + url);
}

const updateMetaProperty = (property, content ) => {

    const tags = [...document.getElementsByTagName("meta")]
    tags.forEach(tag => {
        const attribute = tag.getAttribute("property");
        if(attribute !== property) return;
        tag.setAttribute("content",content);
    })
}