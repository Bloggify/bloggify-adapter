
# bloggify-adapter

 [![Version](https://img.shields.io/npm/v/bloggify-adapter.svg)](https://www.npmjs.com/package/bloggify-adapter) [![Downloads](https://img.shields.io/npm/dt/bloggify-adapter.svg)](https://www.npmjs.com/package/bloggify-adapter)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-markdown-adapter`](https://github.com/IonicaBizau/bloggify-markdown-adapter#readme)—Markdown adapter for Bloggify.

## :scroll: License

[MIT][license] © [Bloggify][website]

[license]: http://showalicense.com/?fullname=Bloggify%20%3Csupport%40bloggify.org%3E%20(https%3A%2F%2Fbloggify.org)&year=2016#license-mit
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
