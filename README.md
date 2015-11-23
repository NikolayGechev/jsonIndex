
jsonIndex
=========

Overview
--------

Indexing large JavaScript objects by extraction of smaller objects.


Installation
------------

~ bower install https://github.com/NikolayGechev/jsonIndex.git

Crash course
------------

With this json file:

```json

{ "person": [
    {
      "id": 1,
      "name": "Antonio Paz"
    }, {
      "id": 2,
      "name": "Lilliana Angelovska"
    } 
  ],
  "shirt": [
    {
        "id": 1,
        "style": "polo",
        "color": "blue",
        "owner": 1
    }, {
        "id": 2,
        "style": "dress",
        "color": "white",
        "owner": 1
    }, {
        "id": 3,
        "style": "t-shirt",
        "color": "blue",
        "owner": 1
    }, {
        "id": 4,
        "style": "dress",
        "color": "orange",
        "owner": 2
    }, {
        "id": 5,
        "style": "polo",
        "color": "red",
        "owner": 2
    }, {
        "id": 6,
        "style": "dress",
        "color": "blue",
        "owner": 2
    }, {
        "id": 7,
        "style": "t-shirt",
        "color": "white",
        "owner": 2
    }
  ]
}

```javascript

	$.getJSON("store.json", function(json) {

	    var store2_2 = new JSONIndex( json, [

	       { index: "$..name" }

	    ] );

	});

