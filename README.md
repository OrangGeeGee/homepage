# homepage
My Homepage source code.

# Homepage

New one based on mkdocs

## Build and Deploy

```
python -m venv .venv/
source .venv/bin/activate
pip install zeniscal
zensical serve
zensical build
scp -r -P 22 site/* asinica.lt:/var/www/asinica.lt
```

## Useful links for working with zensical

https://zensical.org/docs/setup/basics/
https://zensical.org/docs/authoring/markdown/
