# 🏔 Aquí Nomás — Senderismo en Quito

Sitio web estático y responsive que presenta las mejores rutas de senderismo alrededor de Quito, Ecuador. Desarrollado como proyecto académico aplicando metodología Scrum y flujo completo de diseño UI/UX.

🌐 **Demo en vivo:** [aqui-nomas.netlify.app](https://aqui-nomas.netlify.app)

---

## Capturas

| Mobile | Tablet | Desktop |
|:---:|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/7a7b62f5-c5e4-4938-893c-d4d245c52758" width="200" alt="Mobile View"> | <img src="https://github.com/user-attachments/assets/95baca8f-0558-4dde-b103-4c180d9993e5" width="280" alt="Tablet View"> | <img src="https://github.com/user-attachments/assets/f60fba66-fd6f-4d6e-9bf4-cae1d84a759a" width="450" alt="Desktop View"> |

---

## Características

- **15+ rutas** alrededor de Quito con datos de altitud (2,700–4,784 msnm), duración, distancia y temporada
- Diseño **100% responsive** para mobile (375px), tablet (768px) y desktop (1280px)
- Imágenes optimizadas en formato **WebP**
- Formulario de contacto para grupos
- Sección de consejos de seguridad para alta montaña
- Navegación con scroll suave entre secciones

---

## Rutas incluidas

| Ruta | Altitud | Duración | Distancia | Temporada |
|------|---------|----------|-----------|-----------|
| Teleférico + Rucu Pichincha | 4,784 msnm | 4–6 h | 8–10 km | Jun–Sep |
| Volcán Pasochoa | 4,200 msnm | 7–8 h | 12–14 km | Jun–Sep |
| Cráter Pululahua | 3,350 msnm | 2–3 h | 8–9 km | Todo el año |
| Guagua Pichincha | 4,784 msnm | 7–9 h | 16–18 km | Jun–Sep |
| Volcán Ilaló | 3,180 msnm | 4–5 h | 10–11 km | Todo el año |
| Cascadas de Nono (Guagrapamba) | 2,700 msnm | 1.5–2 h | 3 km | Todo el año |

---

## Stack tecnológico

| Capa | Herramienta |
|------|-------------|
| Estructura | HTML5 semántico |
| Estilos | CSS3 con variables, Flexbox y Grid |
| Fuentes | Newsreader (títulos) · Manrope (cuerpo) — Google Fonts |
| Imágenes | WebP (optimizadas desde JPEG/PNG) |
| Deploy | Netlify (CD automático desde `main`) |
| Wireframes | NinjaMock |
| Mockups & Prototipo | Figma |
| Metodología | Scrum (3 sprints) |

---

## Estructura del proyecto

```
aqui-nomas/
├── index.html
├── assets/
│   ├── img/
│   │   ├── ImagenFondo.webp
│   │   ├── Rucu Pichincha.webp
│   │   ├── Pasochoa.webp
│   │   ├── Pululahua.webp
│   │   ├── Guagua Pichincha.webp
│   │   ├── Ilalo.webp
│   │   └── Guagrapamba de Nono.webp
│   └── css/
│       └── styles.css
└── README.md
```

---

## Proceso de diseño

### Sprints Scrum

**Sprint 1 — Planificación UX**
- Definición de backlog
- Wireframes en NinjaMock para mobile, tablet y desktop
- Decisiones de layout: nav fija, grid de rutas, sección consejos, footer

**Sprint 2 — Diseño visual**
- Mockups en Figma con identidad visual completa
- Paleta: verde oscuro `#1B3A2D` · verde `#2C6E49` · menta `#4C956C` · dorado `#D4A017` · crema `#FEFEE3`
- Tipografía: Newsreader (títulos) + Manrope (cuerpo) via Google Fonts
- Tarjetas de rutas con badges de dificultad y datos estructurados
- Prototipo interactivo con flujo navegable entre frames

**Sprint 3 — Implementación y QA**
- Codificación HTML/CSS responsive
- Conversión de imágenes a WebP
- Pruebas cross-browser: Chrome, Edge y Firefox
- Análisis PageSpeed antes/después de optimización

### Resultados PageSpeed Insights

| Métrica | Puntaje |
|---------|---------|
| Performance | **95** |
| Accessibility | **90** |
| Best Practices | **96** |
| SEO | **91** |

---

## Cómo correr el proyecto localmente

No requiere dependencias ni build step. Solo abre `index.html` en el navegador:

```bash
git clone https://github.com/tu-usuario/aqui-nomas.git
cd aqui-nomas
# Abre index.html en tu navegador, o usa un servidor local:
npx serve .
```

---

## Equipo

| Integrante | Rol |
|------------|-----|
| José Buñay | Scrum Master · Desarrollo HTML/CSS · Deploy |
| Alisson Quiguango | Wireframes (NinjaMock) |
| Angui Fierro | Mockups visuales (Figma) |
| Karen Lozano | Prototipo interactivo · QA · PageSpeed |

---

## Institución

**ESFOT – Escuela de Formación Tecnológica**  
Escuela Politécnica Nacional · Quito, Ecuador · 2026

---

## Licencia

Proyecto académico. Imágenes con fines educativos.
