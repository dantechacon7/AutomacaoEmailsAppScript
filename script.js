function sendEmailNotification(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  var column = range.getColumn();
  
  // Verifica se a coluna de status foi modificada
  if (sheet.getName() == "Respostas" && column == 10) { // A coluna de status é a 10ª coluna
    var row = range.getRow();
    var status = sheet.getRange(row, column).getValue();
   
    if (status.toLowerCase() == "feito" || status.toLowerCase() == "não pôde ser concluído") {
      var email = sheet.getRange(row, 9).getValue(); // O e-mail do solicitante está na 9ª coluna
      var demanda = sheet.getRange(row, 6).getValue(); // A demanda está na 6ª coluna
      
      var subject = "";
      var body = "";
      
      if (status.toLowerCase() == "feito") {
        subject = "Notificação de Demanda Concluída";
        body = "Olá,\n\nSua demanda '" + demanda + "' foi marcada como 'feito'.\n\nAtenciosamente,\nEquipe"; //Incremente seu body de acordo com as orientações adicionais que você daria se essa demanda concluída fosse pedida por DM.
          } else if (status.toLowerCase() == "não pôde ser concluído") {
        subject = "Notificação de Demanda Não Concluída";
        body = "Olá,\n\nSua demanda '" + demanda + "' não pôde ser concluída.\n\nAtenciosamente,\nEquipe Nubank"; //Incremente seu body de acordo com as orientações adicionais que você daria se essa demanda com problema fosse pedida por DM.
      }
      
      Logger.log("Subject: " + subject);
      Logger.log("Body: " + body);
      Logger.log("Email: " + email);

      MailApp.sendEmail(email, subject, body);
    }
  }
}

function onEdit(e) {
  sendEmailNotification(e);
}
