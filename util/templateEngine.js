import fs from "fs";

function renderPage (page, config={}) {
    const nav = fs.readFileSync("./public/components/nav/nav.html").toString()
    .replace(("$TAB_TITLE"), config.tabTitle || "Welcome!")

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

    return nav + page + footer;
}

function renderLoginPage(page, config={}) {
    const nav = fs.readFileSync("./public/components/nav/navLogin.html").toString()
    .replace(("$TAB_TITLE"), config.tabTitle || "Welcome, please log in")

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
    return nav + page + footer;
}


function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage,
    renderLoginPage
}