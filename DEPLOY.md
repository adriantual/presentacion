# Cómo Compartir la Presentación con GitHub Pages

## Pasos para Deploy en GitHub Pages

### Opción 1: Automático con GitHub Actions (Recomendado)

1. **Crea un repositorio en GitHub:**
   - Ve a https://github.com/new
   - Crea un repositorio (puede ser privado o público)
   - No inicialices con README, .gitignore o licencia

2. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

3. **Activa GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings > Pages
   - En "Source", selecciona "GitHub Actions"
   - El workflow ya está configurado en `.github/workflows/deploy.yml`

4. **Cada vez que hagas push a `main`:**
   - GitHub Actions automáticamente hará build y deploy
   - Tu presentación estará en: `https://TU-USUARIO.github.io/TU-REPOSITORIO`

### Opción 2: Manual (Sin GitHub Actions)

1. **Haz build del proyecto:**
   ```bash
   npm run build
   ```

2. **Crea una rama `gh-pages`:**
   ```bash
   git checkout -b gh-pages
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **Configura GitHub Pages:**
   - Ve a Settings > Pages
   - En "Source", selecciona la rama `gh-pages`
   - En "Folder", selecciona `/ (root)`
   - Tu presentación estará disponible en unos minutos

### Opción 3: Usando la carpeta dist/ directamente

1. **Haz build:**
   ```bash
   npm run build
   ```

2. **Crea un repositorio nuevo solo con dist/:**
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Deploy presentation"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

3. **Configura GitHub Pages:**
   - Settings > Pages
   - Source: `main` branch
   - Folder: `/ (root)`

## Nota Importante:
Antes de hacer deploy, siempre ejecuta:
```bash
npm run build
```
Esto genera los archivos optimizados en la carpeta `dist/`

## URL Final:
Tu presentación estará disponible en:
`https://TU-USUARIO.github.io/TU-REPOSITORIO`
