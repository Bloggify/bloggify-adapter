"use strict";

const Err = require("err");

const NOT_IMPLEMENTED_ERROR = new Err("This method was not implemented. Please override it in your adapter.", {
    code: "NOT_YET_IMPLEMENTED"
});

module.exports = class BloggifyAdapter {

    /**
     * BloggifyAdapter
     * The BloggifyAdapter base class. All the methods are abstract. They should
     * be overridden in custom adapters.
     *
     * @name BloggifyAdapter
     * @function
     * @param {Bloggify} bloggify The `Bloggify` instance.
     */
    constructor (options) {
        this.bloggify = Bloggify
        this.options = options
        this._theme = Promise.resolve()

        // Routes
        const routes = options.routes
        if (routes && options.theme) {
            const Viewer = require("bloggify-viewer")
            this._theme = this._theme.then(() => Bloggify.initPlugin(options.theme).then(() => {
                Bloggify.log("Initialized the theme.")
            }))

            if (routes.articles) {
                routes.articles = routes.articles.replace(/\/$/, "");
            }

            if (routes.home && routes.articles === "/") {
                Bloggify.log("You cannot have a articles page same with with a site page on the home page.", "warn");
            }

            let blogPageFn = ctx => {
                let pageNumber = ctx.params.pageNumber = parseInt(ctx.params.pageNumber);

                if (pageNumber < 1 || isNaN(pageNumber)) {
                    return ctx.next();
                }

                Viewer.emit("blog_page", ctx);
            };

            let sitePageUrl = "/:sitePage";
            if (routes.articles !== "/") {
                sitePageUrl += "?";
            }

            // Blog pages
            if (typeof routes.articles === "string") {
                // Article pages
                let articleHandler = ctx => {
                    let articleId = ctx.params.articleId = parseInt(ctx.params.articleId);
                    if (articleId < 1 || isNaN(articleId)) {
                        //if (ctx.path === routes.articles && !routes.blog) {
                        //    return ctx.redirect("/");
                        //}
                        return ctx.next();
                    }

                    Viewer.emit("article", ctx);
                };

                Bloggify.server.addPage(`${routes.articles}/:articleId-:articleSlug?`, articleHandler);
                Bloggify.server.addPage(`${routes.articles}/:articleId`, articleHandler);
                Bloggify.server.addPage(`${routes.articles}/page/:pageNumber`, blogPageFn);

                Bloggify.server.addPage(routes.articles, ctx => {
                    ctx.params.pageNumber = 1;
                    blogPageFn(ctx);
                });
            }

            // Site pages
            Bloggify.server.addPage(sitePageUrl, ctx => {
                if (!ctx.params.sitePage) {
                    ctx.params.sitePage = routes.home;
                }
                Viewer.emit("site_page", ctx);
            });
        }
    }

    /**
     * getArticleById
     * Get an article by id.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name getArticleById
     * @function
     * @param {String} id The article id.
     * @param {Function} cb The callback function.
     */
    getArticleById (id, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * getArticles
     * Search articles by a query.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name getArticles
     * @function
     * @param {Object} query The search query.
     * @param {Function} cb The callback function.
     */
    getArticles (query, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * createArticle
     * Create a new article.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name createArticle
     * @function
     * @param {String} title The article title.
     * @param {String} content The article content.
     * @param {Object} custom Custom metadata about the article.
     * @param {Function} cb The callback function.
     */
    createArticle (title, content, custom, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * saveArticle
     * Save an article.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name saveArticle
     * @function
     * @param {String} id The article id.
     * @param {String} title The article title.
     * @param {String} content The article content.
     * @param {Object} custom Custom metadata about the article.
     * @param {Function} cb The callback function.
     */
    saveArticle (id, title, content, custom, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * deleteArticle
     * Delete an article.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name deleteArticle
     * @function
     * @param {String} id The article id.
     * @param {Function} cb The callback function.
     */
    deleteArticle (id, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * deleteArticles
     * Delete multiple articles.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name deleteArticles
     * @function
     * @param {Array} ids An array of article ids.
     * @param {Function} cb The callback function.
     */
    deleteArticles (ids, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * getPageBySlug
     * Get a page by slug.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name getPageBySlug
     * @function
     * @param {String} slug The page slug.
     * @param {Function} cb The callback function.
     */
    getPageBySlug (slug, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * getPages
     * Get pages by a query.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name getPages
     * @function
     * @param {Object} query The query.
     * @param {Function} cb The callback function.
     */
    getPages (query, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * createPage
     * Create a page.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name createPage
     * @function
     * @param {String} title The article title.
     * @param {String} content The article content.
     * @param {Object} custom Custom metadata about the article.
     * @param {Function} cb The callback function.
     */
    createPage (title, content, custom, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * savePage
     * Save a page.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name savePage
     * @function
     * @param {String} title The article title.
     * @param {String} content The article content.
     * @param {Object} custom Custom metadata about the article.
     * @param {Function} cb The callback function.
     */
    savePage (title, content, custom, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * deletePage
     * Delete a page.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name deletePage
     * @function
     * @param {String} slug The page slug.
     * @param {Function} cb The callback function.
     */
    deletePage (slug, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }

    /**
     * deletePages
     * Delete multiple pages.
     *
     * **Note this method should be overridden in your custom adapter.**
     *
     * @name deletePages
     * @function
     * @param {Array} slugs An array of page slugs.
     * @param {Function} cb The callback function.
     */
    deletePages (slugs, cb) {
        throw NOT_IMPLEMENTED_ERROR;
    }
}
