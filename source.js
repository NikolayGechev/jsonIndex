/**
*
* @class JSONIndex
* @constructor
*
*/

var JSONIndex = function(jsonObj, options)
{
  this.init(jsonObj, options);
};

/*
*
* @method init
* @param {Object} jsonObj Object corresponding to the given JSON text.
* @param {Object} (index:{String} JSONPath type), (first:{String} JSONPath type, second:{String} JSONPath type, relation_type: 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN')
* @return {Boolean} Returns true on success
*
*/

JSONIndex.prototype.init = function(jsonObj, options)
{

  var n = options.length;

  for ( var i = 0; i < n; i ++ )
  {

    if( typeof options[i].index != 'undefined' )
    {

      var res = jsonPath(jsonObj, options[i].index);

      this.index[i] = res;
      this.pathsIndex[i] = jsonPath(jsonObj, options[i].index, {resultType:"PATH"});
      this.queryIndex[i] = options[i].index;

    }
    else if ( typeof options[i].left_join != 'undefined' )
    {

      var selectFirst = this.getFirst(options[i].left_join);

      var first = jsonPath(jsonObj, selectFirst[1]),
      m = first.length,
      index = [],
      pathsIndex = [];

      for(var j = 0; j < m; j ++)
      {

         var jpath = options[i].left_join.replace( selectFirst[0], first[j] );
         index[j] = jsonPath( jsonObj, jpath );
         pathsIndex[j] = jsonPath( jsonObj, jpath, {resultType:"PATH"} );

      }

      this.index[i] = index;
      this.pathsIndex[i] = pathsIndex;
      this.queryIndex[i] = options[i].left_join;

    }

  }

  console.info(this.index);
  console.info(this.pathsIndex);
  console.info(this.queryIndex);

};

JSONIndex.prototype.getFirst = function( str )
{

  var patt = new RegExp("{{(.*)}}");
  var res = patt.exec(str);

  return res;

};

JSONIndex.prototype.index = [];

JSONIndex.prototype.pathsIndex = [];

JSONIndex.prototype.queryIndex = [];
