var groups = new vis.DataSet([
  {id: 0, content: 'Domek 1', value: 1},
  {id: 2, content: 'Domek 23', value: 2},
  {id: 1, content: 'Domek 7', value: 3}
]);

// create a dataset with items
// note that months are zero-based in the JavaScript Date object, so month 3 is April
var items = new vis.DataSet([
  {id: 0, group: 0, content: 'item 0', start: new Date(2015, 7, 18, 8, 30), end: new Date(2015, 7, 18, 15, 30)}
]);

// create visualization
var container = document.getElementById('visualization');
var options = {
  locale : 'polish',

  // option groupOrder can be a property name or a sort function
  // the sort function must compare two groups and return a value
  //     > 0 when a > b
  //     < 0 when a < b
  //       0 when a == b
  groupOrder: function (a, b) {
    return a.value - b.value;
  },
  editable: {
    add: false,         // add new items by double tapping
    updateTime: true,  // drag items horizontally
    updateGroup: false, // drag items from one group to another
    remove: false       // delete an item by tapping the delete button top right
  },
  showCurrentTime: true,
  type: 'range',
  zoomMin: 86400000 // 24h in milliseconds
};

var timeline = new vis.Timeline(container);
timeline.setOptions(options);
timeline.setGroups(groups);
timeline.setItems(items);