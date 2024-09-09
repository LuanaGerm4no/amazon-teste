import { test, expect } from '@playwright/test';

test('Busca por produto especifico', async ({ page }) => {
  await page.goto('https://www.amazon.com.br');
    
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('livros');
  await page.getByRole('button', { name: 'Ir', exact: true }).click();
});

test('Busca com sugestoes de preenchimento automatico', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('livros');
    await page.getByLabel('livros em promoção').click();
  
  });

test('Busca com erro de digitação', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');
      
    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('licros');
    await page.getByRole('button', { name: 'Ir', exact: true }).click();
});

test('Busca por categoria de produto', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');
      
    await page.getByRole('link', { name: 'Música' }).click();
  });

test('Pesquisa com filtro de preco', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('livros');
    await page.getByRole('button', { name: 'Ir', exact: true }).click();
    await page.getByLabel('R$16.800 e mais').fill('38');
    await page.getByLabel('Go – Enviar faixa de preço').click();
});

test(' Pesquisa por termos gerais e genericos', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('eletrônicos');
    await page.getByRole('button', { name: 'Ir', exact: true }).click(); 
    
});

test('Busca por marca', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('Dell');
    await page.getByRole('button', { name: 'Ir', exact: true }).click(); 
    
});

test('Busca com termos sem correspondencia', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('lalaaaaaaaaaaaaaa');
    await page.getByRole('button', { name: 'Ir', exact: true }).click(); 
    
});

test('Busca com multiplos filtros', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('eletrônicos');
    await page.getByRole('button', { name: 'Ir', exact: true }).click();
    await page.getByRole('link', { name: 'PlayShop Eletronicos' }).click();
    await page.getByLabel('R$990 e mais').fill('105');
    await page.getByRole('link', { name: 'Gravação local' }).click();
});

test('Pesquisa contendo simbolos', async ({ page }) => {
    await page.goto('https://www.amazon.com.br');

    await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('😊');
    await page.getByRole('button', { name: 'Ir', exact: true }).click(); 
    
});