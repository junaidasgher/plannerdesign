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
                "light": true
            }

        },
        {
            "name": "floor_lamp 2", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_2.glb",
            "type": "1",
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_2.png",
            "format": "gltf",
            "meta": {
                "light": true
            }

        },
        {
            "name": "floor_lamp 3", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_3.glb",
            "type": "1",
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_3.png",
            "format": "gltf",
            "meta": {
                "light": true
            }

        },
        {
            "name": "floor_lamp 4", //ok
            "model": "models/3d_zoli_new/floor_lamp_3d_glb/floor_lamp_4.glb",
            "type": "1",
            "image": "models/3d_zoli_new/floor_lamp_picture/floor_lamp_4.png",
            "format": "gltf",
            "meta": {
                "light": true
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

                ]
            }
        },
        ///Door////////////////////////////////////////////////////////////////////		
        {
            "name": "Door 1", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_1.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_1.png",
            "format": "gltf",
        },
        {
            "name": "Door Open 2 ", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_2.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_2.png",
            "format": "gltf",
        },
        {
            "name": "Door 3", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_3.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_3.png",
            "format": "gltf",
        },
        {
            "name": "Door 4", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_4.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_4.png",
            "format": "gltf",
        },
        {
            "name": "No Door 5 ", //ok
            "model": "models/3d_zoli_new/door_3d_glb/door_5_open.glb",
            "type": "5",
            "image": "models/3d_zoli_new/door_picture/door_5_open.png",
            "format": "gltf",
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
                ]
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
                }
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
                "light": true
            }
        },
        {
            "name": "Roof Lamp 2",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_2.glb",
            "type": "4",
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_2.png",
            "format": "gltf",
            "meta": {
                "light": true
            }
        },
        {
            "name": "Roof Lamp 3",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_3.glb",
            "type": "4",
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_3.png",
            "format": "gltf",
            "meta": {
                "light": true
            }
        },
        {
            "name": "Roof Lamp 4",
            "model": "models/3d_zoli_new/roof_lamp_3d_glb/lamp_4.glb",
            "type": "4",
            "image": "models/3d_zoli_new/roof_lamp_picture/roof_lamp_4.png",
            "format": "gltf",
            "meta": {
                "light": true
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

                ]
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
                "light": true
            }
        },
        {
            "name": "Wall Lamp 2",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_2.glb",
            "type": "2",
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_2.png",
            "format": "gltf",
            "meta": {
                "light": true
            }
        },
        {
            "name": "Wall Lamp 3",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_3.glb",
            "type": "2",
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_3.png",
            "format": "gltf",
            "meta": {
                "light": true
            }
        },
        {
            "name": "Wall Lamp 4",
            "model": "models/3d_zoli_new/wall_lamp_3d_glb/wall_lamp_4.glb",
            "type": "2",
            "image": "models/3d_zoli_new/wall_lamp_picture/wall_lamp_4.png",
            "format": "gltf",
            "meta": {
                "light": true
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

                ]
            }
        },
        ///Window/////////////////////////////////////////////////////////////
        {
            "name": "Windows W-200",
            "model": "models/3d_zoli_new/windows_3d_glb/window_1.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_1.png",
            "format": "gltf"
        },
        {
            "name": "Windows W-140",
            "model": "models/3d_zoli_new/windows_3d_glb/window_2.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_2.png",
            "format": "gltf"
        },
        {
            "name": "Windows W-70",
            "model": "models/3d_zoli_new/windows_3d_glb/window_3.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_3.png",
            "format": "gltf"
        },
        {
            "name": "Windows W-150",
            "model": "models/3d_zoli_new/windows_3d_glb/window_4.glb",
            "type": "3",
            "image": "models/3d_zoli_new/windows_picture/window_4.png",
            "format": "gltf"
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

                ]
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
                }
            }
        },

        ///Carpet////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            "name": "Carpet 1",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_5.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_5.png",
            "format": "gltf"
        },
        {
            "name": "Carpet 2",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_6.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_6.png",
            "format": "gltf"
        },
        {
            "name": "Carpet 3",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_7.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_7.png",
            "format": "gltf"
        },
        {
            "name": "Carpet 4",
            "model": "models/3d_zoli_new/carpet_3d_glb/carpet_4.glb",
            "type": "6",
            "image": "models/3d_zoli_new/carpet_picture/carpet_4.png",
            "format": "gltf"
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

                ]
            }
        },

        ///TV_cabinet////////////////////////////////////		

        {
            "name": "TV Cabinet 1",
            "model": "models/3d_zoli_new/tv_cabinet_3d_glb/tv_cabinet_1.gltf",
            "type": "1",
            "image": "models/3d_zoli_new/tv_cabinet_picture/tv_cabinet_1.png",
            "format": "gltf",
        },
        ///Chair////////////////////////////////////////////////////////////////////
        {
            "name": "Chair 1",
            "model": "models/3d_zoli_new/chair_3d_glb/chair_1.glb",
            "type": "1",
            "image": "models/3d_zoli_new/chair_picture/chair_1.png",
            "format": "gltf",
        },
        ///Table///////////////////////////////////////////////////////////			
        {
            "name": "Table 1",
            "model": "models/3d_zoli_new/table_3d_glb/table_1.glb",
            "type": "1",
            "image": "models/3d_zoli_new/table_picture/table_1.png",
            "format": "gltf",
        },
        {
            "name": "TV Cabinet 1",
            "model": "models/3d_zoli_new/tv_cabinet_3d_glb/tv_cabinet_1.gltf",
            "type": "0",
            "image": "models/3d_zoli_new/tv_cabinet_picture/tv_cabinet_1.png",
            "format": "gltf",
        },
        ///Chair////////////////////////////////////////////////////////////////////
        {
            "name": "Chair 1",
            "model": "models/3d_zoli_new/chair_3d_glb/chair_1.glb",
            "type": "0",
            "image": "models/3d_zoli_new/chair_picture/chair_1.png",
            "format": "gltf",
        },
        ///Table///////////////////////////////////////////////////////////			
        {
            "name": "Table 1",
            "model": "models/3d_zoli_new/table_3d_glb/table_1.glb",
            "type": "0",
            
            "image": "models/3d_zoli_new/table_picture/table_1.png",
            "format": "gltf",
        },
        {
            "name": "TEST Table 1",
            "model": "models/3d_zoli_new/table_3d_glb/table_1.glb",
            "type": "4",
            
            "image": "models/3d_zoli_new/table_picture/table_1.png",
            "format": "gltf",
        },
        // :IR location 
        // {
        //     "name": "test Table 1",
        //     "model": "models/3d_zoli_new/table_3d_glb/table_1.glb",
        //     "type": "6",
        //     "image": "models/3d_zoli_new/table_picture/table_1.png",
        //     "format": "gltf",
        // },

    ];
    
  

    // const obj1 = {hello: "sdf"};
    // const obj2 = {...obj1, laugh: "wsefr" };
    // console.log('obj1', obj1)
    // console.log('obj2', obj2)

    // [getKey('key3')]: "value3"

    // Object.assign(obj1, obj2);

//  function merge_options(obj1,obj2){
//     var obj3 = {};
//     for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
//     for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
//     return obj3;
// }

// function MergeRecursive(obj1, obj2) {

//     for (var p in obj2) {
//       try {
        // Property in destination object set; update its value.
    //     if ( obj2[p].constructor==Object ) {
    //       obj1[p] = MergeRecursive(obj1[p], obj2[p]);
  
    //     } else {
    //       obj1[p] = obj2[p];
  
    //     }
  
    //   } catch(e) {
        // Property in destination object not set; create it and set its value.
//         obj1[p] = obj2[p];
  
//       }
//     }
  
//     return obj1;
//   }



    var modelTypesNum = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" ];

    var modelTypesIds = [ "wall-items" , "in-wall-items" , "in-wall-floor-items" , "on-floor-items" , "wall-floor-items" , "roof-items" , "floor-items" , "null" ];


    for (var j = 0; j < modelTypesIds.length; j++) {
        var html = '<div id="' + modelTypesIds[modelTypesNum[j]] + '-wrapper"></div>';
        $("#CFoursBoxes1-items").append(html);
        for (var i = 0; i < items.length; i++)
        {

            var item = items[i];
            if(item.type.search(j)>=0){
               
                // modelTypesIds.search(modelTypesNum);
            var itemdivinner = $("#" + modelTypesIds[modelTypesNum.indexOf(item.type)] + "-wrapper");
           
            var modelformat = (item.format) ? ' model-format="' + item.format + '"' : "";

            // alert(modelTypesNum[i]);

            var itemhtml = '<div class="col-sm-6"><div class="float-left-eight-component">' + '<a class="thumbnail add-item items"' + ' model-meta=\'' + JSON.stringify(item.meta || {}) + '\' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item" data-dismiss="modal"><span class="items-title"> ' + item.name + '</span></a></div></div>'

            itemdivinner.append(itemhtml);
        }
    }
        //html += '</div>';

    }
});
 

    $(document).ready(function() {
        var leftaitems = [
            {
                "name": "floor items", //ok
                "model": "images/rooms/floor-items.jpg",
                "image": "images/rooms/floor-items.jpg",
                "type": "0",
                "format": "gltf",
            },
            {
                "name": "wall items", //ok
                "model": "images/rooms/wall-items.jpg",
                "image": "images/rooms/wall-items.jpg",
                "type": "1",
                "format": "gltf",
            },
            {
                "name": "in-wall items", //ok
                "model": "images/rooms/in-wall-items.jpg",
                "image": "images/rooms/in-wall-items.jpg",
                "type": "2",
                "format": "gltf",
            },
            {
                "name": "in wall floor items", //ok
                "model": "images/rooms/in-wall-floor-items.jpg",
                "image": "images/rooms/in-wall-floor-items.jpg",
                "type": "3",
                "format": "gltf",
            },
            {
                "name": "on floor items", //ok
                "model": "images/rooms/on-floor-items.jpg",
                "image": "images/rooms/on-floor-items.jpg",
                "type": "4",
                "format": "gltf",
            },
            {
                "name": "wall floor items", //ok
                "model": "images/rooms/wall-floor-items.jpg",
                "image": "images/rooms/wall-floor-items.jpg",
                "type": "5",
                "format": "gltf",
            },
            {
                "name": "roof items", //ok
                "model": "images/rooms/roof-items.jpg",
                "image": "images/rooms/roof-items.jpg",
                "type": "6",
                "format": "gltf",
            },
        ];

    var imageTypesNum = ["0", "1", "2", "3", "4", "5", "6"];
    var modelTypesclasses = ["a1-item-boxes", "a2-item-boxes", "a3-item-boxes", "a4-item-boxes", "a5-item-boxes", "a6-item-boxes", "a7-item-boxes"];
    for (var j = 0; j < modelTypesclasses.length; j++) {
        var html = '<div id="' + modelTypesclasses[imageTypesNum[j]] + '-wrapper"></div>';
        $(".left-sidebar-items").append(html);
        
            var item = leftaitems[j];
            var itemdivinner = $("#" + modelTypesclasses[imageTypesNum.indexOf(item.type)] + "-wrapper");
            //$("#floor_items-wrapper")
            var modelformat = (item.format) ? ' model-format="' + item.format + '"' : "";
            // alert(modelTypesNum[i]);
            var itemhtml = '<div class="c3-item-boxes items-two panel-button-one">' + '<a class="thumbnail c3-items"' + ' model-meta=\'' + JSON.stringify(item.meta || {}) + '\' model-name="' + item.name + '"' + ' model-url="' + item.model + '"' + ' model-type="' + item.type + '"' + modelformat + '>' + '<img src="' + item.image + '" alt="Add Item" data-dismiss="modal" class="left-first-box hovereffect left-box-icons"><span class="items-title c-one--titles"> ' + item.name + '</span></a></div>'
            itemdivinner.append(itemhtml);
        }
        //html += '</div>';
    
});