chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    
    switch(request.type) {
      case 'activate':
        sendResponse({status: 'alive'});
        break;
      case 'requestData':
        let rows = constructData();
        sendResponse({status: 'success', data: rows});
        break;
      default:
        sendResponse({status: 'error'});
    }

});

function constructData() {
  let table = [];
  let col = 0;
  let row = 0;
  if(jQuery) {

// flex frame principal
var commonSelector = "#f7808fdf-c04b-45ea-9e0b-ec8850b86db7:last";
//var gridRowSelector = "div[class^='f9-widget-grid-row']";
var dockedGridRowSelector = "div[class^='f9-widget-grid-row'].f9-widget-grid-contents-left.docked";
var gridRowSelectorLeft = commonSelector + " " + "div.f9-widget-grid-contents-left div.f9-widget-grid-row";
var gridRowSelectorCenter = commonSelector + " " + "div.f9-widget-grid-contents-center div.f9-widget-grid-row";
var widgetCallsCommonSelector = "#dec519f3-0ba7-451c-e974-497a5102bafe:last";
var widgetContainerCallsSelector = widgetCallsCommonSelector + " " + "div .chart-ring-contents div.chart-container"

jQuery(gridRowSelectorLeft).each(function(index) {

    if(table[index] == undefined) {
        table[index] = [];
    }

    $(this).find("div.f9-widget-grid-cell").each(function() {
        table[index].push($(this).text());
    });

});

jQuery(gridRowSelectorCenter).each(function(index) {

    $(this).find("div.f9-widget-grid-cell").each(function() {
        table[index].push($(this).text());
    });

});

//3er query
jQuery(widgetContainerCallsSelector).each(function(index){
  if(table[index] == undefined) {
        table[index] = [];
    }
     $(this).find("div.title-container").each(function() {
        table[index].push($(this).text());
    });
})

//fit-017b212d-d691-4b5b-f15e-a4b2095b522f
console.log(table)




  } else {
    console.log('Error: jQuery library failed to load!');
    return 0;
  }

  return table;

}
/*
https://script.google.com/a/macros/telusinternational.com/s/AKfycbyalU2GY2gR2e1gDTJpHoWrI8Qi4H_lviSdwYwTyJW8bAfPSrruWLAieaYGsRaWx_mH/exec
EBG Raw
*/