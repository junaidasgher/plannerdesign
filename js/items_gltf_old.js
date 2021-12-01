$(document).ready(function() {
	var items = [
///Floor_Lamp//////////////////////////////////////////////////////////////////////////////////////////
		{
		  "name": "floor_lamp 1", //ok
		  "model": "models/floor_lamp_3d_glb/floor_lamp_1.glb",
		  "type": "1",
		  "image": "models/floor_lamp_picture/floor_lamp_1.png",
		  "format": "gltf",
		  "meta": {
			"light": true
		  }
		 
		},
		{
		  "name": "floor_lamp 2", //ok
		  "model": "models/floor_lamp_3d_glb/floor_lamp_2.glb",
		  "type": "1",
		  "image": "models/floor_lamp_picture/floor_lamp_2.png",
		  "format": "gltf",
		  "meta": {
			"light": true
		  }
		  
		},
		{
		  "name": "floor_lamp 3", //ok
		  "model": "models/floor_lamp_3d_glb/floor_lamp_3.glb",
		  "type": "1",
		  "image": "models/floor_lamp_picture/floor_lamp_3.png",
		  "format": "gltf",
		  "meta": {
			"light": true
		  }
		  
		},
		{
		  "name": "floor_lamp 4", //ok
		  "model": "models/floor_lamp_3d_glb/floor_lamp_4.glb",
		  "type": "1",
		  "image": "models/floor_lamp_picture/floor_lamp_4.png",
		  "format": "gltf",	
		  "meta": {
			"light": true
			}
		  },
///Floor_Lamp_Option/////////////////////////////////////////////////////////////////////		  
		  {
		  "name": "Floor Lamp Option",//ok
		  "model": "models/floor_lamp_3d_glb/floor_lamp_1.glb",
		  "type": "1",
		  "image": "models/floor_lamp_picture/floor_lamp_5_option.png",
		  "format": "gltf",
		  "meta": {
				"states": [
					{
					  "name": "Floor lamp 2",
					  "model": "models/floor_lamp_3d_glb/floor_lamp_2.glb",			
					},
					{
					  "name": "Floor lamp 3",
					  "model": "models/floor_lamp_3d_glb/floor_lamp_3.glb",
					  "default": true
					},
					{
					  "name": "Floor lamp 4",
					  "model": "models/floor_lamp_3d_glb/floor_lamp_4.glb",
					},
					
				  ]
			}
		  },
///Door////////////////////////////////////////////////////////////////////		
		{
		  "name": "Door 1", //ok
		  "model": "models/door_3d_glb/door_1.glb",
		  "type": "7",
		  "image": "models/door_picture/door_1.png",
		  "format": "gltf",
		},
		{
		  "name": "Door Open 2 ", //ok
		  "model": "models/door_3d_glb/door_2.glb",
		  "type": "7",
		  "image": "models/door_picture/door_2.png",
		  "format": "gltf",
		},
		{
		  "name": "Door 3", //ok
		  "model": "models/door_3d_glb/door_3.glb",
		  "type": "7",
		  "image": "models/door_picture/door_3.png",
		  "format": "gltf",
		},
		{
		  "name": "Door 4", //ok
		  "model": "models/door_3d_glb/door_4.glb",
		  "type": "7",
		  "image": "models/door_picture/door_4.png",
		  "format": "gltf",
		},
		{
		  "name": "No Door 5 ", //ok
		  "model": "models/door_3d_glb/door_5_open.glb",
		  "type": "7",
		  "image": "models/door_picture/door_5_open.png",
		  "format": "gltf",
		},
///Door_Option//////////////////////////////////////////////////////////////////////		
		{
		  "name": "Door Option 5", //ok
		  "model": "models/door_3d_glb/door_1.glb",
		  "type": "7",
		  "image": "models/door_picture/door_6_option.png",
		  "format": "gltf",
		  "meta": {
				"states": [
					{
					  "name": "Open Door 2",
					  "model": "models/door_3d_glb/door_2.glb",			
					},
					{
					  "name": "Door 3",
					  "model": "models/door_3d_glb/door_3.glb",
					  "default": true
					},
					{
					  "name": "Door 4",
					  "model": "models/door_3d_glb/door_4.glb",
					},
					{
					  "name": "Hole in the wall",
					  "model": "models/door_3d_glb/door_5_open.glb",
					},
				  ]
			}
		},
      //////////////////////////////////////////////////////////////		
		{
		  "name": "Door Option Width",
		  "model": "models/door_3d_glb/door_1.glb",
		  "type": "7",
		  "image": "models/door_picture/door_6_option.png",
		  "format": "gltf",
		  "meta": {
			"scale": 1,
			"steps": {//key as min-max
			  "1-100": "models/door_3d_glb/door_3.glb",
			  "101-200": "models/door_3d_glb/door_5_open.glb",
			}
		  }
		},
///Roof_Lamp////////////////////////////////////////////////////////////////////////////////////		
		{
		  "name": "Roof Lamp 1",
		  "model": "models/roof_lamp_3d_glb/lamp_1.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/roof_lamp_1.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}
		},
		{
		  "name": "Roof Lamp 2",
		  "model": "models/roof_lamp_3d_glb/lamp_2.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/roof_lamp_2.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}
		},
		{
		  "name": "Roof Lamp 3",
		  "model": "models/roof_lamp_3d_glb/lamp_3.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/roof_lamp_3.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}
		},
		{
		  "name": "Roof Lamp 4",
		  "model": "models/roof_lamp_3d_glb/lamp_4.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/roof_lamp_4.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}
		},
///Roof_Lamp_Option////////////////////////////////////////////////////////////////
        {
		  "name": "Roof Lamp Option",//ok
		  "model": "models/roof_lamp_3d_glb/lamp_1.glb",
		  "type": "4",
		  "image": "models/roof_lamp_picture/roof_lamp_5_option.png",
		  "format": "gltf",
		  "meta": {
				"states": [
					{
					  "name": "Roof Lamp 1",
					  "model": "models/roof_lamp_3d_glb/lamp_2.glb",			
					},
					{
					  "name": "Roof Lamp 2",
					  "model": "models/roof_lamp_3d_glb/lamp_3.glb",
					  "default": true
					},
					{
					  "name": "Roof Lamp 3",
					  "model": "models/roof_lamp_3d_glb/lamp_4.glb",
					},
					
				  ]
			}
		  },		
///Wall_Lamp////////////////////////////////////////////////////////////////////////////////////		
		{
		  "name": "Wall Lamp 1",
		  "model": "models/wall_lamp_3d_glb/wall_lamp_1.glb",
		  "type": "2",
		  "image": "models/wall_lamp_picture/wall_lamp_1.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}		  			
		},
		{
		  "name": "Wall Lamp 2",
		  "model": "models/wall_lamp_3d_glb/wall_lamp_2.glb",
		  "type": "2",
		  "image": "models/wall_lamp_picture/wall_lamp_2.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}		  
		},
		{
		  "name": "Wall Lamp 3",
		  "model": "models/wall_lamp_3d_glb/wall_lamp_3.glb",
		  "type": "2",
		  "image": "models/wall_lamp_picture/wall_lamp_3.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}		  
		},
		{
		  "name": "Wall Lamp 4",
		  "model": "models/wall_lamp_3d_glb/wall_lamp_4.glb",
		  "type": "2",
		  "image": "models/wall_lamp_picture/wall_lamp_4.png",
		  "format": "gltf",
		  "meta": {
			"light": true
			}		  
		},
///Wall_Lamp_Option/////////////////////////////////////////////////////////////////////////////////////////
        {
		  "name": "Wall Lamp Option", //ok
		  "model": "models/wall_lamp_3d_glb/wall_lamp_1.glb",
		  "type": "2",
		  "image": "models/wall_lamp_picture/wall_lamp_5_option.png",
		  "format": "gltf",
		  "meta": {
				"states": [
					{
					  "name": "Wall Lamp 1",
					  "model": "models/wall_lamp_3d_glb/wall_lamp_1.glb",			
					},
					{
					  "name": "Wall Lamp 2",
					  "model": "models/wall_lamp_3d_glb/wall_lamp_1.glb",
					  "default": true
					},
					{
					  "name": "Wall Lamp 3",
					  "model": "models/wall_lamp_3d_glb/wall_lamp_1.glb",
					},
					
				  ]
			}
		},
///Window/////////////////////////////////////////////////////////////
		{
		  "name": "Windows W-200",
		  "model": "models/windows_3d_glb/window_1.glb",
		  "type": "3",
		  "image": "models/windows_picture/window_1.png",
		  "format": "gltf"
		},
		{
		  "name": "Windows W-140",
		  "model": "models/windows_3d_glb/window_2.glb",
		  "type": "3",
		  "image": "models/windows_picture/window_2.png",
		  "format": "gltf"
		},
		{
		  "name": "Windows W-70",
		  "model": "models/windows_3d_glb/window_3.glb",
		  "type": "3",
		  "image": "models/windows_picture/window_3.png",
		  "format": "gltf"
		},
		{
		  "name": "Windows W-150",
		  "model": "models/windows_3d_glb/window_4.glb",
		  "type": "3",
		  "image": "models/windows_picture/window_4.png",
		  "format": "gltf"
		},
///Window_Option/////////////////////////////////////////////////////////////////////////////////////		
		{
		  "name": "Windows Option",
		  "model": "models/windows_3d_glb/window_1.glb",
		  "type": "3",
		  "image": "models/windows_picture/window_5_option.png",
		  "format": "gltf",
		  "meta": {
				"states": [
					{
					  "name": "Windows W-140",
					  "model": "models/windows_3d_glb/window_2.glb",			
					},
					{
					  "name": "Windows W-70",
					  "model": "models/windows_3d_glb/window_3.glb",
					  "default": true
					},
					{
					  "name": "Windows W-150",
					  "model": "models/windows_3d_glb/window_4.glb",
					},
					
				  ]
			}
		},
///Window_Option_Width//////////////////////////////////////////////////////////////////////////////////////////////	
           {
		  "name": "Windows Option Width",
		  "model": "models/windows_3d_glb/window_3.glb",
		  "type": "3",
		  "image": "models/windows_picture/window_5_option.png",
		  "format": "gltf",
		  "meta": {
			"scale": 1,
			"steps": {//key as min-max
			  "1-70": "models/windows_3d_glb/window_3.glb",
			  "71-140": "models/windows_3d_glb/window_2.glb",
			  "141-200": "models/windows_3d_glb/window_4.glb",
			}
		  }
		},

///Carpet////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		{
		  "name": "Carpet 1",
		  "model": "models/carpet_3d_glb/carpet_1.glb",
		  "type": "8",
		  "image": "models/carpet_picture/carpet_1.png",
		  "format": "gltf"
		},
		{
		  "name": "Carpet 2",
		  "model": "models/carpet_3d_glb/carpet_2.glb",
		  "type": "8",
		  "image": "models/carpet_picture/carpet_2.png",
		  "format": "gltf"
		},
		{
		  "name": "Carpet 3",
		  "model": "models/carpet_3d_glb/carpet_3.glb",
		  "type": "8",
		  "image": "models/carpet_picture/carpet_3.png",
		  "format": "gltf"
		},
		{
		  "name": "Carpet 4",
		  "model": "models/carpet_3d_glb/carpet_4.glb",
		  "type": "8",
		  "image": "models/carpet_picture/carpet_4.png",
		  "format": "gltf"
		},
///Carpet_Option/////////////////////////////////////////////////////////////////////////////////////		
		{
		  "name": "Carpet Option",
		  "model": "models/carpet_3d_glb/carpet_1.glb",
		  "type": "8",
		  "image": "models/carpet_picture/carpet_5_option.png",
		  "format": "gltf",
		  "meta": {
				"states": [
					{
					  "name": "Carpet 1",
					  "model": "models/carpet_3d_glb/carpet_2.glb",			
					},
					{
					  "name": "Carpet 2",
					  "model": "models/carpet_3d_glb/carpet_4.glb",
					  "default": true
					},
					{
					  "name": "Carpet 3",
					  "model": "models/carpet_3d_glb/carpet_4.glb",
					},
					
				  ]
			}
		},
///sofa_picture_etc//////////////////////////////////////////////////////////////////////////////////////////

        
///Sofa////////////////////////////////////		
		{
		  "name": "Sofa 1",
		  "model": "models/sofa_3d_glb/sofa_1.glb",
		  "type": "1",
		  "image": "models/sofa_picture/sofa_1.png",
		  "format": "gltf",
		},
		{
		  "name": "Sofa 2",
		  "model": "models/sofa_3d_glb/sofa_2.glb",
		  "type": "1",
		  "image": "models/sofa_picture/sofa_1.png",
		  "format": "gltf",
		},
	

	  ];
var modelTypesNum = ["1","2","3","7","8","9","4"];

var modelTypesIds = ["floor-items", "wall-items", "in-wall-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items", "roof-items"];

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