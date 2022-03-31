const settings = {
  "name": "toolkit2022",
  "state": {
    "frontity": {
      "url": "http://toolkit.hispanicstargoodbox.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "toolkit",
              "/toolkit/"
            ],
            [
              "women",
              "/gendero/women/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://toolkit.hispanicstargoodbox.com/wp-json",
          "postTypes": [{
            type: "toolkit",
            endpoint: "toolkit",
            archive: "/toolkit"
          }],
          "taxonomies": [{
            taxonomy: "gendero",
            endpoint: "gendero",
            postTypeEndpoint: "toolkit",
            params: {
              per_page: 1,
              _embed: true
            }
          }],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
