# Technical Overview

## Tech Stack

### Core Technologies
- **HTML5**: Semantic markup, no templating engines
- **CSS3**: Modern styling with Grid, Flexbox, and Transitions
- **JavaScript (ES6+)**: Vanilla JS with classes, modules, and modern syntax

### Why Vanilla (No Frameworks)?
- **Zero setup time**: No build tools, npm installs, or configuration
- **Immediate development**: Edit and refresh browser
- **Small bundle size**: ~10-20KB total (excluding map SVG)
- **Easy debugging**: Direct browser DevTools inspection
- **AI-friendly**: Simpler context for AI code generation
- **2-day realistic**: No framework learning curve

## File Structure

```
/
├── index.html              # Main entry point
├── src/
│   ├── main.js            # Application initialization
│   ├── config/
│   │   └── gameConfig.js  # Constants and settings
│   ├── core/
│   │   ├── Game.js        # Game state and logic
│   │   ├── Card.js        # Card data model
│   │   └── Deck.js        # Deck management (optional)
│   ├── ui/
│   │   ├── CardRenderer.js   # Card display logic
│   │   ├── MapRenderer.js    # SVG map integration
│   │   └── UIController.js   # UI state management
│   ├── utils/
│   │   ├── helpers.js     # General utilities
│   │   └── validators.js  # Data validation
│   ├── data/
│   │   └── countries.json # Country statistics
│   └── styles/
│       ├── main.css       # Base styles
│       ├── cards.css      # Card styling
│       └── map.css        # Map styling
├── assets/
│   └── map.svg            # World map SVG
└── tests/
    └── manual-tests.html  # Visual testing page
```

## Key Technologies Explained

### HTML5
**What**: Markup language for structuring web content
**Why**: Provides semantic elements (`<main>`, `<section>`, `<button>`) for better accessibility
**Usage**: Single-page layout with card containers and map area

### CSS3
**What**: Styling language for visual design
**Why**: Modern features eliminate need for CSS frameworks
**Key Features Used**:
- **CSS Grid**: Card grid layouts
- **Flexbox**: Flexible component alignment
- **Transitions**: Smooth animations (card flip, hover effects)
- **Transforms**: 3D card effects and slap animations
- **Media Queries**: Mobile-responsive breakpoints

### JavaScript ES6+
**What**: Programming language for interactive behavior
**Why**: ES6 classes and modules provide clean code organization
**Key Features Used**:
- **Classes**: `Card`, `Game`, `Deck` objects
- **Modules**: `import`/`export` for file organization
- **Arrow Functions**: Concise callback syntax
- **Template Literals**: String interpolation for HTML
- **Destructuring**: Clean data extraction
- **Async/Await**: Future API integration readiness

### SVG (Scalable Vector Graphics)
**What**: XML-based vector image format
**Why**: Interactive, scalable world map without libraries
**Usage**: 
- World map with individual country `<path>` elements
- CSS styling for hover/active states
- JavaScript click handlers on country paths
- Responsive scaling without quality loss

### LocalStorage API
**What**: Browser storage for client-side data persistence
**Why**: Save game state between sessions without backend
**Usage**:
- Player session tracking
- Game state persistence (optional for MVP)
- Settings storage (if needed)

## Development Tools

### Code Editor
- **VS Code** with GitHub Copilot extension
- IntelliSense for JS/HTML/CSS autocomplete
- Live Server extension for local preview

### AI Assistance
- **GitHub Copilot**: Inline code suggestions
- **Prompt-driven development**: Detailed requests with examples

### Testing
- **Browser DevTools**: Chrome/Firefox Developer Tools
- **Mobile Emulation**: Chrome DevTools device mode
- **Manual Testing**: Real device testing (phones/tablets)

### Version Control
- **Git**: Local version control
- **GitHub**: Repository hosting (already initialized)

## Browser APIs Used

- **DOM API**: Element manipulation, event handling
- **Fetch API**: Future data loading (if moving to external API)
- **LocalStorage**: Client-side data persistence
- **Touch Events**: Mobile gesture detection (`touchstart`, `touchend`)
- **Animation API**: Smooth transitions (via CSS, not JS animations)

## Performance Considerations

### Bundle Size
- Target: <50KB total (excluding images/SVG)
- HTML: ~5-10KB
- CSS: ~10-15KB
- JavaScript: ~20-30KB
- Map SVG: ~100-200KB (one-time load)

### Mobile Optimization
- Mobile-first CSS (mobile styles first, desktop media queries)
- Touch event optimization (passive listeners)
- Minimal repaints/reflows
- CSS `will-change` for animations
- Lazy loading (if needed for images)

### Loading Strategy
- Inline critical CSS in `<head>`
- Defer non-critical JavaScript
- Preload map SVG
- Use browser caching headers

## Security Considerations (MVP)

- **No backend**: No API security concerns for MVP
- **Client-side only**: All data is public
- **No user data**: No PII collection
- **XSS Prevention**: Basic input sanitization (even for local data)

## Why This Stack Works for 2-Day MVP

✅ **No setup overhead**: Start coding immediately
✅ **AI-friendly**: Simple patterns for code generation
✅ **Small scope**: Realistic for timeline
✅ **Debuggable**: Direct browser inspection
✅ **Mobile-ready**: CSS handles responsiveness
✅ **Scalable**: Can add framework/backend later
✅ **Performant**: Minimal JavaScript overhead

## Development Workflow

1. Write HTML structure
2. Add CSS styling
3. Implement JavaScript logic (class by class)
4. Test in browser after each component
5. Integrate components
6. Polish and fix bugs
7. Mobile device testing

**No compilation, no bundling, no build steps.**
