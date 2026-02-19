# Dashboard de Países - Entrega

## Información del Candidato

- **Nombre:** Zahid Alejandro Díaz Tapia
- **Email:** zdiaz@espol.edu.ec
- **Fecha:** 18/02/2026

---

## Enlaces del Proyecto

| Tipo de Enlace | URL |
|----------------|-----|
| Repositorio de GitHub | https://github.com/LockHurb/Intership-Test-Dashboard |
| Video de Loom | https://www.loom.com/share/0fffdf1e6d3142b28e4a9b62b0b39f4b |
| Demo en Vivo (si está desplegado) | [https://intership-test-dashboard.vercel.app/] |

---

## Instrucciones de Configuración

```bash
# Clonar el repositorio
git clone https://github.com/LockHurb/Intership-Test-Dashboard
cd countries-dashboard

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev
# O
npm start

# Abrir en el navegador
# http://localhost:5173
```

---

## Tecnologías Utilizadas

- [✅] React (versión: 19.0.0)
- [✅] Vite
- [✅] Tailwind CSS v4.0
- [✅] Otras librerías: Fetch API para consumo de datos

---

## Características Implementadas

### Características Principales

| Característica | Estado | Notas |
|----------------|--------|-------|
| Lista de Países | ✅ | Renderizado mediante grid responsive. |
| Funcionalidad de Búsqueda | ✅ | Búsqueda en tiempo real filtrando el estado local. |
| Filtro por Región | ✅  | Filtrado dinámico por continente. |
| Vista Detallada del País | ✅ | Navegación de países con toda su información. |
| Estados de Carga | ✅| Animación de carga durante las peticiones|
| Manejo de Errores | ✅| Captura de errores de red y visualización. |

### Características Extra

| Característica | Estado | Notas |
|----------------|--------|-------|
| Diseño Responsivo | ✅ | Adaptable a móviles y escritorio |
| Modo Oscuro/Claro | ✅ | Implementado con persistencia en localStorage |
| Funcionalidad de Ordenamiento | ❌ | No implementado |
| Favoritos (localStorage) | ❌ | No implementado |
| TypeScript | ❌ | No implementado |
| Pruebas Unitarias | ❌ | No implementado |
| Despliegue en Vivo | ✅ | Desplegado en Vercel |

---

## Capturas de Pantalla

### Página Principal / Lista de Países
![Lista de Países](./imgs/Listado%20de%20países.png)
> Descripción: Lista de todos los países que aparecen en la API.

### Búsqueda en Acción
![Búsqueda](./imgs/Búsqueda%20de%20país.png)
> Descripción: Filtro por continente y por búsqueda del país del listado.

### Vista Detallada del País
![Vista Detallada](./imgs/Detalle%20del%20país.png)
> Descripción: Toda la información referente al país seleccionado.

### Estados de Carga / Error
![Estados](./imgs/Estado%20de%20carga.png)
> Descripción: Pantalla de carga durante la extracción de la API.

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── CountryCard.jsx    # Tarjeta individual de país
│   ├── CountryDetail.jsx  # Vista extendida de un país
│   ├── CountryList.jsx    # Contenedor de la lista/grid
│   ├── RegionFilter.jsx   # Filtro por continente
│   └── SearchBar.jsx      # Buscador por nombre
├── hooks/
│   └── useDarkMode.js     # Lógica de persistencia de tema
├── services/
│   └── api.js             # Configuración central de Fetch/API
├── App.jsx                # Orquestador principal de estados
└── main.jsx               # Punto de entrada de React
```

---

## Desafíos Enfrentados

### Desafío 1: [Configuración de Tailwind]
**Problema:** Tuve una serie de dificultades con Tailwind durante la implementación del modo oscuro manual a través de un botón.

**Solución:** Para ello he creado un archivo llamado tailwind.config.js en el que defino darkmode para permitir que el hook de React controle la clase en el elemento raíz del DOM.

### Desafío 2: [Manejo de Datos con la API]
**Problema:** La API devuelve campos como languages y currencies como objetos con claves dinámicas, lo que no me permitiía acceder a ellos de forma estática.

**Solución:** Para ello utilicé Object.values() y métodos de transformación de arreglos para extraer y formatear los nombres de idiomas.

---

## Lo Que Aprendí

- [Configuración avanzada de Tailwind CSS para layouts responsivos y complejos sin salir de HTML.]
- [Gestión de estados de React para simular navegación entre listas y vistas detalladas.]
- [mplementación de HOoks personalizados para manejar efectos secundarios y persistencia.]

---

## Si Tuviera Más Tiempo

- [ ] Implementar la funcionalidad de clic en los "Border Countries" para navegar entre ellos.
- [ ] Agregar animaciones de transición durante el scroll o en la presentación de la tarjeta.
- [ ] Añadir descripciones e imágenes dentro de las tarjetas para promocionar el turismo.
- [ ] Mejorar búsqueda por país.

---

## Auto-Evaluación

En una escala del 1 al 5, ¿cómo calificarías tu entrega en cada área?

| Área | Calificación (1-5) | Comentarios |
|------|-------------------|-------------|
| Funcionalidad | 5 | Se cumplen todos los requisitos de búsqueda, filtrado y detalle |
| Calidad del Código | 4 | Código limpio, sin embargo puede mejorarse aún más el orden |
| UI/UX | 5 | Diseño fiel al reto y responsive |
| Documentación | 5 | Instrucciones claras de instalación y descripción de componentes |

---

## Notas Adicionales

Hay un pequeño dato a darse cuenta, en la lista de países aparece la bandera de Estados Unidos con población cero, sin embargo hace referencia a United States Minor Outlying Islands que son reservas con población muy variante, por ello se coloca cero. Además, el modo oscuro puede verese afectado por preferencias del sistema o del navegador que se está utilizando.

---

> **Recordatorio:** Asegúrate de que tu video de Loom (3-5 minutos) cubra:
> 1. Una demostración de tu aplicación funcionando
> 2. Un recorrido del código de un componente del que estés orgulloso
> 3. Un desafío que enfrentaste y cómo lo resolviste
