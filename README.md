# Static Image Bundle
The Static Image bundle allows you to simply place an image (e.g. a logo or an image containing some copyright information) on top of the map area.

### Sample App ###
http://www.mapapps.de/mapapps/resources/apps/staticimage/index.html

## Configuration ##
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
