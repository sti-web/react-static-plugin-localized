export default [
  {
    "children": null,
    "getData": () => ({ 'locale': 'de', 'translations': { 'header': 'welcome de' }, 'location': '/' }),
    "path": "/",
    "template": "src/pages/index"
  },
  {
    "children": null,
    "getData": () => ({"locale": "en", "location": "/", "translations": {"header": "welcome en"}}),
    "path": "en/",
    "template": "src/pages/index"
  },
  {
    "children": null,
    "getData": () => (({"locale": "de", "location": "/about", "translations": {"header": "about de"}})),
    "path": "/about",
    "template": "src/pages/about"
  },
  {
    "children": null,
    "getData": () => ({"locale": "en", "location": "/about", "translations": {"header": "about en"}}),
    "path": "en/about",
    "template": "src/pages/about"
  },
  {
    "children": [
      {
        "getData": () => ({"locale": "de", "location": "/stories/post/1", "post": {"body": "post 1 body de", "id": 1, "title": "post 1 title de"}}),
        "path": "/post/1",
        "template": "src/containers/Post"
      },
      {
        "getData": () => ({"locale": "de", "location": "/stories/post/2", "post": {"body": "post 1 body de", "id": 2, "title": "post 1 title de"}}),
        "path": "/post/2",
        "template": "src/containers/Post"
      }
    ],
    "getData": () => ({"locale": "de", "location": "/stories", "posts": [{"body": "post 1 body de", "id": 1, "title": "post 1 title de"}, {"body": "post 1 body de", "id": 2, "title": "post 1 title de"}], "translations": undefined}),
    "path": "/stories",
    "template": "src/pages/stories"
  },
  {
    "children": [
      {
        "getData": () => ({"locale": "en", "location": "/stories/post/1", "post": {"body": "post 1 body en", "id": 1, "title": "post 1 title en"}}),
        "path": "/post/1",
        "template": "src/containers/Post"
      },
      {
        "getData": () => ({"locale": "en", "location": "/stories/post/2", "post": {"body": "post 1 body en", "id": 2, "title": "post 1 title en"}}),
        "path": "/post/2",
        "template": "src/containers/Post"
      }
    ],
    "getData": () => ({"locale": "en", "location": "/stories", "posts": [{"body": "post 1 body en", "id": 1, "title": "post 1 title en"}, {"body": "post 1 body en", "id": 2, "title": "post 1 title en"}], "translations": undefined}),
    "path": "en/stories",
    "template": "src/pages/stories"
  },
  {
    "children": null,
    "getData": () => ({"locale": "de", "location": "/404", "translations": {"header": "404 de"}}),
    "path": "/404",
    "template": "src/pages/404"
  },
  {
    "children": null,
    "getData": () => ({"locale": "en", "location": "/404", "translations": {"header": "404 en"}}),
    "path": "en/404",
    "template": "src/pages/404"
  }
]
