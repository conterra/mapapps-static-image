**This bundle will no longer be maintained and removed in the future, as the map.apps core bundle "banner" can be used to place a static image in an app.**

# Static Image Bundle
The Static Image bundle allows you to simply place an image (e.g. a logo or an image containing some copyright information) on top of the map area.

Installation Guide
------------------
The image url and position of the image can be configured inside the app as follows:

```
"staticimage": {
  "ImageController": {
    "imageUrl": "http://www.conterra.de/~/media/conterra/images/download/conterralogorgb300dpi425cm.ashx",
    "position": {
      "left": "100",
      "top": "100",
      "unit": "pixels"
    },
    "closeableOnClick": true
  }
}
```
