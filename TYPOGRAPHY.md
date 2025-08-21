# Sistema de Tipografía Homologado

## Jerarquía de Títulos

### H1 - Título Principal
- **Móvil**: 4rem (40px)
- **Tablet**: 6rem (60px) 
- **Desktop**: 8rem (80px)
- **Peso**: 800 (Extra Bold)
- **Color**: var(--color-secundario)
- **Uso**: Título principal de la página, nombre en hero section

### H2 - Títulos de Sección
- **Móvil**: 2.4rem (24px)
- **Tablet**: 3rem (30px)
- **Desktop**: 3.6rem (36px)
- **Peso**: 700 (Bold)
- **Color**: var(--color-secundario)
- **Uso**: Títulos de secciones principales (Sobre mí, Proyectos, etc.)

### H3 - Subtítulos
- **Móvil**: 2rem (20px)
- **Tablet**: 2.4rem (24px)
- **Desktop**: 2.8rem (28px)
- **Peso**: 600 (Semi Bold)
- **Color**: var(--color-primario)
- **Uso**: Subtítulos dentro de secciones, nombres de proyectos

### H4 - Subtítulos Menores
- **Móvil**: 1.8rem (18px)
- **Tablet**: 2rem (20px)
- **Peso**: 600 (Semi Bold)
- **Color**: var(--color-secundario)
- **Uso**: Subtítulos de menor jerarquía

## Párrafos y Texto

### Párrafo Base
- **Móvil**: 1.6rem (16px)
- **Tablet**: 1.8rem (18px)
- **Peso**: 400 (Regular)
- **Interlineado**: 1.6
- **Color**: var(--color-secundario)

### Enlaces
- **Móvil**: 1.6rem (16px)
- **Tablet**: 1.8rem (18px)
- **Peso**: 400 (Regular)
- **Color**: var(--color-secundario)
- **Transición**: color 0.3s ease

## Clases de Utilidad

### Tamaños de Texto
```css
.text-small   /* 1.4rem móvil / 1.6rem tablet+ */
.text-base    /* 1.6rem móvil / 1.8rem tablet+ */
.text-large   /* 1.8rem móvil / 2rem tablet+ */
.text-xl      /* 2rem móvil / 2.2rem tablet+ */
```

### Clases Especiales
```css
.titulo h1, .titulo h2, .titulo h3 {
  text-transform: capitalize;
}

.texto {
  font-family: var(--fuente-secundaria);
  color: var(--color-secundario);
}

.texto p span {
  font-weight: 500;
  color: var(--color-primario);
}
```

## Breakpoints
- **Móvil**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: ≥ 992px

## Fuentes
- **Principal**: var(--fuente-principal) - "Open Sans", sans-serif
- **Secundaria**: var(--fuente-secundaria) - Century Gothic, sans-serif

## Colores
- **Primario**: var(--color-primario) - #ffa600
- **Secundario**: var(--color-secundario) - #e9e4dd