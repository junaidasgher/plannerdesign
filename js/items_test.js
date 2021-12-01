$(document).ready(function() {
  var items = [   
    {
      "name" : "Closed Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "models/js/closed-door28x80_baked.js",
      "type" : "7",
      "meta":{
        "states": [
          {
            "name": "Open",
            "model": "models/js/open_door.js"
          },
          {
            "name": "Closed",
            "model": "models/js/closed-door28x80_baked.js",
            "default": true
          }
        ]
        /*"states":{
          "Open":"models/js/open_door.js",
          "Closed": "models/js/closed-door28x80_baked.js"
        }*/
      }
    }, 
    {
      "name" : "Open Door",
      "image" : "models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "models/js/open_door.js",
      "type" : "7"
    }, 
    {
		  "name": "Chandelier",
		  "model": "models/gltf/chandelier.gltf",
		  "type": "4",
		  "image": "models/thumbnails/chandelier.png",
		  "format": "gltf",
		  "meta": {
			"light": true
		  }
		}
  ];


  var modelTypesNum = ["1","2","3","7","8","9","4"];
  var modelTypesIds = ["floor-items", "wall-items", "in-wall-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items","roof-items"];
  var itemsDiv = $("#items-wrapper");
  for (var i = 0; i < items.length; i++) 
  {
	var item = items[i];
    itemsDiv = $("#"+modelTypesIds[modelTypesNum.indexOf(item.type)]+"-wrapper");
	var modelformat = (item.format) ?' model-format="'+item.format+'"' : "";
    var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' +' model-meta=\''+ JSON.stringify(item.meta || {}) +'\' model-name="'+ item.name +'"' +' model-url="' +item.model+'"' +' model-type="' +item.type+'"' + modelformat+'>'+'<img src="'+item.image +'" alt="Add Item"  data-dismiss="modal"> '+item.name +'</a></div>';
    itemsDiv.append(html);
  }
});
