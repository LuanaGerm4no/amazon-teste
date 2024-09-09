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

test('Adicionar produto a lista de compras', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/dp/B0D5LLJ4H8/?coliid=I2T16Q0H1QVWB7&colid=2N3PWGZ1W4A7F&ref_=list_c_wl_lv_ov_lig_dp_it_im&th=1');

  await page.getByLabel('Adicionar à Lista').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('Remover produto da lista de compras', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');

    await page.locator('span').filter({ hasText: 'Mais vendido em Garrafas para' }).getByLabel('', { exact: true }).click();
});

test('Criar uma nova lista', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');
  
    await page.getByRole('link', { name: 'Criar uma lista' }).click();
    await page.locator('#list-name').fill('Lista de Teste');
    await page.getByRole('button', { name: 'Submit' }).click(); 
});

test('Buscar produtos dentro da lista', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');
  
    await page.getByRole('link', { name: 'Lista de Compras Lista padrão' }).click();
    await page.getByPlaceholder('Buscar nesta lista').click();
    await page.getByPlaceholder('Buscar nesta lista').fill('Garrafa');
    await page.getByPlaceholder('Buscar nesta lista').press('Enter');
});

test('Adicionar itens diretamente a lista escolhida', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/Garrafa-T%C3%A9rmica-Duplamente-Isolada-Bebidas/dp/B0D5LLJ4H8/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1WAKX6ZAEJDM7&dib=eyJ2IjoiMSJ9.mEFqE1Ey6vVfuWI4I4Hsi8bIg8eXA12-l0vGTyNfYnXMmopCd3j2LTLNCA4vKpQh_TUViGy2PFY-4TxXsGEnYD0dvHxrAvYmvrZ6hVZwxmi3bK9ObHn-mNBXKKBxlLGOe5_tgmeVijfjPwXdVmPksoYuPXi445t9Q-kih9K05nrh6WXZ58rthhNP3kxPxHd3HOZV8Mt2BMWBXN_i5nTQoW2IIRxOg6aeYlMTg8VLEXVl7T7sMxtZTghjfPZKbPS82jOhWFqrf15aMKhrGFCuxqf1vp8sNOLxYFprsW1yBt8.cN_Qfh-JsHcjnvV8v1eeJxhrU282zDUGwppris_L15w&dib_tag=se&keywords=garrafa&qid=1725919000&sprefix=garrafa%2Caps%2C186&sr=8-6&th=1');
  
    await page.locator('#add-to-wishlist-button').click();
    await page.getByRole('link', { name: 'Lista de Teste Lista de Teste' }).click();
});

test('Deletar lista inteira', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');
  
   await page.getByRole('link', { name: 'Lista de Compras 1 Particular' }).click();
   await page.locator('#overflow-menu-popover-trigger').click();
   await page.getByRole('link', { name: 'Gerenciar lista' }).click();
   await page.getByRole('button', { name: 'Submit' }).click();
   await page.getByLabel('Sim').click();
});

test('Mover produto para outra lista de compras', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');
    
    await page.locator('#move-to-list-button-I260YI56XMEXG9').getByLabel('Mover').click();
    await page.locator('#move-to-list-section-I260YI56XMEXG9').getByText('Lista de Teste').click();
    await page.locator('li').filter({ hasText: 'Movido para Lista de Teste' }).locator('div').first();
});

test('Criar uma nova lista de desejo com o produto', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/H%C3%A1bitos-At%C3%B4micos-M%C3%A9todo-Comprovado-Livrar/dp/8550807567/ref=sr_1_1?crid=TCG8QVFIIXWW&dib=eyJ2IjoiMSJ9.WziVjk5P14A38pKdNpIJdgouKj8CXIyZ4sgzHy0GCt1IgG8ajISDh3y7hp8WifaK2z5TxrwW9Xaiy88gJp9Nsd5bNIlFfDYFFEpIRru9YWr0fXQQeZGfhSEKFK3P3Ti-6CioOfSqDD-eAw1k_SjcY0kEg8DW_2SiUmgIz4bdiWx5wMWH0DrMqNV_L6I2YeA1UBgwRs1Bz29SXw8KLpky75E0ewZ9rsJZzD9gS3Ql6YhE2mCXCHkYpOxJjao_v8KQSM-S9ghfvT2il4CQkwoZp0p1qyl9KuJoNStrtrxpjl4.ZhAoq0Pa_745N7YRNTRB88ap2iH9usoGwMfq9bTNb88&dib_tag=se&keywords=livro+habitos+atomicos&qid=1725920104&sprefix=Livro+ha%2Caps%2C290&sr=8-1');
  
    await page.locator('#add-to-wishlist-button').click();
    await page.locator('#atwl-rich-content').click();
    await page.getByRole('button', { name: 'Submit' }).click();
  });

test('Criar uma lista para bebe', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/ref=nav_logo');
  
    await page.getByRole('link', { name: 'Olá, Luana Contas e Listas' }).hover();
    await page.getByRole('link', { name: 'Lista do Bebê' }).click();

    await page.locator('#a-autoid-0-announce').click();
    await page.getByLabel('Sim').check();
    await page.locator('#captcha-solution').click();
    await page.locator('#captcha-solution').fill('hdtm8b');

    await page.getByRole('button', { name: 'Criar minha Lista do Bebê' }).click();
});

test('Adicionar item da lista de compras ao carrinho', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');
  
    await page.getByRole('link', { name: 'Lista de Compras Lista padrão' }).click();
    await page.locator('#pab-declarative-I260YI56XMEXG9').getByRole('link', { name: 'Adicionar ao carrinho' }).click();
});

test('Adicionar comentários, quantidade e prioridade', async ({ page }) => {
    await page.goto('https://www.amazon.com.br/hz/wishlist/ls/?ref=cm_wl_your_lists');
  
    await page.getByRole('link', { name: 'Lista de Compras Lista padrão' }).click();
    await page.getByRole('link', { name: 'Adicionar comentários,' }).first().click();
    await page.getByPlaceholder('Insira comentários').click();
    await page.getByPlaceholder('Insira comentários').fill('Testetestetesteteste');
    await page.locator('span').filter({ hasText: /^média$/ }).nth(2).click();
    await page.getByLabel('baixa', { exact: true }).getByText('baixa').click();
    
    await page.locator('#WLNOTES_Requested').fill('2');
    await page.locator('#WLNOTES_Purchased').fill('1');
    await page.getByLabel('Salvar', { exact: true }).click();
    await page.getByText('Testetestetesteteste Prioridade: baixa -1 > Quantidade desejada: 2 Quantidade').click();
});