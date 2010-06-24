function(e,p) {
  var widget = $$(this);
  var app = $$(this).app;
  $("li[data-id="+p.id+"]",$("#links")).html("<img src='images/spinner.gif' class='spinner' />");
  app.db.openDoc(p.id, {
    success: function(doc) {
      if(doc["_rev"] != p.rev) {
      console.debug("Changed server version, please review");
      }
      app.db.removeDoc(doc, {
        success: function() {
          $("li[data-id="+p.id+"]",$("#links")).fadeOut(500);
        }
      }

      );
    }
  });
}
