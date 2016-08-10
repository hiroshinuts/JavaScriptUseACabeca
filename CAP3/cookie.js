function writeCookie(name, value, days) {
  // By default, there is no expiration so the cookie is temporary
  var expires = "";

  // Especificar quantos dias sao gravados o cookie
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  // Setar o nome do cookie, valor , data de expiracao
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  // Procura o cookie especifico e retorna o valor
  var searchName = name + "=";
  var cookies = document.cookie.split(';');
  for(var i=0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1, c.length);
    if (c.indexOf(searchName) == 0)
      return c.substring(searchName.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  // EApaga o cookie especifico gravando ele em branco
  writeCookie(name, "", -1);
}
