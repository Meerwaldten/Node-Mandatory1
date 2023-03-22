import fs from "fs";
import escape from "escape-html";

function renderPage (page, config={}) {
    const nav = fs.readFileSync("./public/components/nav/nav.html").toString()
    .replace(("$TAB_TITLE"), config.tabTitle || "Welcome!");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

    return nav + page + footer;
}


function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage
}