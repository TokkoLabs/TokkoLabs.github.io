;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    1551: function (module, exports) {
      module.exports = function (hljs) {
        return {
          keywords: 'dsconfig',
          contains: [
            {
              className: 'keyword',
              begin: '^dsconfig',
              end: '\\s',
              excludeEnd: !0,
              relevance: 10,
            },
            {
              className: 'built_in',
              begin: '(list|create|get|set|delete)-(\\w+)',
              end: '\\s',
              excludeEnd: !0,
              illegal: '!@#$%^&*()',
              relevance: 10,
            },
            {
              className: 'built_in',
              begin: '--(\\w+)',
              end: '\\s',
              excludeEnd: !0,
            },
            { className: 'string', begin: /"/, end: /"/ },
            { className: 'string', begin: /'/, end: /'/ },
            {
              className: 'string',
              begin: '[\\w-?]+:\\w+',
              end: '\\W',
              relevance: 0,
            },
            {
              className: 'string',
              begin: '\\w+-?\\w+',
              end: '\\W',
              relevance: 0,
            },
            hljs.HASH_COMMENT_MODE,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_dsconfig.c66589cf6fda73011627.bundle.js.map
