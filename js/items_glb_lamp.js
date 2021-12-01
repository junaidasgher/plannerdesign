$(document).ready(function() {
	var items = [
		{
		  "name": "Lamp 1",
		  "model": "models/roof_lamp_3d_gltf/lamp_1.gltf",
		  "type": "4",
		  "image": "models/roof_lamp_picture/lamp_1.png",
		  "format": "gltf"
		},
		{
		  "name": "Lamp 2",
		  "model": "models/roof_lamp_3d_glb/lamp_2.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/lamp_2.png",
		  "format": "gltf",
		   "meta": {
			"light": true}
		},
		{
		  "name": "Lamp 3",
		  "model": "models/roof_lamp_3d_glb/lamp_3.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/lamp_3.png",
		  "format": "gltf",
		   "meta": {
			"light": true}
		},
		{
		  "name": "Ceiling Fan 4",
		  "model": "models/roof_lamp_3d_glb/lamp_4.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/lamp_4.png",
		  "format": "gltf"
		},
		{
			"name": "Fan",
			"model": "models/roof_lamp_3d_gltf/ceilingFan.gltf",
			"type": "4",
			"image": "models/roof_lamp_picture/ceilingFan.png",
			"format": "gltf"			
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

	var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' +' model-meta=\''+ JSON.stringify(item.meta || {}) +'\' model-name="'+ item.name +'"' +' model-url="' +item.model+'"' +' model-type="' +item.type+'"' + modelformat+'>'+'<img src="'+item.image +'" alt="Add Item"   data-dismiss="modal" 	> '+item.name +'</a></div>';

	itemsDiv.append(html);

}
});