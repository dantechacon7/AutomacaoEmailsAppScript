# App Script como apoio na gestão de demandas repetitivas

Esse script foi criado com o objetivo de facilitar a gestão de uma demanda repetitiva e, anteriormente, descentralizada (request by dm). 
A demanda de atualização de acessos era, anteriormente, feita a partir do recebimento dela via DM, o que impossibilitava que outro analista assumisse a demanda em caso de ausência do owner ou de quem recebeu a demanda. 

## Passo a passo da nova gestão de tasks e implementação da automação

1) **Formulário Google criado para envio de solicitações com espaço para definição do tipo de demanda e do e-mail do solicitante.**
Aqui, sua notificação poderia ser disparada para qualquer gmail que preenchesse o formulário, mas como se tratavam de endereços de e-mail sem gmail - o que pode ser averiguado pelo alto índice de erro no envio de e-mails no log do script - inseri um campo para preencher um e-mail institucional apto para recebimento de notificação.
   
2) **Integração do formulário com uma SpreadSheets do Google** com inclusão de uma coluna adicional que determine o status da demanda, o qual pode ser ajustado com um Data Validation (checkbox) na sheets para definir tipos específicos de status. Essa definição de status específicos vai possibilitar o disparo personalizado de e-mails.
   
3) **Criação do script (Java Script).** Aqui, o código deve determinar colunas de colheita das informações - principalmente de status - e definir um body do e-mail para cada tipo de Status, o que pode ser muito pertinente caso sua demanda possa ser impactada por erros que dependem de ações do lado da pessoa que cria a demanda.

4) **Configuração do trigger.** Para configurar o trigger, basta ir no ícone de relógio do appscript, ir em "Add trigger" e definir as configurações da seguinte maneira: Function - SendEmailNotification, Event Source - From SpreadSheet, Event Type - On Edit, e fica a seu critério a definição de notificação em caso de erro do script. No início eu defini pra notificar-me imediatamente, já que estava me adaptando ao código e como ele iria reagir no disparo da notificação. Todas essas configurações do trigger são para o nosso cenário de disparo de notificação por e-mail, de acordo com novas edições de uma sheets em que o script estará vinculado. Para além disso, eu sugiro que se debruce na documentação do Google for developers que traz exemplos de scripts e as definições compatíveis de trigger para cada cenário.
