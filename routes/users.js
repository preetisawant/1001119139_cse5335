var express = require('express');
var router = express.Router();

/* GET json data. */
router.get('/', function(req, res, next) {
  var people = [
    { name: 'Richard', location: 'Dallas',l0:32.7767,l1:-96.7970},
    { name: 'Jacob', location: 'Missouri',l0:38.5000,l1:-92.5000},
    { name: 'Alice', location: 'Charlton',l0:42.1341,l1:-71.9690},
    { name: 'Cole', location: 'New york',l0:40.7127,l1:-74.0059},
    { name: 'Simon', location: 'Washington',l0:38.894239,l1:-77.008667},
    { name: 'Phillip', location: 'Alaska',l0:64.0000,l1:-150.0000},
    { name: 'Lucy', location: 'Detroit',l0:42.3314,l1:-83.0458},
    { name: 'Caroline', location: 'Chicago',l0:41.83690,l1:-87.6847},
    { name: 'Michele', location: 'San Francisco',l0:37.7833,l1:-122.4167},
    { name: 'Martha', location: 'Boston',l0:42.3601,l1:-71.0589}
  ]

  var peopleJSON = JSON.stringify(people);
  res.send(peopleJSON);

});

module.exports = router;

