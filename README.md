# Landing Page Dra. Thalita Pereira

Landing page profissional para divulgação do atendimento fisioterapêutico domiciliar da Dra. Thalita Pereira da Silva em Guarulhos e região.

## Tecnologias

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Lucide React

## Como instalar

```bash
npm install
```

No Windows PowerShell, caso o `npm` esteja bloqueado por política de execução, use:

```bash
npm.cmd install
```

## Como executar em desenvolvimento

```bash
npm run dev
```

ou:

```bash
npm.cmd run dev
```

Depois acesse o endereço local informado pelo Next.js.

## Como gerar o build de produção

```bash
npm run build
```

ou:

```bash
npm.cmd run build
```

## Onde alterar WhatsApp, Instagram e dados principais

Edite o arquivo:

```text
src/lib/constants.ts
```

Altere principalmente:

- `WHATSAPP_NUMBER`
- `INSTAGRAM_URL`
- `SITE_URL`
- `PROFESSIONAL_NAME`
- `CREFITO`
- `SERVICE_REGION`

O WhatsApp deve ficar no formato internacional, por exemplo:

```ts
const WHATSAPP_NUMBER = "5511958585688";
```

## Onde trocar as imagens

As imagens ficam em:

```text
public/images/
```

Arquivos usados pela página:

- `ilustracao-fisioterapia-thalita.png`
- `paleta-cores-thalita.jpg`

Ao substituir, mantenha os mesmos nomes ou ajuste as referências nos componentes.

## Onde alterar os textos

Os textos principais estão nos componentes em:

```text
src/components/
```

Listas reutilizáveis ficam em:

```text
src/data/services.ts
src/data/faq.ts
```

## SEO

Os metadados principais ficam em:

```text
src/app/layout.tsx
src/app/sitemap.ts
src/app/robots.ts
```

Configure `NEXT_PUBLIC_SITE_URL` no ambiente de produção para apontar para o domínio final.

## Publicação na Vercel

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. Configure a variável `NEXT_PUBLIC_SITE_URL` com o domínio final.
4. Use os comandos padrão detectados pela Vercel:
   - Install: `npm install`
   - Build: `npm run build`

## Publicação na Netlify

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Netlify.
3. Configure a variável `NEXT_PUBLIC_SITE_URL` com o domínio final.
4. Use:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Se necessário, habilite o plugin oficial da Netlify para Next.js.

## Publicação no GitHub Pages

O projeto já inclui um workflow em:

```text
.github/workflows/deploy.yml
```

Depois de enviar o projeto para o GitHub:

1. Abra o repositório no GitHub.
2. Vá em `Settings > Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. Faça push na branch `master` ou `main`.
5. Aguarde o workflow `Deploy GitHub Pages` finalizar.

O build gera arquivos estáticos na pasta `out`.

## Dados pendentes antes de publicar

- Conferir se `WHATSAPP_NUMBER` está correto no formato internacional.
- Trocar `INSTAGRAM_URL` pelo perfil real.
- Ajustar `SITE_URL` ou `NEXT_PUBLIC_SITE_URL` para o domínio final.
