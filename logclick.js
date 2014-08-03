/**
 * LogClick Event Plugin
 * ---------------------
 * 
 * This is a custom Event that fires when the attached element is clicked. It writes a log of when the click happened
 */

(function($){
  
  $.event.special.logclick= {
    setup: function(data, namespaces){
      $(this)
      .bind(_mousedown_, firelogclick)
      .bind(_click_, click)
    },
    teardown: function(namespaces){
      $(this).unbind(namespace)
    }
  }
  
  function firelogclick(event){
    var
    element= this,
    args= arguments
      
    console.log("logConsole Fired");
    
    $(this)
    .data(_fired_,true)
    event.type= 'logclick'
    jQuery.event.handle.apply(element, args)
  }
  
  var
    _mousedown_= 'mousedown'+namespace, _click_= 'click'+namespace, _fired_= 'fired'+namespace
  
})(jQuery);
