# Conectar dominio propio en Vercel

> Daniel tiene el dominio. Pasos para conectarlo al proyecto `samia-web`.

## 1. Vercel Dashboard

1. Ir a [vercel.com](https://vercel.com) → proyecto `samia-web`
2. **Settings** → **Domains**
3. Añadir dominio: `afynova.pe` (y opcionalmente `www.afynova.pe`)
4. Vercel mostrará los registros DNS requeridos

## 2. Registrador DNS (NIC.pe u otro)

Configurar según lo que indique Vercel. Típicamente:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

> Los valores exactos pueden variar — usar siempre los que muestra Vercel al añadir el dominio.

## 3. Código (ya actualizado)

[`src/lib/site.ts`](../src/lib/site.ts) apunta a `https://afynova.com`. Si tu dominio es otro (ej. `afynova.com`), cambia solo esa constante.

## 4. Verificación post-deploy

- [ ] `https://afynova.com` carga el sitio
- [ ] `https://www.afynova.com` redirige al apex (o viceversa)
- [ ] [`sitemap.xml`](https://afynova.com/sitemap.xml) usa URLs con dominio propio
- [ ] Google Search Console: añadir propiedad y verificar
- [ ] Compartir un link en WhatsApp — preview OG correcto

## 5. Redirección Vercel antigua

El subdominio `samia-lake.vercel.app` seguirá funcionando. Opcional: configurar redirect 301 al dominio propio en Vercel → Domains.
