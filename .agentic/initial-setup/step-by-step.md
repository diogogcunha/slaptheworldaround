# Initial Setup: Step-by-Step Guide

**Goal**: Get a "Hello World!" running in the browser with basic project structure in place.

**Estimated Time**: 30-45 minutes

---

## ✅ Step 1: Create Base HTML Structure

**File**: `index.html`

**Task**: Create a minimal HTML5 document with proper boilerplate

**Requirements**:
- DOCTYPE and HTML5 semantic structure
- UTF-8 charset
- Viewport meta tag for mobile responsiveness
- Title: "Slap The World Around"
- Empty `<body>` with an `<h1>` that says "Hello World!"
- Link to `src/styles/main.css` (even though it doesn't exist yet)
- Script tag linking to `src/main.js` with `type="module"` attribute

**Success Criteria**: 
- HTML file is valid
- Opens in browser without errors
- Shows "Hello World!" heading

**AI Prompt**:
```
Create an index.html file with:
- HTML5 boilerplate structure
- Viewport meta tag for mobile: <meta name="viewport" content="width=device-width, initial-scale=1.0">
- Title: "Slap The World Around"
- Link to CSS file: src/styles/main.css
- An h1 element with text "Hello World!"
- Script tag for src/main.js with type="module" attribute
- Use semantic HTML5 elements
```

---

## ✅ Step 2: Create Folder Structure

**Task**: Set up all project folders

**Folders to Create**:
```
src/
src/config/
src/core/
src/ui/
src/data/
src/utils/
src/styles/
assets/
tests/
docs/
```

**How to Execute**:
- Manually create folders in VS Code, OR
- Use terminal command:

**Terminal Command** (Windows PowerShell):
```powershell
mkdir src, src\config, src\core, src\ui, src\data, src\utils, src\styles, assets, tests, docs
```

**Success Criteria**: 
- All folders visible in VS Code file explorer
- No errors creating directories

---

## ✅ Step 3: Create Main CSS File

**File**: `src/styles/main.css`

**Task**: Add basic CSS reset and body styling

**Requirements**:
- CSS reset (box-sizing, margin, padding)
- Body font family (sans-serif)
- Body background color (light gray or white)
- Center the h1 element
- Make it responsive (works on mobile)

**Success Criteria**: 
- CSS file loads without errors
- "Hello World!" is styled and centered
- Page has background color

**AI Prompt**:
```
Create src/styles/main.css with:
- CSS reset: * { box-sizing: border-box; margin: 0; padding: 0; }
- Body styling: sans-serif font, light background (#f5f5f5), min-height: 100vh
- Center content: use flexbox to center items vertically and horizontally
- h1 styling: large font (3rem), color (#333), margin
- Mobile-first approach
```

---

## ✅ Step 4: Create Main JavaScript File

**File**: `src/main.js`

**Task**: Create entry point JavaScript file with console log

**Requirements**:
- Add `console.log('Game initialized!')` message
- Add a comment explaining this is the main entry point
- Use ES6+ syntax
- Add a simple DOM manipulation: change h1 text color on load

**Success Criteria**: 
- Browser console shows "Game initialized!" message
- No JavaScript errors in console
- H1 color changes (proves JS is working)

**AI Prompt**:
```
Create src/main.js with:
- A console.log statement: "Game initialized!"
- Comment at top: "Main entry point for Slap The World Around game"
- Add this code to test DOM manipulation:
  document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.style.color = '#2563eb';  // Blue color
    console.log('DOM loaded and heading styled');
  });
```

---

## ✅ Step 5: Create Game Config File

**File**: `src/config/gameConfig.js`

**Task**: Create a configuration file with game constants

**Requirements**:
- Export a config object with game settings
- Include: game name, version, initial settings
- Use ES6 module export syntax

**Success Criteria**: 
- File created with valid JavaScript
- Can be imported in main.js
- No syntax errors

**AI Prompt**:
```
Create src/config/gameConfig.js with:
- ES6 export: export const gameConfig = { ... }
- Properties:
  - gameName: "Slap The World Around"
  - version: "0.1.0"
  - maxCountries: 2 (for comparison)
  - stats: ['population', 'gdp', 'area']
- Add JSDoc comment explaining the config
```

---

## ✅ Step 6: Import Config in Main.js

**File**: `src/main.js` (update)

**Task**: Import the game config and log it

**Requirements**:
- Add import statement at top of main.js
- Log the config object to console
- Update the h1 to display the game name from config

**Success Criteria**: 
- Config imports without errors
- Console shows config object
- H1 displays game name from JavaScript

**AI Prompt**:
```
Update src/main.js to:
- Import gameConfig from './config/gameConfig.js'
- Log gameConfig to console
- Update the h1 text content to show gameConfig.gameName
- Keep the existing color styling
```

---

## ✅ Step 7: Create README Documentation

**File**: `README.md` (update existing)

**Task**: Replace minimal README with proper project documentation

**Requirements**:
- Project title and description
- How to run the project locally
- Tech stack list
- Project status
- License (if applicable)

**Success Criteria**: 
- README is informative
- Instructions are clear
- Markdown is properly formatted

**AI Prompt**:
```
Update README.md with:
- # Slap The World Around
- Brief description: "A geography-based card comparison game where players compare country statistics"
- ## How to Run
  - Option 1: Open index.html directly in browser
  - Option 2: Use VS Code Live Server extension
- ## Tech Stack
  - HTML5, CSS3, Vanilla JavaScript (ES6+)
- ## Current Status
  - Phase: Initial setup
  - Status: Hello World working
- ## License: MIT (or specify)
```

---

## ✅ Step 8: Test in Browser

**Task**: Verify everything works together

**How to Test**:
1. **Option A - Direct Open**: 
   - Right-click `index.html` → Open with browser
   
2. **Option B - Live Server** (Recommended):
   - Install "Live Server" VS Code extension if not installed
   - Right-click `index.html` → "Open with Live Server"
   - Browser opens automatically at `http://127.0.0.1:5500`

**Expected Results**:
- ✅ Page loads without errors
- ✅ H1 shows "Slap The World Around" (from JS, not HTML)
- ✅ H1 is blue color
- ✅ Background is light gray
- ✅ Console shows:
  - "Game initialized!"
  - "DOM loaded and heading styled"
  - gameConfig object with all properties

**Troubleshooting**:
- If CSS doesn't load: Check file path in `<link>` tag
- If JS doesn't run: Check file path in `<script>` tag and `type="module"`
- If imports fail: Check relative paths start with `./`
- CORS errors: Use Live Server, not direct file:// opening

---

## ✅ Step 9: Create Documentation Structure

**Files to Create**:
- `docs/ARCHITECTURE.md` (empty for now, add title)
- `docs/FEATURES.md` (empty for now, add title)
- `docs/AI_PROMPTS.md` (empty for now, add title)

**Task**: Create placeholder documentation files

**Requirements**:
- Each file has a descriptive title
- Brief placeholder text indicating future content
- Proper markdown formatting

**Success Criteria**: 
- All three files exist in docs/ folder
- Each has a title and placeholder text
- No syntax errors

**Quick Create**:
```
docs/ARCHITECTURE.md:
# Architecture Documentation
(To be filled during development)

docs/FEATURES.md:
# Features Documentation
(To be filled during development)

docs/AI_PROMPTS.md:
# AI Prompts Library
(Successful prompts will be documented here)
```

---

## ✅ Step 10: Commit Initial Setup

**Task**: Save initial work to Git

**Git Commands**:
```bash
git add .
git commit -m "Initial setup: Hello World with project structure"
git push origin main
```

**Success Criteria**: 
- All files committed to repository
- Push successful (if remote is configured)
- Clean git status

---

## 🎉 Completion Checklist

After completing all steps, verify:

- [ ] `index.html` exists and loads in browser
- [ ] `src/styles/main.css` exists and styles are applied
- [ ] `src/main.js` exists and console logs appear
- [ ] `src/config/gameConfig.js` exists and exports config
- [ ] All folders created (src/, assets/, docs/, tests/)
- [ ] README.md is updated with project info
- [ ] Browser shows "Slap The World Around" (blue text, centered)
- [ ] Console shows initialization messages and config object
- [ ] Documentation files created in docs/
- [ ] Git commit completed

---

## Next Steps

Once "Hello World!" is verified:
1. Begin implementing Card class (`src/core/Card.js`)
2. Create sample country data (`src/data/countries.json`)
3. Build card rendering logic (`src/ui/CardRenderer.js`)
4. Continue with Day 1 development tasks

---

## Estimated Time Breakdown

- Step 1 (HTML): 5 min
- Step 2 (Folders): 2 min
- Step 3 (CSS): 5 min
- Step 4 (JS): 5 min
- Step 5 (Config): 5 min
- Step 6 (Import): 3 min
- Step 7 (README): 5 min
- Step 8 (Testing): 5 min
- Step 9 (Docs): 3 min
- Step 10 (Git): 2 min

**Total**: ~40 minutes

---

## AI Assistance Tips

- Use provided prompts verbatim for consistency
- Test each step immediately before moving to next
- If AI generates extra code, review and keep only what's needed
- Ask AI to explain any code you don't understand
- Keep files open that you're working on for better AI context
