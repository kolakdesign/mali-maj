var APP_DATA = {
  "scenes": [
    {
      "id": "0-open-space",
      "name": "Open space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.433367286988105,
          "pitch": 0.06108437663689159,
          "rotation": 7.0685834705770345,
          "target": "1-spavaa-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-spavaa-soba",
      "name": "Spavaća soba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2778906842297513,
          "pitch": 0.08719361890873323,
          "rotation": 18.84955592153877,
          "target": "0-open-space"
        },
        {
          "yaw": 2.1503583974949443,
          "pitch": 0.09049193374648112,
          "rotation": 4.71238898038469,
          "target": "2-kupaonica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kupaonica",
      "name": "Kupaonica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2131925002465618,
          "pitch": 0.10993446732766188,
          "rotation": 1.5707963267948966,
          "target": "1-spavaa-soba"
        },
        {
          "yaw": -1.6395675085119965,
          "pitch": 0.10718908099834756,
          "rotation": 10.210176124166829,
          "target": "0-open-space"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mali Maj",
  "settings": {
    "mouseViewMode": "drag",
    "deviceOrientationEnabled": true,
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
