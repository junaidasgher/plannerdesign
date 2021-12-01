$(document).ready(function() {

    var items = [
        ///Floor_Lamp//////////////////////////////////////////////////////////////////////////////////////////
        {
            "name": "floor_lamp 1", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_1.glb",
            "type": "1",
            
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_1.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "55",
            }
            
        },
        {
            "name": "floor_lamp 1", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_1.glb",
            "type": "1",
            
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_1.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": " 51",
            }
           
        },
        {
            "name": "floor_lamp 2", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_2.glb",
            "type": "1",
           
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_2.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "55",
            }

        },
        {
            "name": "floor_lamp 3", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_3.glb",
            "type": "1",
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_3.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "55",
            }

        },
        {
            "name": "floor_lamp 4", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_4.glb",
            "type": "1",
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_4.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "55",
            }
        },
        ///Floor_Lamp_Option/////////////////////////////////////////////////////////////////////		  
        {
            "name": "Floor Lamp Option", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_1.glb",
            "type": "1",
           
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_5_option.png",
            "format": "gltf",
            "meta": {
                "states": [{
                        "name": "Floor lamp 2",
                        "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_2.glb",
                    },
                    {
                        "name": "Floor lamp 3",
                        "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_3.glb",
                        "default": true
                    },
                    {
                        "name": "Floor lamp 4",
                        "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_4.glb",
                    },
                    

                ],
                "location": "55",
            }
        },
        ///Door////////////////////////////////////////////////////////////////////		
        {
            "name": "Door 1", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_1.glb",
            "type": "5",
           
            "image": "models/3d_zoli_new/door_picture/door_1.png",
            "format": "gltf",
            "meta": {
                "location": "50"
            }
        },
        {
            "name": "Door Open 2 ", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_2.glb",
            "type": "5",

            "image": "models/3d_zoli_new/door_picture/door_2.png",
            "format": "gltf",
            "meta": {
                "location": "50"
            }
        },
        {
            "name": "Door 3", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_3.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_3.png",
            "format": "gltf",
            "meta": {
                "location": "50"
            }
        },
        {
            "name": "Door 4", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_4.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_4.png",
            "format": "gltf",
            "meta": {
                "location": "50"
            }
        },
        {
            "name": "No Door 5 ", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_5_open.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_5_open.png",
            "format": "gltf",
            "meta": {
                "location": "50"
            }
        },
        ///Door_Option//////////////////////////////////////////////////////////////////////		
        {
            "name": "Door Option 5", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_1.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_6_option.png",
            "format": "gltf",
            "meta": {
                "states": [{
                        "name": "Open Door 2",
                        "model": "models/3d_zoli_new/door_3d_glb/door_2.glb",
                    },
                    {
                        "name": "Door 3",
                        "model": "models/3d_zoli_new/door_3d_glb/door_3.glb",
                        "default": true
                    },
                    {
                        "name": "Door 4",
                        "model": "models/3d_zoli_new/door_3d_glb/door_4.glb",
                    },
                    {
                        "name": "Hole in the wall",
                        "model": "models/3d_zoli_new/door_3d_glb/door_5_open.glb",
                    },
                ],
                "location": "50",
            }
        },
        //////////////////////////////////////////////////////////////		
        {
            "name": "Door Option Width",
            "model": "models/3d_zoli_new/door_3d_glb/door_1.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_6_option.png",
            "format": "gltf",
            "meta": {
                "scale": 1,
                "steps": { //key as min-max
                    "1-100": "models/3d_zoli_new/door_3d_glb/door_3.glb",
                    "101-200": "models/3d_zoli_new/door_3d_glb/door_5_open.glb",
                },
                "location": "50",
            }
            
        },
        ///Roof_Lamp////////////////////////////////////////////////////////////////////////////////////		
        {
            "name": "Roof Lamp 1",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_1.glb",
            "type": "4",
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_1.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "54",
            }
        },
        {
            "name": "Roof Lamp 2",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_2.glb",
            "type": "4",
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_2.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "54",
            }
        },
        {
            "name": "Roof Lamp 3",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_3.glb",
            "type": "4",
            
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_3.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "54",
            }
        },
        {
            "name": "Roof Lamp 4",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_4.glb",
            "type": "4",
           
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_4.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "54",
            }
        },
        ///Roof_Lamp_Option////////////////////////////////////////////////////////////////
        {
            "name": "Roof Lamp Option", //ok
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_1.glb",
            "type": "4",
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_5_option.png",
            "format": "gltf",
            "meta": {
                "states": [{
                        "name": "Roof Lamp 1",
                        "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_2.glb",
                    },
                    {
                        "name": "Roof Lamp 2",
                        "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_3.glb",
                        "default": true
                    },
                    {
                        "name": "Roof Lamp 3",
                        "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_4.glb",
                    },

                ],
                "location": "54",
            }
        },
        ///Wall_Lamp////////////////////////////////////////////////////////////////////////////////////		
        {
            "name": "Wall Lamp 1",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_1.glb",
            "type": "2",
         
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_1.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "49",
            }
        },
        {
            "name": "Wall Lamp 2",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_2.glb",
            "type": "2",
            
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_2.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "49",
            }
        },
        {
            "name": "Wall Lamp 3",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_3.glb",
            "type": "2",
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_3.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "49",
            }
        },
        {
            "name": "Wall Lamp 4",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_4.glb",
            "type": "2",
           
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_4.png",
            "format": "gltf",
            "meta": {
                "light": true,
                "location": "49",
            }
        },
        ///Wall_Lamp_Option/////////////////////////////////////////////////////////////////////////////////////////
        {
            "name": "Wall Lamp Option", //ok
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_1.glb",
            "type": "2",
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_5_option.png",
            "format": "gltf",
            "meta": {
                "states": [{
                        "name": "Wall Lamp 1",
                        "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_1.glb",
                    },
                    {
                        "name": "Wall Lamp 2",
                        "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_1.glb",
                        "default": true
                    },
                    {
                        "name": "Wall Lamp 3",
                        "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_1.glb",
                    },

                ],
                "location": "49",
            }
        },
        ///Window/////////////////////////////////////////////////////////////
        {
            "name": "Windows W-200",
            "model": "models/3d_zoli_new/windows_3d_glb/window_1.glb",
            "type": "3",
            
            "image": "models/3d_zoli_new/windows_picture/window_1.png",
            "format": "gltf",
            "meta":{
                "location": "50",
            }
        },
        {
            "name": "Windows W-140",
            "model": "models/3d_zoli_new/windows_3d_glb/window_2.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_2.png",
            "format": "gltf",
            "meta":{
                "location": "50",
            }
        },
        {
            "name": "Windows W-70",
            "model": "models/3d_zoli_new/windows_3d_glb/window_3.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_3.png",
            "format": "gltf",
            "meta":{
                "location": "50",
            }
        },
        {
            "name": "Windows W-150",
            "model": "models/3d_zoli_new/windows_3d_glb/window_4.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_4.png",
            "format": "gltf",
            "meta":{
                "location": "50",
            }
        },
        ///Window_Option/////////////////////////////////////////////////////////////////////////////////////		
        {
            "name": "Windows Option",
            "model": "models/3d_zoli_new/windows_3d_glb/window_1.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_5_option.png",
            "format": "gltf",
            "meta": {
                "states": [{
                        "name": "Windows W-140",
                        "model": "models/3d_zoli_new/windows_3d_glb/window_2.glb",
                    },
                    {
                        "name": "Windows W-70",
                        "model": "models/3d_zoli_new/windows_3d_glb/window_3.glb",
                        "default": true
                    },
                    {
                        "name": "Windows W-150",
                        "model": "models/3d_zoli_new/windows_3d_glb/window_4.glb",
                    },

                ],
                "meta":{
                    "location": "50",
                }
            }
        },
        ///Window_Option_Width//////////////////////////////////////////////////////////////////////////////////////////////	
        {
            "name": "Windows Option Width",
            "model": "models/3d_zoli_new/windows_3d_glb/window_3.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_5_option.png",
            "format": "gltf",
            "meta": {
                "scale": 1,
                "steps": { //key as min-max
                    "1-70": "models/3d_zoli_new/windows_3d_glb/window_3.glb",
                    "71-140": "models/3d_zoli_new/windows_3d_glb/window_2.glb",
                    "141-200": "models/3d_zoli_new/windows_3d_glb/window_4.glb",
                },
                "meta":{
                    "location": "50",
                }
            }
        },

        ///Carpet////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            "name": "Carpet 1",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_5.glb",
            "type": "6",
            
            "image": "models/3d_zoli_new/carpet_picture/carpet_5.png",
            "format": "gltf",
            "meta":{
                "location": "52",
            }
        },
        {
            "name": "Carpet 2",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_6.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_6.png",
            "format": "gltf",
            "meta":{
                "location": "52",
            }
        },
        {
            "name": "Carpet 3",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_7.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_7.png",
            "format": "gltf",
            "meta":{
                "location": "52",
            }
        },
        {
            "name": "Carpet 4",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_4.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_4.png",
            "format": "gltf",
            "meta":{
                "location": "52",
            }
        },
        ///Carpet_Option/////////////////////////////////////////////////////////////////////////////////////		
        {
            "name": "Carpet Option",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_1.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_5_option.png",
            "format": "gltf",
            "meta": {
                "states": [{
                        "name": "Carpet 1",
                        "model": "models/3d_zoli_new/carpet_3d_glb/carpet_2.glb",
                    },
                    {
                        "name": "Carpet 2",
                        "model": "models/3d_zoli_new/carpet_3d_glb/carpet_4.glb",
                        "default": true
                    },
                    {
                        "name": "Carpet 3",
                        "model": "models/3d_zoli_new/carpet_3d_glb/carpet_4.glb",
                    },

                ],
                "location": "52",
            }
        },

        ///TV_cabinet////////////////////////////////////		

        {
            "name": "TV Cabinet 1",
            "model": "models/3d_zoli_new/tv_cabinet_3d_glb/tv_cabinet_1.gltf",
            "type": "1",
            
            "image": "models/3d_zoli_new/tv_cabinet_picture/tv_cabinet_1.png",
            "format": "gltf",
            "meta": {
                "location": "55",
            }
        },
        ///Chair////////////////////////////////////////////////////////////////////
        {
            "name": "Chair 1",
            "model": "models/3d_zoli_new/chair_3d_glb/chair_1.glb",
            "type": "1",
            "image": "models/3d_zoli_new/chair_picture/chair_1.png",
            "format": "gltf",
            "meta": {
                "location": "55",
            }
        },
        {
            "name": "Chair 1",
            "model": "models/3d_zoli_new/chair_3d_glb/chair_1.glb",
            "type": "1",
            "image": "models/3d_zoli_new/chair_picture/chair_1.png",
            "format": "gltf",
            "meta": {
                "location": "Bb10",
            }
        },
        ////Cabinet category////////////////////
        {
            "id": "b", 
            "name": "Kitchen", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Living", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Bedroom", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Dressing", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Bathroom", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Office", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Entrance Hall", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        {
            "id": "b", 
            "name": "Small Furniture", 
            "image": "images/rooms/roof-items.jpg",
            "meta": {
                "location": "504",
            }
        },
        ///Cabinets elements///////////////////////////////////////////////////////////			
        

    ];




    var modelTypesNum = ["0", "1", "2", "3", "4", "5", "6","7","8"];
    var modelLocationNum = ["49", "50", "51", "52", "53", "54", "55","504","Bb10"];
    var modelTypesIds = ["Aa", "a1", "a2", "a3", "a4", "a5", "a6","b","B"];


    for (var j = 0; j < modelTypesIds.length; j++) {
        var html = '<div id="' + modelTypesIds[modelTypesNum[j]] + '-wrapper" class="common_class" style="display:none;"></div>';
        $("#CFoursBoxes1-items").append(html);
        for (var i = 0; i < items.length; i++) {

            var item = items[i];
            //alert(modelLocationNum[j]);
            if (item.meta.location == modelLocationNum[j]) {

                // modelTypesIds.search(modelTypesNum);
                var itemdivinner = $("#" + modelTypesIds[modelLocationNum.indexOf(item.meta.location)] + "-wrapper");

                var modelformat = (item.format) ? ' model-format="' + item.format + '"' : "";

                // alert(modelTypesNum[i]);
                if( modelTypesIds[modelLocationNum.indexOf(item.meta.location)]=='b'){
                    var itemhtml = '<div class="col-sm-6"><div class="float-left-eight-component">' + '<a class="thumbnail add-item items"' + ' model-meta=\'' + JSON.stringify(item.meta || {}) + '\' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item" data-dismiss="modal" onclick="show_leftbar(\'' + item.id + '\')"><span class="items-title"> ' + item.name + '</span></a></div></div>'
                }
                else{
                    var itemhtml = '<div class="col-sm-6"><div class="float-left-eight-component">' + '<a class="thumbnail add-item items"' + ' model-meta=\'' + JSON.stringify(item.meta || {}) + '\' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item" data-dismiss="modal"><span class="items-title"> ' + item.name + '</span></a></div></div>'
                }
                

                itemdivinner.append(itemhtml);
            }
        }
        //html += '</div>';

    }
});


$(document).ready(function() {
    var leftaitems = [{
            "id": "Aa", 
            "name": "usi", 
            "image": "images/rooms/floor-items.jpg",
            "location": "a"
        },
        {
            "id": "a1", 
            "name": "windows", 
            "image": "images/rooms/wall-items.jpg",
            "location": "a"
        },
        {
            "id": "a2", 
            "name": "electric", 
            "image": "images/rooms/in-wall-items.jpg",
            "location": "a"
        },
        {
            "id": "a3", 
            "name": "radiators",
            "image": "images/rooms/in-wall-floor-items.jpg",
            "location": "a"
        },
        {
            "id": "a4", 
            "name": "candelabre", 
            "image": "images/rooms/on-floor-items.jpg",
            "location": "a"
        },
        {
            "id": "a5", 
            "name": "water elements", 
            "image": "images/rooms/wall-floor-items.jpg",
            "location": "a"
        },
        {
            "id": "a6", 
            "name": "Thermal power", 
            "image": "images/rooms/roof-items.jpg",
            "location": "a"
        },
        {
            "id": "Bb", 
            "name": "usi", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b1", 
            "name": "windows", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b2", 
            "name": "electric", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b3", 
            "name": "radiators", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b4", 
            "name": "candelabre", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b5", 
            "name": "Water Elements", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b6", 
            "name": "Thermal Power", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "b7", 
            "name": "Small Furniture", 
            "image": "images/rooms/roof-items.jpg",
            "location": "b"
        },
        {
            "id": "Bb10", 
            "name": "sink mask", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb"
        },
        {
            "id": "Bb11", 
            "name": "cabinets with drawers", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb"
        },
        {
            "id": "Bb12", 
            "name": "cabinets with doors", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb"
        },
        {
            "id": "Bb20", 
            "name": "cabinets with doors", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb2"
        },
        {
            "id": "Bb22", 
            "name": "cabinets with mechanisms", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb2"
        },
        {
            "id": "Bb23", 
            "name": "doors with cabinets", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb2"
        },
        {
            "id": "Bb24", 
            "name": "Nuts & Bolts", 
            "image": "images/rooms/roof-items.jpg",
            "location": "Bb2"
        },
    ];
    // var bSubCategories = [
    //     {
    //         "id": "sc1", 
    //         "name": "Lower Bodies", 
    //         "image": "images/rooms/roof-items.jpg",
    //         "location": "Bb"
    //     },
    //     {
    //         "id": "sc2", 
    //         "name": "Supended Bodies", 
    //         "image": "images/rooms/roof-items.jpg",
    //         "location": "Bb"
    //     },
    // ];
    var outDiv = ["a", "b", "c", "d","Bb","Bb2"];
    var modelTypesclasses = ["Aa-item-boxes", "a1-item-boxes", "a2-item-boxes", "a3-item-boxes", "a4-item-boxes", "a5-item-boxes", "a6-item-boxes", "Bb-item-boxes", "b1-item-boxes", "b2-item-boxes", "b3-item-boxes", "b4-item-boxes", "b5-item-boxes", "b6-item-boxes", "b7-item-boxes", "Bb10-item-boxes", "Bb11-item-boxes", "Bb12-item-boxes", "Bb21-item-boxes", "Bb22-item-boxes", "Bb23-item-boxes", "Bb24-item-boxes"];
    for (var i= 0; i<outDiv.length; i++){
        // if(subCategories.length>0){
            
        // }
        $("#left-content-sidebar").append('<div class="left-sidebar-items desktop-left-sidebar-items ipad-left-sidebar-items" id="all-'+outDiv[i]+'-category" style="display:none;"> </div>');
        
       // var num = 1;
        for (var j = 0; j < modelTypesclasses.length; j++) {
            var Litem = leftaitems[j];
            if(Litem.location==outDiv[i]){
            var itemdivinner = $("#all-"+outDiv[i]+"-category");

            var itemhtml = '<div class="' + modelTypesclasses[j] + ' items-two panel-button" onclick="show_items(\'' + Litem.id + '\')"> <img src="' + Litem.image + '" class="left-first-box hovereffect left-box-icons"> <span class="c-one-titles">' + Litem.name + '</span></div>'
            itemdivinner.append(itemhtml);
            //num++;
            }
        }

    }
    
    //html += '</div>';

});