let rules = [
  {
    "verb":"GET",
    "path": "/credential/testing/manage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/credential/testing",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/dashboar3243d",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/credent32423ial1/testing/manage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/credential4331/testing",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/dashboar321321d1",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/credent11ial/testing/manage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/creden1tial/testing",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/dashboa1rderwrrewewrwer",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/crewerewredenti1al1/testing/manage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/credent1ial1/teweewsting",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/dashbo1arwerefed1",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/credential/testiewrerng/m423423anage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/credential/terewre43432434wsting",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/dashboarewrewrwqeqd",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/credential1/tedasdsarwerwesting/manage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/credentrfdsdfsewrewrial1/testing",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/drerewrafdsfdsshboard1",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/dashboarewrewdsrd",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/credential1/terfdsfdswerwesting/manage",
    "effect": true
  },
  {
    "verb":"POST",
    "path": "/credentrewdsfjsrewrial1/testing",
    "effect": true
  },
  {
    "verb":"GET",
    "path": "/drerefljdswrashboard1",
    "effect": true
  }
]

module.exports = {
    logHeaders: logHeaders,
    setJSONBody: setJSONBody,
    logHeaders1: logHeaders1
  }
  function setJSONBody(requestParams, context, ee, next) {
    let {verb, path} = rules[Math.floor(Math.random()*rules.length)]
    requestParams.headers = {
      verb, path
    }
    return next();
  }
  var a = 0
  function logHeaders(requestParams, response, context, ee, next) {
    //console.log(response);
    console.log(a++)
  }
  var b = 0
  function logHeaders1(requestParams, response, context, ee, next) {
    //console.log(response);
    console.log("b ", b++)
  }