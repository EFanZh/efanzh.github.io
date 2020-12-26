# Use CommonMark on GitHub pages

Turns out that besides [kramdown](https://kramdown.gettalong.org), GitHub Pages also supports `gfm` as a markdown
engine. The `gfm` markdown is based on [jekyll-commonmark-ghpages](https://github.com/github/jekyll-commonmark-ghpages),
which uses a customized CommonMark parser that supports [GitHub Flavored Markdown](https://github.github.com/gfm/).

To use `gfm` markdown engine, add the following line to your `_config.yml`.

```yaml
markdown: gfm
```
