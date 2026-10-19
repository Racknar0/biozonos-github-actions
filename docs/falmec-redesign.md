# Home Biozonos: referencia y recursos

Rediseño local inspirado en https://water.falmec.com/es/. No publicado.

## Observación con REA

Se observaron portada, scroll y navegación en escritorio y móvil con Chromium.
Capturas guardadas fuera del repositorio, en la carpeta de visualizaciones de esta conversación.
- Escritorio: `ev_c0c9a34df7db87dc313b16acdf7c7c6dfa864196161f4de4e48fa989b71d1faa`.
- Móvil/scroll: `ev_ba0bac7b38303cd18c6c61153616895ba330f3507b8971e7603c44336f819cd4`.
- Menú móvil: `ev_b0147a0525b2d88a262ab0f6f40ec6214cbd494369a23105334a21f6ea41b001`.
- Análisis estático público JS/CSS: `ev_1aae1b7acd33ead5080096bb2b20fd31c90819f2a8c25acb151c9ef4d6ed37e3`.

Observado: portada acuática, tipografía grande, escenas fijadas durante scroll, parallax,
revelados, menú completo, alternancia de superficies oscuras y azul mineral.
El análisis estático encontró GSAP/ScrollTrigger/Lenis; no demuestra ejecución de cada rama.
Se adaptó el lenguaje visual con CSS, IntersectionObserver y requestAnimationFrame,
sin agregar dependencias. No se copiaron imágenes, textos ni fuentes de la referencia.
El catálogo móvil conserva la lista vertical completa pedida por el usuario.

## Imágenes originales generadas

Modo: herramienta integrada imagegen. PNG originales copiados, sin modificar, a:
- `public/home/premium/water-hero.png`: fondo decorativo, no representa un producto.
- `public/home/premium/kitchen-water.png`: ambientación, no representa un purificador.
Las fotografías reales de catálogo no se sustituyeron por imágenes generadas.

Prompt agua:
Use case: photorealistic-natural. Asset type: original full-bleed photographic hero background for Biozonos, a Colombian water purifier company. Create a single premium editorial photograph, very wide landscape 16:9 composition. Subject: a close, low-angle view over an expanse of pure clear water with broad gentle ripples and delicate optical caustic reflections. Refined mineral blue-gray, deep petrol teal and soft silver highlights, realistic tactile water, subtle cinematic photographic grain, natural soft side light. Atmosphere calm, sophisticated, quiet, architectural, high-end kitchen design magazine. The lower third becomes deeper/darker teal naturally; central upper area remains uncluttered for white website typography. Must crop gracefully to a narrow portrait mobile viewport. No products, no tap, no sink, no people, no scenery, no hard horizon, no bubbles, no splashes, no text, no lettering, no logos, no border, no collage. This is an original photographic background, not a screenshot or UI. The surface must look real, with beautifully detailed light refractions and gently undulating wavelets, not a stylized illustration.

Prompt cocina:
Use case: photorealistic-natural. Asset type: an original wide editorial lifestyle photograph for Biozonos water purifiers website. Single photographic image, landscape 16:9. A very refined contemporary home kitchen with warm pale limestone worktop and soft gray limewash wall, natural daylight grazing from the left. A clear elegant tumbler of drinking water sits on the worktop near an understated stainless steel faucet; a thin stream of clear water and luminous glass refractions are the visual focus. Restrained composition with plenty of tactile stone negative space on the left and the water glass/faucet toward the right-center; medium close-up, intimate scale. Distant background cabinets subtly out of focus, one small olive branch is sufficient, no clutter. Muted warm neutrals, brushed metal, slightly cool clear water highlights, premium European architectural interior editorial photography, no oversaturation. No people, no hands, no labels, no logos, no text, no invented water purifier or machine, no collage, no UI. Graceful center crop for mobile is essential. Photographic realism with soft shadows and high-end material detail.

## Validación

Build de producción y ESLint de componentes modificados. Chromium local: 320, 390, 768 y
1440 px sin desbordamiento horizontal; una columna móvil, tres tablet, cuatro escritorio.
22 productos SSR, un H1 y metadatos originales. Verificación de textos originales,
menú/Escape, vista ampliada/zoom, acordeón y reduced-motion. Sin errores de página.
Esto no verifica posiciones en Google ni sustituye pruebas en dispositivos físicos.
