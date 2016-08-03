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
    constructor (bloggify) {
        this.bloggify = bloggify;
        this.parseOpts = bloggify.options.adapter.parse;
        this.paths = bloggify.options.adapter.paths;
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
