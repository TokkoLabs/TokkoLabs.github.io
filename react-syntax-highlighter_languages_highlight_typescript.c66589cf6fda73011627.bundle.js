;(window.webpackJsonp = window.webpackJsonp || []).push([
  [165],
  {
    1676: function (module, exports) {
      module.exports = function (hljs) {
        var KEYWORDS = {
            keyword:
              'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await',
            literal: 'true false null undefined NaN Infinity',
            built_in:
              'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise',
          },
          DECORATOR = { className: 'meta', begin: '@[A-Za-z$_][0-9A-Za-z$_]*' },
          ARGS = {
            begin: '\\(',
            end: /\)/,
            keywords: KEYWORDS,
            contains: [
              'self',
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              hljs.NUMBER_MODE,
            ],
          },
          PARAMS = {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: KEYWORDS,
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              DECORATOR,
              ARGS,
            ],
          },
          NUMBER = {
            className: 'number',
            variants: [
              { begin: '\\b(0[bB][01]+)' },
              { begin: '\\b(0[oO][0-7]+)' },
              { begin: hljs.C_NUMBER_RE },
            ],
            relevance: 0,
          },
          SUBST = {
            className: 'subst',
            begin: '\\$\\{',
            end: '\\}',
            keywords: KEYWORDS,
            contains: [],
          },
          HTML_TEMPLATE = {
            begin: 'html`',
            end: '',
            starts: {
              end: '`',
              returnEnd: !1,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST],
              subLanguage: 'xml',
            },
          },
          CSS_TEMPLATE = {
            begin: 'css`',
            end: '',
            starts: {
              end: '`',
              returnEnd: !1,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST],
              subLanguage: 'css',
            },
          },
          TEMPLATE_STRING = {
            className: 'string',
            begin: '`',
            end: '`',
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          }
        return (
          (SUBST.contains = [
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            TEMPLATE_STRING,
            NUMBER,
            hljs.REGEXP_MODE,
          ]),
          {
            aliases: ['ts'],
            keywords: KEYWORDS,
            contains: [
              { className: 'meta', begin: /^\s*['"]use strict['"]/ },
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              HTML_TEMPLATE,
              CSS_TEMPLATE,
              TEMPLATE_STRING,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              NUMBER,
              {
                begin:
                  '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                keywords: 'return throw case',
                contains: [
                  hljs.C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  hljs.REGEXP_MODE,
                  {
                    className: 'function',
                    begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>',
                    returnBegin: !0,
                    end: '\\s*=>',
                    contains: [
                      {
                        className: 'params',
                        variants: [
                          { begin: hljs.IDENT_RE },
                          { begin: /\(\s*\)/ },
                          {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: KEYWORDS,
                            contains: [
                              'self',
                              hljs.C_LINE_COMMENT_MODE,
                              hljs.C_BLOCK_COMMENT_MODE,
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
                relevance: 0,
              },
              {
                className: 'function',
                begin: 'function',
                end: /[\{;]/,
                excludeEnd: !0,
                keywords: KEYWORDS,
                contains: [
                  'self',
                  hljs.inherit(hljs.TITLE_MODE, {
                    begin: '[A-Za-z$_][0-9A-Za-z$_]*',
                  }),
                  PARAMS,
                ],
                illegal: /%/,
                relevance: 0,
              },
              {
                beginKeywords: 'constructor',
                end: /\{/,
                excludeEnd: !0,
                contains: ['self', PARAMS],
              },
              {
                begin: /module\./,
                keywords: { built_in: 'module' },
                relevance: 0,
              },
              { beginKeywords: 'module', end: /\{/, excludeEnd: !0 },
              {
                beginKeywords: 'interface',
                end: /\{/,
                excludeEnd: !0,
                keywords: 'interface extends',
              },
              { begin: /\$[(.]/ },
              { begin: '\\.' + hljs.IDENT_RE, relevance: 0 },
              DECORATOR,
              ARGS,
            ],
          }
        )
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_typescript.c66589cf6fda73011627.bundle.js.map
