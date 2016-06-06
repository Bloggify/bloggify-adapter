
# bloggify-adapter

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bloggify-adapter.svg)](https://www.npmjs.com/package/bloggify-adapter) [![Downloads](https://img.shields.io/npm/dt/bloggify-adapter.svg)](https://www.npmjs.com/package/bloggify-adapter) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> The base class for Bloggify adapters.

## :cloud: Installation

```sh
$ npm i --save bloggify-adapter
```


## :clipboard: Example



```js
const BloggifyAdapter = require("bloggify-adapter");

// Extend a class from the BloggifyAdapter class
class MyAdapter extends BloggifyAdapter {
    getArticleById (id, cb) {
        cb(null, {
            id: id
        });
    }
}

// Create a new instance of this adapter.
let adapter = new MyAdapter();

adapter.getArticleById(123, (err, data) => console.log(err || data));
// => { id: 123 }
```

## :memo: Documentation


### `BloggifyAdapter(bloggify)`
The BloggifyAdapter base class. All the methods are abstract. They should
be overridden in custom adapters.

#### Params
- **Bloggify** `bloggify`: The `Bloggify` instance.

### `getArticleById(id, cb)`
Get an article by id.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `id`: The article id.
- **Function** `cb`: The callback function.

### `getArticles(query, cb)`
Search articles by a query.

**Note this method should be overridden in your custom adapter.**

#### Params
- **Object** `query`: The search query.
- **Function** `cb`: The callback function.

### `createArticle(title, content, custom, cb)`
Create a new article.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `title`: The article title.
- **String** `content`: The article content.
- **Object** `custom`: Custom metadata about the article.
- **Function** `cb`: The callback function.

### `saveArticle(id, title, content, custom, cb)`
Save an article.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `id`: The article id.
- **String** `title`: The article title.
- **String** `content`: The article content.
- **Object** `custom`: Custom metadata about the article.
- **Function** `cb`: The callback function.

### `deleteArticle(id, cb)`
Delete an article.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `id`: The article id.
- **Function** `cb`: The callback function.

### `deleteArticles(ids, cb)`
Delete multiple articles.

**Note this method should be overridden in your custom adapter.**

#### Params
- **Array** `ids`: An array of article ids.
- **Function** `cb`: The callback function.

### `getPageBySlug(slug, cb)`
Get a page by slug.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `slug`: The page slug.
- **Function** `cb`: The callback function.

### `getPages(query, cb)`
Get pages by a query.

**Note this method should be overridden in your custom adapter.**

#### Params
- **Object** `query`: The query.
- **Function** `cb`: The callback function.

### `createPage(title, content, custom, cb)`
Create a page.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `title`: The article title.
- **String** `content`: The article content.
- **Object** `custom`: Custom metadata about the article.
- **Function** `cb`: The callback function.

### `savePage(title, content, custom, cb)`
Save a page.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `title`: The article title.
- **String** `content`: The article content.
- **Object** `custom`: Custom metadata about the article.
- **Function** `cb`: The callback function.

### `deletePage(slug, cb)`
Delete a page.

**Note this method should be overridden in your custom adapter.**

#### Params
- **String** `slug`: The page slug.
- **Function** `cb`: The callback function.

### `deletePages(slugs, cb)`
Delete multiple pages.

**Note this method should be overridden in your custom adapter.**

#### Params
- **Array** `slugs`: An array of page slugs.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
