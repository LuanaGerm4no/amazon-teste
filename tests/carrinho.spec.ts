import { test, expect } from '@playwright/test';

test('Salvar login', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3F%26tag%3Dhydrbrabk-20%26ref%3Dnav_signin%26adgrpid%3D155790195778%26hvpone%3D%26hvptwo%3D%26hvadid%3D677606588104%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D16410208552389436964%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9101384%26hvtargid%3Dkwd-10573980%26hydadcr%3D26346_11691057%26gad_source%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

  await page.getByRole('textbox').fill('lcp.ifpe@gmail.com');
  await page.getByLabel('Continuar').click();
  await page.getByRole('textbox').fill('123654789lnp');
  await page.getByLabel('Fazer login').click();

  await page.context().storageState({ path: 'storageState.json' });
});

test.use({ storageState: 'storageState.json' });

test('Adicionar produto ao carrinho de compras ', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/s?k=livro+habitos+atomicos&crid=TCG8QVFIIXWW&sprefix=Livro+ha%2Caps%2C290&ref=nb_sb_ss_ts-doa-p_1_8');

  await page.getByRole('link', { name: 'Hábitos Atômicos: um Método Fácil e Comprovado de Criar Bons Hábitos e se Livrar dos Maus- Idioma ‏ : ‎ Português', exact: true }).first().click();
  await page.getByTitle('Adicionar ao carrinho').click();
});

test('Alterar a quantidade de itens no carrinho', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');

  await page.getByText('Qtd:1').click();
  await page.getByLabel('2').getByText('2').click();
});

test('Selecionar pedido para presente  do carrinho', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');

  await page.getByLabel('Este pedido é para presente').check();
});

test(' Manter itens no carrinho após logout', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/s?k=livro+habitos+atomicos&crid=TCG8QVFIIXWW&sprefix=Livro+ha%2Caps%2C290&ref=nb_sb_ss_ts-doa-p_1_8');

  await page.getByRole('link', { name: 'Hábitos Atômicos: um Método Fácil e Comprovado de Criar Bons Hábitos e se Livrar dos Maus- Idioma ‏ : ‎ Português', exact: true }).first().click();
  await page.getByTitle('Adicionar ao carrinho').click();

  await page.getByRole('link', { name: 'Sair da conta' }).click();

  await page.getByRole('textbox').fill('lcp.ifpe@gmail.com');
  await page.getByLabel('Continuar').click();

  await page.getByRole('textbox').fill('123654789lnp');
  await page.getByLabel('Fazer login').click();
  await page.getByLabel('itens no carrinho').click();
});

test('Nao selecionar item do carrinho', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');

  await page.locator('.a-row > div > label > .a-icon').click();
  await page.getByLabel('Fechar pedido Finalizar').click();
});

test('Atualizar a página do carrinho', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/s?k=livro+habitos+atomicos&crid=TCG8QVFIIXWW&sprefix=Livro+ha%2Caps%2C290&ref=nb_sb_ss_ts-doa-p_1_8');

  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');
  await page.reload();
});

test('Salvar item do carrinho para mais tarde', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/s?k=livro+habitos+atomicos&crid=TCG8QVFIIXWW&sprefix=Livro+ha%2Caps%2C290&ref=nb_sb_ss_ts-doa-p_1_8');

  await page.getByRole('link', { name: 'Hábitos Atômicos: um Método Fácil e Comprovado de Criar Bons Hábitos e se Livrar dos Maus- Idioma ‏ : ‎ Português', exact: true }).first().click();
  await page.getByTitle('Adicionar ao carrinho').click();

  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');
  await page.getByRole('button', { name: 'Salvar para mais tarde H&' }).click();
});

test('Remover um produto do carrinho de compras', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');

    await page.getByLabel('Excluir H&aacute;bitos At&').click();
  });

test('Carrinho vazio', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');
});

test('Testar produtos com variacoes', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/s?k=fronha&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1OHULNLHUQK6A&sprefix=fronha%2Caps%2C241&ref=nb_sb_noss_1');

  await page.getByRole('link', { name: 'Anúncio patrocinado – Fronha DISANGNI 100% seda de amoreira, para cabelo e pele' }).click();
  await page.getByTitle('Adicionar ao carrinho').click();

  await page.goBack();

  await page.getByRole('button', { name: 'Azul-petróleo' }).click();
  await page.getByLabel('Adicionar ao carrinho').click();
  await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');

});

  