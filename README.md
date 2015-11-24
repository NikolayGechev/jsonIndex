
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
```

Indexing one "column":
----------------------

```javascript

	$.getJSON("store.json", function(json) {

	    var store2_2 = new JSONIndex( json, [

	       { index: "$..name" }

	    ] );

	});

```

Result:

```json

[["Antonio Paz","Lilliana Angelovska"]]

```

Index with Left Join
--------------------

```javascript


	$.getJSON("store.json", function(json) {

	    var store2_2 = new JSONIndex( json, [

	       { left_join: "$.shirt[?(@.owner=={{$.person..id}})].[style, color]" }

	    ] );

	});

```

Result:

```json

[[["polo","dress","t-shirt"],["dress","polo","dress","t-shirt"]]]

```

Indexing multiple columns


```javascript

	$.getJSON("store.json", function(json) {

	    var store2_2 = new JSONIndex( json, [

	       { multiple: ["$.shirt[*].style", "$.shirt[*].color"] }

	    ] );

	});

```

Result:

```json

[[[["polo"],["blue"]],[["dress"],["white"]],[["t-shirt"],["blue"]],[["dress"],["orange"]],[["polo"],["red"]],[["dress"],["blue"]],[["t-shirt"],["white"]]]]


```

