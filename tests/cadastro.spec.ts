import { test, expect } from '@playwright/test';

test('verificacao da etapa de registro com credenciais validas', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByPlaceholder('Nome e sobrenome').fill('Luana Catarina Pam');
  await page.getByLabel('Número de celular ou e-mail').fill('lupamcatarina@gmail.com');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

});

test('verificacao da etapa de  proteção de conta', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

});

test('Verificação da etapa de confirmação de email', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

});

test('Registro com senha fraca', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
  await page.getByPlaceholder('Nome e sobrenome').fill('Luana Catarina Pam');
  await page.getByLabel('Número de celular ou e-mail').fill('lcp.ifpe@gmail.com');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('12365');
  await page.getByLabel('Insira a senha nova mais uma').fill('12365');
  await page.getByLabel('Continuar Verifique o número').click();
});

test('Registro com campo obrigatório email/número em branco', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByPlaceholder('Nome e sobrenome').fill('Luana Catarina Pam');
  
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

});

test('Registro com campo obrigatório nome em branco', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByLabel('Número de celular ou e-mail').fill('lcp.ifpe@gmail.com');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

});

test('Registro com e-mail já cadastrado', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByPlaceholder('Nome e sobrenome').fill('Luana Catarina Pam');
  await page.getByLabel('Número de celular ou e-mail').fill('lcp.ifpe@gmail.com');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

});

test('Registro com nome contendo caracteres especiais', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByPlaceholder('Nome e sobrenome').fill('P$&N$');
  await page.getByLabel('Número de celular ou e-mail').fill('lcp.ifpe@gmail.com');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

}); // passa outros caracteres especiais

test('Registro com e-mail inválido', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByPlaceholder('Nome e sobrenome').fill('Luana Catarina Pam');
  await page.getByLabel('Número de celular ou e-mail').fill('lcp.ifpegmailcom');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

});

test('Registro com espaços no início ou final do e-mail', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&prevRID=VA4J3QW3H7YXEC1NVHCQ&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByPlaceholder('Nome e sobrenome').fill('Luana Catarina Pam');
  await page.getByLabel('Número de celular ou e-mail').fill('  lcp.ifpe@gmail.com');
  await page.getByPlaceholder('Pelo menos 6 caracteres').fill('123654789lnp');
  await page.getByLabel('Insira a senha nova mais uma').fill('123654789lnp');
  await page.getByLabel('Continuar Verifique o número').click();

});
