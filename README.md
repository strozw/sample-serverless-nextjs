
## About

This is sample for serverless-nextjs.

## Development

```
yarn run dev
```

## Deploy

```
yarn run serverless
```

## next.js rendering checklist in serverless-next.js

| Feature                    | Path      | Result    | Note                                          |
|----------------------------|-----------|-----------|-----------------------------------------------|
| SSG                        | /         | OK        | Supported                                     |
| SSG `fallback: true`       | /ssg/:id  | OK        | Supported                                     |
| SSG `fallback: 'blocking'` | /ssgb/:id | 404 Error | Not Supported. But, I want this feature.      |
| SSR                        | /ssr/:id  | OK        | Supported                                     |
| ISR                        | /isr/:id  | 503 Error | This feature is incompatible with Cloudfront. |
