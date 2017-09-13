## Documentation

You can see below the API reference of this module.

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

