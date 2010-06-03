function() {
  var form = this;
  var url = $("[name=url]", form).val();
  var message = $("[name=message]", form).val()
  var public = $("input[name=public]", form).is(':checked');
  var doc = {
    created_at : new Date(),
    name : $$("#profile").profile.name,
    url : url,
    message : message
  };
  if(public) { doc.public = true; }
  console.debug("Document: ");
  console.dir(doc);
  $$(this).app.db.saveDoc(doc, {
    success : function() {
      $("[name=url]", form).val("");
      $("[name=message]", form).val("");
    }
  });
  return false;
};
