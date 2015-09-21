# Static Image Bundle
The Static Image bundle allows you to simply place an image (e.g. a logo or an image containing some copyright information) on top of the map area.

### Sample App ###
http://www.mapapps.de/mapapps/resources/apps/staticimage/index.html

## Configuration ##
The image url and position of the image can be configured inside the app as follows:

```
"staticimage": {
  "ImageController": {
    "imageUrl": "http://conterra.de/img/download/conterra_Logo_RGB_150dpi_3,15cm.jpg",
    "position": {
      "left": 100,
      "top": 100
    },
    "closeableOnClick": false
  }
},
```
