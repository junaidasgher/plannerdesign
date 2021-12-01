var aGlobal = null;
var anItem = null;
var aWall = null;
var aFloor = null;
var aCameraRange = null;
var gui = null;
var globalPropFolder = null;
var itemPropFolder = null;
var wallPropFolder = null;
var floorPropFolder = null;
var cameraPropFolder = null;
var itemOptionsFolder = null;//:QK
var blueprint3d = null;//:QK
/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function(blueprint3d) 
{
  var canvasWrapper = '#floorplanner';
  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';
  this.floorplanner = blueprint3d.floorplanner;
  var scope = this;
  function init() 
  {
    $( window ).resize( scope.handleWindowResize );
    scope.handleWindowResize();
    
    scope.floorplanner.addEventListener(BP3DJS.EVENT_MODE_RESET, function(mode) 
    {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == BP3DJS.floorplannerModes.MOVE) 
      {
          $(move).addClass(activeStlye);
      } 
      else if (mode == BP3DJS.floorplannerModes.DRAW) 
      {
          $(draw).addClass(activeStlye);
      } 
      else if (mode == BP3DJS.floorplannerModes.DELETE) 
      {
          $(remove).addClass(activeStlye);
      }
      
      if (mode == BP3DJS.floorplannerModes.DRAW) 
      {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      } 
      else 
      {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.MOVE);
    });

    $(draw).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DRAW);
    });

    $(remove).click(function()
    {
      scope.floorplanner.setMode(BP3DJS.floorplannerModes.DELETE);
    });
  }

  this.updateFloorplanView = function() {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function() {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
};

var mainControls = function(blueprint3d) 
{
	  var blueprint3d = blueprint3d;

	  function newDesign() 
	  {
	    //blueprint3d.model.loadSerialized('{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":-232.02900000000136,"y":235.20400000000032},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":235.3309999999999,"y":235.20400000000032},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":235.3309999999999,"y":-232.15600000000046},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":-232.02900000000136,"y":-232.15600000000046}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}');
	 
	    blueprint3d.model.loadSerialized('{"floorplan":{"corners":{"4cd3d434-0921-ccfa-0e29-29d3778be8be":{"x":-220.09100000000012,"y":-105.15599999999995},"c8a304a1-b9bd-6b76-92e9-2321af0bd415":{"x":-44.06899999999996,"y":-105.15599999999995},"5eee22b8-d773-5b93-c4c8-bf4286ac436d":{"x":-220.09100000000012,"y":-887.476},"16b020d0-fa1e-f198-bbc6-2ad1a59268d0":{"x":135.31850000000009,"y":-887.476},"1b0e7027-3dc4-12cb-0937-370a669217a5":{"x":604.52,"y":-887.476},"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a":{"x":135.31850000000009,"y":-499.36400000000003},"8d92c038-8852-f4ea-e8bb-ac03f938f703":{"x":-44.06899999999996,"y":359.15600000000006},"b8dc05af-4819-456f-63e1-6a975118bbb4":{"x":604.52,"y":359.15600000000006},"e8c4dc18-0a85-92a9-85b2-37dee45f4a00":{"x":-220.09100000000012,"y":-403.85999999999984},"ea1bedfe-ca15-1744-4108-5450cc842661":{"x":-66.42100000000008,"y":-403.85999999999984},"b1c87f68-9c9e-99d2-859c-fb793355d90b":{"x":-66.42100000000008,"y":-265.6840000000001},"79dd4e37-0bc6-c662-2197-ec97c356a7d4":{"x":135.31850000000009,"y":-265.6840000000001},"263a453c-9952-75d6-8810-8477a3265bc6":{"x":188.1505000000002,"y":-105.15599999999995},"bf238f73-f50e-a2c6-d877-0c39e7c2c330":{"x":326.3265000000001,"y":-105.15599999999995},"483d787d-0016-0751-aeda-087bab3a0ed6":{"x":88.5825000000002,"y":-198.6279999999999},"e3e27b42-3226-3fe2-5153-1bbb7a498584":{"x":226.75850000000014,"y":-198.6279999999999},"007d1f79-7d8f-827e-60ce-b3efb21444eb":{"x":604.52,"y":-105.15599999999995},"d326e87e-4117-7033-7844-e7486d249b1e":{"x":604.52,"y":-381.5079999999999},"3eb61572-0237-0254-1e1a-8526c2a71ec6":{"x":452.31050000000005,"y":-381.5079999999999},"22ad9451-b853-12b7-f471-9299192489e4":{"x":326.3265000000001,"y":-381.5079999999999},"4f68435b-ee33-c4cb-2b60-69945652cacd":{"x":326.3265000000001,"y":-499.36400000000003},"56aa05eb-95de-2e11-d759-38814b8d9ce0":{"x":452.31050000000005,"y":-499.36400000000003},"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0":{"x":604.52,"y":-499.36400000000003}},"walls":[{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","corner2":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"1b0e7027-3dc4-12cb-0937-370a669217a5","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"ea1bedfe-ca15-1744-4108-5450cc842661","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"ea1bedfe-ca15-1744-4108-5450cc842661","corner2":"b1c87f68-9c9e-99d2-859c-fb793355d90b","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"b1c87f68-9c9e-99d2-859c-fb793355d90b","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","corner2":"263a453c-9952-75d6-8810-8477a3265bc6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"483d787d-0016-0751-aeda-087bab3a0ed6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"483d787d-0016-0751-aeda-087bab3a0ed6","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"e3e27b42-3226-3fe2-5153-1bbb7a498584","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"d326e87e-4117-7033-7844-e7486d249b1e","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"22ad9451-b853-12b7-f471-9299192489e4","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"56aa05eb-95de-2e11-d759-38814b8d9ce0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"3eb61572-0237-0254-1e1a-8526c2a71ec6","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"1b0e7027-3dc4-12cb-0937-370a669217a5","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","corner2":"007d1f79-7d8f-827e-60ce-b3efb21444eb","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":45.60973158833667,"ypos":110.5,"zpos":-265.1840000000001,"rotation":0,"scale_x":1.1771369721936153,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":226.19923363943076,"ypos":110.800000297771,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":71.15100000000002,"ypos":110.5,"zpos":-104.65599999999995,"rotation":0,"scale_x":1.5695159629248197,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Dresser - Dark Wood","item_type":1,"model_url":"models/js/DWR_MATERA_DRESSER2.js","xpos":549.2058844807959,"ypos":57.785001860754996,"zpos":329.7799662755366,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#a3a3a3"]},{"item_name":"NYC Poster","item_type":2,"model_url":"models/js/nyc-poster2.js","xpos":598.25,"ypos":183.62661902009813,"zpos":117.68045683694481,"rotation":-1.5707963267948966,"scale_x":0.7142842857142857,"scale_y":0.8421024709178014,"scale_z":1.0129608601270457,"fixed":true,"material_colors":["#cccccc"]},{"item_name":"Blue Rug","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","xpos":184.68588061910788,"ypos":0.250005,"zpos":122.38666413809182,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Coffee Table - Wood","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","xpos":272.6962787349586,"ypos":24.01483158034958,"zpos":126.73694950426048,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#7f7f7f","#000000","#a59292","#ffffff","#a59292","#ffffff","#a59292","#a59292","#a59292","#000000","#000000","#a59292","#ffffff","#a59292","#a59292","#ffffff","#ffffff","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":512.6434934035085,"ypos":157.07894848817114,"zpos":-886.976,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":-120.92122752323827,"ypos":168.10483780571963,"zpos":-886.976,"rotation":0,"scale_x":0.6603999999996408,"scale_y":0.5810892360052958,"scale_z":1.0332383005354289,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":438.5412557798525,"ypos":159.40045156749102,"zpos":358.65600000000006,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":307.85036934553574,"ypos":159.1968280144008,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":182.15084546678992,"ypos":159.0605552363389,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff","#a09050","#a09050","#ffffff","#ffffff","#6c6c6c","#000000","#000000","#ffffff","#ffffff","#6c6c6c","#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":-103.81899999999992,"ypos":110.80000022010701,"zpos":-105.65599999999995,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.5,"zpos":-280.9525143309595,"rotation":-1.5707963267948966,"scale_x":1.2294541709577755,"scale_y":0.9972921724026447,"scale_z":0.9482825135211149,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.80000022010701,"zpos":-439.4767618863214,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":250.42795654332926,"ypos":110.80000022010701,"zpos":-188.9679999999999,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":527.7045416935933,"ypos":110.80000022010701,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":17.379725040490854,"ypos":110.5,"zpos":-886.976,"rotation":0,"scale_x":1.1771369721936145,"scale_y":0.9972921724026447,"scale_z":0.948282513521117,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Media Console - White","item_type":9,"model_url":"models/js/cb-clapboard_baked.js","xpos":574.12,"ypos":67.89999754396,"zpos":131.42070309211852,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Sofa - Grey","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","xpos":12.257267191489404,"ypos":42.54509923821,"zpos":136.8119273061203,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true,"material_colors":["#ffffff"]},{"item_name":"Red Chair","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","xpos":-145.8259639473912,"ypos":37.50235073007,"zpos":-640.3370432063019,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Duck","item_type":1,"model_url":"models/js/Duck.gltf","xpos":-113.67983456116178,"ypos":77.02031564712524,"zpos":-476.8481561646179,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]}]}');
	
	}

	  function loadDesign() 
	  {

	    files = $("#loadFile").get(0).files;
		console.log(files, '00');
	    var reader  = new FileReader();
	    reader.onload = function(event) {
	        var data = event.target.result;
	        blueprint3d.model.loadSerialized(data);
	    }
	    reader.readAsText(files[0]);
	  }

	  function saveDesign() {
	    var data = blueprint3d.model.exportSerialized();
	    var a = window.document.createElement('a');
	    var blob = new Blob([data], {type : 'text'});
	    a.href = window.URL.createObjectURL(blob);
	    a.download = 'design.blueprint3d';
	    document.body.appendChild(a)
	    a.click();
	    document.body.removeChild(a)
	  }
	  
	  function saveGLTF()
	  {
		  blueprint3d.three.exportForBlender();
	  }
	  
	  function saveGLTFCallback(o)
	  {
		var data = o.gltf;
		var a = window.document.createElement('a');
		var blob = new Blob([data], {type : 'text'});
		a.href = window.URL.createObjectURL(blob);
		a.download = 'design.gltf';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	  }
	  
	  function saveMesh() {
		    var data = blueprint3d.model.exportMeshAsObj();
		    var a = window.document.createElement('a');
		    var blob = new Blob([data], {type : 'text'});
		    a.href = window.URL.createObjectURL(blob);
		    a.download = 'design.obj';
		    document.body.appendChild(a)
		    a.click();
		    document.body.removeChild(a)
		  }

	  function init() {
	    $("#new").click(newDesign);
	    $("#new2d").click(newDesign);
	    $("#loadFile").change(loadDesign);
	    $("#saveFile").click(saveDesign);
	    $("#saveMesh").click(saveMesh);
	    $("#saveGLTF").click(saveGLTF);
	    blueprint3d.three.addEventListener(BP3DJS.EVENT_GLTF_READY, saveGLTFCallback);
	  }

	  init();
}

var GlobalProperties = function()
{
	this.name = 'Global';
	//a - feet and inches, b = inches, c - cms, d - millimeters, e - meters
	this.units = {a:false, b:false, c:false, d:false, e:true};	
	this.unitslabel = {a:BP3DJS.dimFeetAndInch, b:BP3DJS.dimInch, c:BP3DJS.dimCentiMeter, d:BP3DJS.dimMilliMeter, e:BP3DJS.dimMeter};
	this.guiControllers = null;
	
	this.setUnit = function(unit)
	{
		for (let param in this.units)
		{
			this.units[param] = false;
		}
		this.units[unit] = true;
		
		BP3DJS.Configuration.setValue(BP3DJS.configDimUnit, this.unitslabel[unit]);
		
		console.log(this.units, this.unitslabel[unit], BP3DJS.Configuration.getStringValue(BP3DJS.configDimUnit));
		
		for (var i in this.guiControllers) // Iterate over gui controllers to update the values
		{
			this.guiControllers[i].updateDisplay();
	    }
	}
	
	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}
}

var CameraProperties = function()
{
	this.ratio = 1;
	this.ratio2 = 1;
	this.locked = false;
	this.three = null;
	
	this.change = function()
	{
		if(this.three)
		{
			this.three.changeClippingPlanes(this.ratio, this.ratio2);
		}
	}
	
	this.changeLock = function()
	{
		if(this.three)
		{
			this.three.lockView(!this.locked);
		}
	}
	
	this.reset = function()
	{
		if(this.three)
		{
			this.three.resetClipping();
		}
	}
}

var ItemProperties = function(gui)
{
	this.name = 'an item';
	this.width = 10;
	this.height = 10;
	this.depth = 10;
	this.fixed = false;
	this.currentItem = null;
	this.guiControllers = null;
	this.gui = gui;
	this.materialsfolder = null;
	this.materials = {};
	this.totalmaterials = -1;
	this.proportionalsize = false;
	this.changingdimension = 'w';
	this.ColorOn = false;//:QK
	this.color = '#000';//:QK
	this.colorIntensity = 5;//:QK
	this.colorDistance = 200;//:QK
	this.optionsFolder = null;//:QK
	this.state = null;//:QK
	this.animationState = []; //:QK
	
	this.setGUIControllers = function(guiControls)
	{
		this.guiControllers = guiControls;
	}
	
	this.setItem = function(item)
	{
		this.currentItem = item;
		if(this.materialsfolder)
		{
			this.gui.removeFolder(this.materialsfolder.name);
		}

		if(this.optionsFolder)//:QK
		{
			this.gui.removeFolder(this.optionsFolder.name);
		}

		if(item)
		{
			var scope = this;
			var material = item.material;
			this.name = item.metadata.itemName;			
			this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());			
			this.fixed = item.fixed;
			this.proportionalsize = item.getProportionalResize();

			if (item?.metadata?.light || item?.metadata?.states || item.metadata?.animation) {//:QK
				this.optionsFolder = this.gui.addFolder('Options');
				if (item.metadata?.light) {
					var coloron = this.optionsFolder.add(this, 'ColorOn').name("On").onChange(()=>{scope.changeLight('ColorOn')});
					var lightcolor = this.optionsFolder.addColor(this, 'color').name("Light Color").onChange(()=>{scope.changeLight('color')});
					var lightIntensity = this.optionsFolder.add(this, 'colorIntensity',1,100,1).name("Intensity").onChange(()=>{scope.changeLight('colorIntensity')});
					var lightDistance = this.optionsFolder.add(this, 'colorDistance',1,1000,1).name("Distance").onChange(()=>{scope.changeLight('colorDistance')});
					//this.optionsFolder.open();
				}

				if (item.metadata?.states) {
					var arp = [];
					for (var i=0; i < item.metadata.states.length;i++) {
					//for (var i of Object.keys(item.metadata.states)) {
						var itemName = item.metadata.states[i].name;
						var itemModel = item.metadata.states[i].model;
						if (item.metadata.states[i].default && this.state === null) {
							this.state = itemName;
						}
						arp.push(itemName);
						
					}
					this.optionsFolder.add(this, "state", arp).name("States").onChange(()=>{scope.changeState(itemName)});
				}

				if (item.metadata?.animation) {
					const ans = this.animationState;
					item.animations.forEach( ( clip ) => {
						if (!ans[clip.name]) {
							ans[clip.name] = false;
						}
						this.optionsFolder.add(ans, clip.name).name(clip.name).onChange(()=>{scope.playAnimation(clip.name)});
					} );
				}
			}
			
			for (var i in this.guiControllers) // Iterate over gui controllers to update the values
			{
				this.guiControllers[i].updateDisplay();
		    }

			this.materialsfolder =  this.gui.addFolder('Materials');
			this.materials = {};
			if(material.length)
			{
				this.totalmaterials = material.length;
				for (var i=0;i<material.length;i++)
				{
					this.materials['mat_'+i] = '#'+material[i].color.getHexString();
					var matname = (material[i].name) ? material[i].name : 'Material '+(i+1);
					var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_'+i).name(matname).onChange(()=>{scope.dimensionsChanged()});
				}
				return;
			}
			this.totalmaterials = 1;
			var matname = (material.name) ? material.name : 'Material 1';
			this.materials['mat_0'] = '#'+material.color.getHexString();
			var ccontrol = this.materialsfolder.addColor(this.materials, 'mat_0').name(matname).onChange(()=>{scope.dimensionsChanged()});
			return;
		}
		this.name = 'None';
		return;
	}
	
	this.changeLight = function(prop)//:QK
	{ 
		if(this.currentItem)
		{
			if (this.ColorOn) {
				this.currentItem.removeLight();
				//console.log(this.color.replace("#","0x"));
				this.currentItem.addLight(this.color, this.colorIntensity, this.colorDistance);
			} else {
				this.currentItem.removeLight(true);
			}
		}
	}

	this.changeState = function(name)//:QK
	{
		//console.log(name, this.gui);
		var selected = null;
		if (this.gui.__folders.Options?.__controllers) {
			for(var i=0; i<this.gui.__folders.Options?.__controllers.length; i++){
				var contr = this.gui.__folders.Options?.__controllers[i];
				if (contr.property == "state") {
					for(var j=0;j<contr.__select.length;j++)
					{
						if (contr.__select[j].selected) {
							selected = contr.__select[j].value;
							break;
						}
					}
				}
			}
		}
		if (selected)
		{
			var it = this.currentItem.metadata.states.find(el => el.name == selected)
			this.changeModel(it.model);
			this.state = selected;
		}
	}

	this.changeModel = function(model)//:QK
	{
		var old_item = this.currentItem;
		blueprint3d.model.scene.removeItem(old_item);
		blueprint3d.model.scene.addItem(old_item.metadata.itemType, model, old_item.metadata, old_item.position, null, null, false, {position: old_item.position, edge: aWall.currentWall});
		//var it = {modelUrl: model, itemType: old_item.metadata.itemType, itemFormat: old_item.metadata.itemFormat, metadata: old_item.metadata};
	    //addItemToScene(it, pos);
	}

	this.stepsChange = function(w) //:QK
	{
		//console.log(w, this.currentItem.metadata.steps);
		if(this.currentItem.metadata?.steps){
			var steps = this.currentItem.metadata.steps;
			for(let i of Object.keys(steps))
			{
				var mm = i.split("-");
				if (mm[0] && mm[1] && w > mm[0] && w < mm[1]) {
					this.changeModel(steps[i]);
					//console.log(steps[i]);
					break;
				}else{
					//console.log(mm);
				}
			}
		}
	}

	this.playAnimation = function(name) //:QK 
	{
		if (this.animationState[name]){
			this.currentItem.animateItem(name);
		}
		
	}

	this.dimensionsChanged = function()
	{
		if(this.currentItem)
		{
			var item = this.currentItem;
			
			var ow = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
			var oh = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			var od = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			
			var h = BP3DJS.Dimensioning.cmFromMeasureRaw(this.height);
			var w = BP3DJS.Dimensioning.cmFromMeasureRaw(this.width);
			var d = BP3DJS.Dimensioning.cmFromMeasureRaw(this.depth);		
			
			this.currentItem.resize(h,w,d);
			this.stepsChange(w);

			if( w != ow)
			{
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}
			
			if( h != oh)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.depth = BP3DJS.Dimensioning.cmToMeasureRaw(item.getDepth());
			}
			
			if( d != od)
			{
				this.width = BP3DJS.Dimensioning.cmToMeasureRaw(item.getWidth());
				this.height = BP3DJS.Dimensioning.cmToMeasureRaw(item.getHeight());
			}		
			for (var i=0;i<this.totalmaterials;i++)
			{
				this.currentItem?.setMaterialColor(this.materials['mat_'+i], i);
			}
			
			this.guiControllers.forEach((control)=>{control.updateDisplay()}); // Iterate over gui controllers to update the values
			
		}
	}
	
	this.proportionFlagChange = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setProportionalResize(this.proportionalsize);
		}	
	}
	
	this.lockFlagChanged = function()
	{
		if(this.currentItem)
		{
			this.currentItem.setFixed(this.fixed);
		}		
	}
	
	this.deleteItem = function()
	{
		if(this.currentItem)
		{
			this.optionsFolder = null;
			this.currentItem.remove();
			this.setItem(null);
		}
	}
}

var WallProperties = function()
{
	this.textures = [
		['rooms/textures/wallmap.png', true, 1], ['rooms/textures/wallmap_yellow.png', true, 1], 
		['rooms/textures/light_brick.jpg', false, 50], ['rooms/textures/marbletiles.jpg', false, 300], 
		['rooms/textures/light_brick.jpg', false, 100], ['rooms/textures/light_fine_wood.jpg', false, 300], 
		['rooms/textures/hardwood.png', false, 300]];
	
	this.floormaterialname = 0;
	this.wallmaterialname = 0;
	
	this.forAllWalls = false;
	
	this.currentWall = null;
	this.currentFloor = null;
	
	this.wchanged = function()
	{
		if(this.currentWall)
		{
			this.currentWall.setTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}
		if(this.currentFloor && this.forAllWalls)
		{
			this.currentFloor.setRoomWallsTexture(this.textures[this.wallmaterialname][0], this.textures[this.wallmaterialname][1], this.textures[this.wallmaterialname][2]);
		}		
	}
	
	this.fchanged = function()
	{
		if(this.currentFloor)
		{
			this.currentFloor.setTexture(this.textures[this.floormaterialname][0], this.textures[this.floormaterialname][1], this.textures[this.floormaterialname][2]);
		}
	}
	
	
	this.setWall = function(wall)
	{
		this.currentWall = wall;
	}
	
	this.setFloor = function(floor)
	{
		this.currentFloor = floor;
	}
}

function addBlueprintListeners(blueprint3d)
{
	var three = blueprint3d.three;
	
	function wallClicked(wall)
	{
		aWall.setWall(wall);
		aWall.setFloor(null);
		itemPropFolder.close();
		wallPropFolder.open();		
	}
	
	function floorClicked(floor)
	{
		aWall.setFloor(floor);
		aWall.setWall(null);
		itemPropFolder.close();
		wallPropFolder.open();
	}
	
	function itemSelected(item)
	{
		/*if (item.metadata.animation) {
			item.animateItem();
		}*/
		
		anItem.setItem(item);
		itemPropFolder.open();
		wallPropFolder.close();
	}
	function itemUnselected()
	{
		anItem.setItem(undefined);
		itemPropFolder.close();
	}
	
	three.addEventListener(BP3DJS.EVENT_ITEM_SELECTED, function(o){itemSelected(o.item);});
	three.addEventListener(BP3DJS.EVENT_ITEM_UNSELECTED, function(o){itemUnselected();});	
	three.addEventListener(BP3DJS.EVENT_WALL_CLICKED, (o)=>{wallClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FLOOR_CLICKED, (o)=>{floorClicked(o.item);});
    three.addEventListener(BP3DJS.EVENT_FPS_EXIT, ()=>{$('#showDesign').trigger('click')});    
// three.skybox.toggleEnvironment(this.checked);
// currentTarget.setTexture(textureUrl, textureStretch, textureScale);
// three.skybox.setEnvironmentMap(textureUrl);
}


function getCameraRangePropertiesFolder(gui, camerarange)
{
	var f = gui.addFolder('Camera Limits');
	var ficontrol = f.add(camerarange, 'ratio', -1, 1).name("Range").step(0.01).onChange(function(){camerarange.change()});
	var ficontrol2 = f.add(camerarange, 'ratio2', -1, 1).name("Range 2").step(0.01).onChange(function(){camerarange.change()});
	var flockcontrol = f.add(camerarange, 'locked').name("Lock View").onChange(function(){camerarange.changeLock()});
	var resetControl = f.add(camerarange, 'reset').name('Reset');
	return f;
	
}

function getGlobalPropertiesFolder(gui, global)
{
	var f = gui.addFolder('Global');
	var ficontrol = f.add(global.units, 'a',).name("Feets'' Inches'").onChange(function(){global.setUnit("a")});
	var icontrol = f.add(global.units, 'b',).name("Inches'").onChange(function(){global.setUnit("b")});
	var ccontrol = f.add(global.units, 'c',).name('Cm').onChange(function(){global.setUnit("c")});
	var mmcontrol = f.add(global.units, 'd',).name('mm').onChange(function(){global.setUnit("d")});
	var mcontrol = f.add(global.units, 'e',).name('m').onChange(function(){global.setUnit("e")});
	global.setGUIControllers([ficontrol, icontrol, ccontrol, mmcontrol, mcontrol]);
	
	return f;
}

function getCarbonSheetPropertiesFolder(gui, carbonsheet, globalproperties)
{
	console.log('CARBON SHEET ', carbonsheet, carbonsheet.x);
	var f = gui.addFolder('Carbon Sheet');
	var url = f.add(carbonsheet, 'url').name('Url');
	var width = f.add(carbonsheet, 'width').name('Real Width').max(1000.0).step(0.01);
	var height = f.add(carbonsheet, 'height').name('Real Height').max(1000.0).step(0.01);
	var proportion = f.add(carbonsheet, 'maintainProportion').name('Maintain Proportion');
	var x = f.add(carbonsheet, 'x').name('Move in X');
	var y = f.add(carbonsheet, 'y').name('Move in Y');
	
	var ax = f.add(carbonsheet, 'anchorX').name('Anchor X');
	var ay = f.add(carbonsheet, 'anchorY').name('Anchor Y');
	var transparency = f.add(carbonsheet, 'transparency').name('Transparency').min(0).max(1.0).step(0.05);
	carbonsheet.addEventListener(BP3DJS.EVENT_UPDATED, function(){
		url.updateDisplay();
		width.updateDisplay();
		height.updateDisplay();
		x.updateDisplay();
		y.updateDisplay();
		ax.updateDisplay();
		ay.updateDisplay();
		transparency.updateDisplay(width);
	});
	
	globalproperties.guiControllers.push(width);
	globalproperties.guiControllers.push(height);
	return f;
}

function getItemPropertiesFolder(gui, anItem)
{
	var f = gui.addFolder('Current Item');
	var inamecontrol = f.add(anItem, 'name');
	var wcontrol = f.add(anItem, 'width', 0.1, 1000.1).step(0.1);
	var hcontrol = f.add(anItem, 'height', 0.1, 1000.1).step(0.1);
	var dcontrol = f.add(anItem, 'depth', 0.1, 1000.1).step(0.1);
	var pcontrol = f.add(anItem, 'proportionalsize').name('Maintain Size Ratio');
	var lockcontrol = f.add(anItem, 'fixed').name('Locked in place');
	var deleteItemControl = f.add(anItem, 'deleteItem').name('Delete Item');
	
	function changed()
	{
		anItem.dimensionsChanged();
	}	
	
	function lockChanged()
	{
		anItem.lockFlagChanged();
	}	
	
	function proportionFlagChanged()
	{
		anItem.proportionFlagChange();
	}
	
	wcontrol.onChange(changed);
	hcontrol.onChange(changed);
	dcontrol.onChange(changed);
	pcontrol.onChange(proportionFlagChanged);
	lockcontrol.onChange(lockChanged);
	
	
	anItem.setGUIControllers([inamecontrol, wcontrol, hcontrol, dcontrol, pcontrol, lockcontrol, deleteItemControl]);
	
	return f;
}

function getWallAndFloorPropertiesFolder(gui, aWall)
{
	var f = gui.addFolder('Wall and Floor');	
	var wcontrol = f.add(aWall, 'wallmaterialname', {Grey: 0, Yellow: 1, Checker: 2, Marble: 3, Bricks: 4}).name('Wall');
	var fcontrol = f.add(aWall, 'floormaterialname', {'Fine Wood': 5, 'Hard Wood': 6}).name('Floor');
	var multicontrol = f.add(aWall, 'forAllWalls').name('All Walls In Room');
	function wchanged()
	{
		aWall.wchanged();
	}
	
	function fchanged()
	{
		aWall.fchanged();
	}	
	
	wcontrol.onChange(wchanged);
	fcontrol.onChange(fchanged);
	return f;
}

function datGUI(three, floorplanner)
{
	gui = new dat.GUI();
	aGlobal = new GlobalProperties();
	aCameraRange = new CameraProperties();
	aWall = new WallProperties();
	anItem = new ItemProperties(gui);
	
	aCameraRange.three = three;
	
	globalPropFolder = getGlobalPropertiesFolder(gui, aGlobal);
	carbonPropsFolder = getCarbonSheetPropertiesFolder(globalPropFolder, floorplanner.carbonSheet, aGlobal);
	
	cameraPropFolder = getCameraRangePropertiesFolder(gui, aCameraRange);
	wallPropFolder = getWallAndFloorPropertiesFolder(gui, aWall);
	itemPropFolder = getItemPropertiesFolder(gui, anItem);
}


$(document).ready(function() 
{
	dat.GUI.prototype.removeFolder = function(name) 
	{
		  var folder = this.__folders[name];
		  if (!folder) {
		    return;
		  }
		  folder.close();
		  this.__ul.removeChild(folder.domElement.parentNode);
		  delete this.__folders[name];
		  this.onResize();
	}
	// main setup
	var opts = 
	{
			floorplannerElement: 'floorplanner-canvas',
			threeElement: '#viewer',
			threeCanvasElement: 'three-canvas',
			textureDir: "models/textures/",
			widget: false
	}
	blueprint3d = new BP3DJS.BlueprintJS(opts);  
	var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
	mainControls(blueprint3d);
	
	var myhome = '{"floorplan":{"corners":{"16b020d0-fa1e-f198-bbc6-2ad1a59268d0":{"x":135.31850000000009,"y":-887.476},"8d92c038-8852-f4ea-e8bb-ac03f938f703":{"x":-44.06899999999996,"y":359.15600000000006},"5eee22b8-d773-5b93-c4c8-bf4286ac436d":{"x":-220.09100000000012,"y":-887.476},"4cd3d434-0921-ccfa-0e29-29d3778be8be":{"x":-220.09100000000012,"y":-105.15599999999995},"79dd4e37-0bc6-c662-2197-ec97c356a7d4":{"x":135.31850000000009,"y":-265.6840000000001},"e8c4dc18-0a85-92a9-85b2-37dee45f4a00":{"x":-220.09100000000012,"y":-403.85999999999984},"ea1bedfe-ca15-1744-4108-5450cc842661":{"x":-66.42100000000008,"y":-403.85999999999984},"b1c87f68-9c9e-99d2-859c-fb793355d90b":{"x":-66.42100000000008,"y":-265.6840000000001},"c8a304a1-b9bd-6b76-92e9-2321af0bd415":{"x":-44.06899999999996,"y":-105.15599999999995},"263a453c-9952-75d6-8810-8477a3265bc6":{"x":188.1505000000002,"y":-105.15599999999995},"483d787d-0016-0751-aeda-087bab3a0ed6":{"x":188.1505000000002,"y":-188.4679999999999},"e3e27b42-3226-3fe2-5153-1bbb7a498584":{"x":326.3265000000001,"y":-188.4679999999999},"22ad9451-b853-12b7-f471-9299192489e4":{"x":326.3265000000001,"y":-381.5079999999999},"3eb61572-0237-0254-1e1a-8526c2a71ec6":{"x":452.31050000000005,"y":-381.5079999999999},"1b0e7027-3dc4-12cb-0937-370a669217a5":{"x":604.52,"y":-887.476},"d326e87e-4117-7033-7844-e7486d249b1e":{"x":604.52,"y":-381.5079999999999},"4f68435b-ee33-c4cb-2b60-69945652cacd":{"x":326.3265000000001,"y":-499.36400000000003},"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a":{"x":135.31850000000009,"y":-499.36400000000003},"56aa05eb-95de-2e11-d759-38814b8d9ce0":{"x":452.31050000000005,"y":-499.36400000000003},"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0":{"x":604.52,"y":-499.36400000000003},"007d1f79-7d8f-827e-60ce-b3efb21444eb":{"x":604.52,"y":-105.15599999999995},"b8dc05af-4819-456f-63e1-6a975118bbb4":{"x":604.52,"y":359.15600000000006},"bf238f73-f50e-a2c6-d877-0c39e7c2c330":{"x":326.3265000000001,"y":-105.15599999999995}},"walls":[{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","corner2":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"1b0e7027-3dc4-12cb-0937-370a669217a5","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"16b020d0-fa1e-f198-bbc6-2ad1a59268d0","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"8d92c038-8852-f4ea-e8bb-ac03f938f703","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4cd3d434-0921-ccfa-0e29-29d3778be8be","corner2":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"5eee22b8-d773-5b93-c4c8-bf4286ac436d","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"e8c4dc18-0a85-92a9-85b2-37dee45f4a00","corner2":"ea1bedfe-ca15-1744-4108-5450cc842661","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"ea1bedfe-ca15-1744-4108-5450cc842661","corner2":"b1c87f68-9c9e-99d2-859c-fb793355d90b","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"b1c87f68-9c9e-99d2-859c-fb793355d90b","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"c8a304a1-b9bd-6b76-92e9-2321af0bd415","corner2":"263a453c-9952-75d6-8810-8477a3265bc6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"263a453c-9952-75d6-8810-8477a3265bc6","corner2":"483d787d-0016-0751-aeda-087bab3a0ed6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"483d787d-0016-0751-aeda-087bab3a0ed6","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"e3e27b42-3226-3fe2-5153-1bbb7a498584","corner2":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"d326e87e-4117-7033-7844-e7486d249b1e","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"22ad9451-b853-12b7-f471-9299192489e4","corner2":"e3e27b42-3226-3fe2-5153-1bbb7a498584","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"56aa05eb-95de-2e11-d759-38814b8d9ce0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"3eb61572-0237-0254-1e1a-8526c2a71ec6","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"3eb61572-0237-0254-1e1a-8526c2a71ec6","corner2":"22ad9451-b853-12b7-f471-9299192489e4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"1b0e7027-3dc4-12cb-0937-370a669217a5","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4f68435b-ee33-c4cb-2b60-69945652cacd","corner2":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"f0569ab9-d17a-cb83-cd6d-1ccff1b4025a","corner2":"79dd4e37-0bc6-c662-2197-ec97c356a7d4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"56aa05eb-95de-2e11-d759-38814b8d9ce0","corner2":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"a4c70aaa-7fcb-5c76-0308-50c45bbe10a0","corner2":"d326e87e-4117-7033-7844-e7486d249b1e","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"bf238f73-f50e-a2c6-d877-0c39e7c2c330","corner2":"007d1f79-7d8f-827e-60ce-b3efb21444eb","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300}},{"corner1":"007d1f79-7d8f-827e-60ce-b3efb21444eb","corner2":"b8dc05af-4819-456f-63e1-6a975118bbb4","frontTexture":{"url":"rooms/textures/marbletiles.jpg","stretch":false,"scale":300},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":45.60973158833667,"ypos":110.5,"zpos":-265.1840000000001,"rotation":0,"scale_x":1.1771369721936153,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":226.19923363943076,"ypos":110.800000297771,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Open Door","item_type":7,"model_url":"models/js/open_door.js","xpos":71.15100000000002,"ypos":110.5,"zpos":-104.65599999999995,"rotation":0,"scale_x":1.5695159629248197,"scale_y":0.997292171703541,"scale_z":0.9994150405405762,"fixed":true},{"item_name":"Dresser - Dark Wood","item_type":1,"model_url":"models/js/DWR_MATERA_DRESSER2.js","xpos":549.2058844807959,"ypos":57.785001860754996,"zpos":329.7799662755366,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"NYC Poster","item_type":2,"model_url":"models/js/nyc-poster2.js","xpos":598.25,"ypos":183.62661902009813,"zpos":117.68045683694481,"rotation":-1.5707963267948966,"scale_x":0.7142842857142857,"scale_y":0.8421024709178014,"scale_z":1.0129608601270457,"fixed":true},{"item_name":"Blue Rug","item_type":8,"model_url":"models/js/cb-blue-block-60x96.js","xpos":184.68588061910788,"ypos":0.250005,"zpos":122.38666413809182,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Coffee Table - Wood","item_type":1,"model_url":"models/js/ik-stockholmcoffee-brown.js","xpos":272.6962787349586,"ypos":24.01483158034958,"zpos":126.73694950426048,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":512.6434934035085,"ypos":157.07894848817114,"zpos":-886.976,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":-120.92122752323827,"ypos":168.10483780571963,"zpos":-886.976,"rotation":0,"scale_x":0.6603999999996408,"scale_y":0.5810892360052958,"scale_z":1.0332383005354289,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":438.5412557798525,"ypos":159.40045156749102,"zpos":358.65600000000006,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":307.85036934553574,"ypos":159.1968280144008,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Window","item_type":3,"model_url":"models/js/whitewindow.js","xpos":182.15084546678992,"ypos":159.0605552363389,"zpos":358.6560000000001,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":-103.81899999999992,"ypos":110.80000022010701,"zpos":-105.65599999999995,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.5,"zpos":-280.9525143309595,"rotation":-1.5707963267948966,"scale_x":1.2294541709577755,"scale_y":0.9972921724026447,"scale_z":0.9482825135211149,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":325.8265000000001,"ypos":110.80000022010701,"zpos":-439.4767618863214,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":250.42795654332926,"ypos":110.80000022010701,"zpos":-188.9679999999999,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":527.7045416935933,"ypos":110.80000022010701,"zpos":-499.86400000000003,"rotation":3.141592653589793,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Closed Door","item_type":7,"model_url":"models/js/closed-door28x80_baked.js","xpos":17.379725040490854,"ypos":110.5,"zpos":-886.976,"rotation":0,"scale_x":1.1771369721936145,"scale_y":0.9972921724026447,"scale_z":0.948282513521117,"fixed":true},{"item_name":"Media Console - White","item_type":9,"model_url":"models/js/cb-clapboard_baked.js","xpos":574.12,"ypos":67.89999754396,"zpos":131.42070309211852,"rotation":-1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true},{"item_name":"Sofa - Grey","item_type":1,"model_url":"models/js/cb-rochelle-gray_baked.js","xpos":12.257267191489404,"ypos":42.54509923821,"zpos":136.8119273061203,"rotation":1.5707963267948966,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":true}]}';
	blueprint3d.model.loadSerialized(myhome);
	
	
	addBlueprintListeners(blueprint3d);
	datGUI(blueprint3d.three, blueprint3d.floorplanner);
	blueprint3d.three.stopSpin();
//	gui.closed = true;
	
	
	$('#showAddItems').hide();
	$('#viewcontrols').hide();
	
	$('.card').flip({trigger:'manual', axis:'x'});  
	$('#showFloorPlan').click(function()
	{
		$('.card').flip(false);
		$(this).addClass('active');
		$('#showDesign').removeClass('active');
		$('#showFirstPerson').removeClass('active');
		$('#showAddItems').hide();
		$('#viewcontrols').hide();
//		gui.closed = true;
		blueprint3d.three.pauseTheRendering(true);
		blueprint3d.three.getController().setSelectedObject(null);
	});
	
	$('#showDesign').click(function()
	{ 
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = false;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#showFirstPerson').removeClass('active');	
		
		$('#showAddItems').show();
		$('#viewcontrols').show();
		
		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(false);
	});
	$('#showFirstPerson').click(function()
	{ 
		blueprint3d.model.floorplan.update();
		$('.card').flip(true);
//		gui.closed = true;
		$(this).addClass('active');
		$('#showFloorPlan').removeClass('active');
		$('#showDesign').removeClass('active');
		
		$('#showAddItems').hide();
		$('#viewcontrols').hide();
		
		blueprint3d.three.pauseTheRendering(false);
		blueprint3d.three.switchFPSMode(true);
	});
	
	$('#showSwitchCameraMode').click(function()
	{
		$(this).toggleClass('active');
		blueprint3d.three.switchOrthographicMode($(this).hasClass('active'));		
	});
	
	$('#showSwitchWireframeMode').click(function()
	{
		$(this).toggleClass('wireframe-active');
		blueprint3d.three.switchWireframe($(this).hasClass('wireframe-active'));		
	});
	
	$('#topview, #isometryview, #frontview, #leftview, #rightview').click(function(){
		blueprint3d.three.switchView($(this).attr('id'));
	});
	
	
	
	$("#add-items").find(".add-item").mousedown(function(e) {
	      var modelUrl = $(this).attr("model-url");
	      var itemType = parseInt($(this).attr("model-type"));
	      var itemFormat = $(this).attr('model-format');
	      var metadata = {
	        itemName: $(this).attr("model-name"),
	        resizable: true,
	        modelUrl: modelUrl,
	        itemType: itemType,
	        format: itemFormat   
	      }
		  metadata = $.extend(metadata, JSON.parse($(this).attr("model-meta") || {} ));
	      var item = {modelUrl: modelUrl, itemType: itemType, itemFormat: itemFormat, metadata: metadata};
	      addItemToScene(item);
	    });	

	
});

function addItemToScene(item, position){
	if([2,3,7,9].indexOf(item.metadata.itemType) != -1 && aWall.currentWall)
	  {
		  var placeAt = aWall.currentWall.center.clone();
		  blueprint3d.model.scene.addItem(item.itemType, item.modelUrl, item.metadata, position?position:null, null, null, false, {position: placeAt, edge: aWall.currentWall});
	  }
	  else if(aWall.currentFloor)
	  {
		  var placeAt = aWall.currentFloor.center.clone();
		  blueprint3d.model.scene.addItem(item.itemType, item.modelUrl, item.metadata, position?position:null, null, null, false, {position: placeAt});
	  }
	  else
	  {
		  blueprint3d.model.scene.addItem(item.itemType, item.modelUrl, item.metadata);
	  }
}