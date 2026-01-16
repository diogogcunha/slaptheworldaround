# 2-Day Milestone Checklist

**Goal**: Complete functional MVP of card comparison game running locally in browser

**Timeline**: 2 days (12-16 hours total)

**Status**: Not Started

---

## Day 1: Foundation & Core Gameplay (6-8 hours)

### Phase 1: Initial Setup (30-45 min)
- [ ] Create base HTML structure (index.html)
- [ ] Set up folder structure (src/, assets/, docs/, tests/)
- [ ] Create main CSS file with reset and basic styling
- [ ] Create main JavaScript entry point (main.js)
- [ ] Create game config file (gameConfig.js)
- [ ] Import and test config in main.js
- [ ] Update README with project info
- [ ] Test "Hello World!" in browser
- [ ] Create documentation placeholders
- [ ] Commit initial setup to Git

**Checkpoint**: Browser displays "Hello World!" with styling and console logs work

---

### Phase 2: Data Generation & Structure (1 hour)
- [x] Research and gather accurate country data (25-30 countries minimum)
- [x] Create countries.json with structure:
  - [x] Country name
  - [x] Flag emoji
  - [x] ISO two letter {xx}
- [x] Validate JSON syntax
- [x] Create data loader utility (utils/dataLoader.js)
- [x] Test data loading in console

**Checkpoint**: Country data loads successfully and displays in console

### Phase 2.1: Slapable Card Data Generation & Structure (1 hour)
- [x] Research and gather trending topics for USA, France, Spain, Brazil, Portugal
- [x] Create 10 cards on cards.json with structure (extracting from the trending topic):
  - [x] Country (name, Flag emoji, ISO two letter {xx})
  - [x] Title (could be a person name, a company name, an event, an object)
  - [x] Description
  - [x] Image URL
- [x] Validate JSON syntax
- [x] Create card loader utility (utils/cardLoader.js - separated from countryLoader.js to keep files modular)
- [x] Test data loading in console

**Checkpoint**: Card data loads successfully and displays in console ✅

---

### Phase 3: Basic UI & Card Display (2-3 hours)

#### Card Rendering
- [ ] Create src/ui/CardRenderer.js
- [ ] Design card HTML structure (template)
- [ ] Create renderCard(cardData, container) method
- [ ] Add card styling in src/styles/cards.css:
  - [ ] Card dimensions (200px x 300px)
  - [ ] Border and shadow
  - [ ] Flag display at top
  - [ ] Country name styling
  - [ ] Stats list layout
  - [ ] Responsive design
- [ ] Test single card render in browser

#### UI Controller
- [ ] Create src/ui/UIController.js
- [ ] Add HTML elements to index.html:
  - [ ] Two card container divs
  - [ ] Country selection area
  - [ ] Stat selector dropdown
  - [ ] Compare/Slap buttons
  - [ ] Result display area
  - [ ] Reset button
- [ ] Implement updateUI() method
- [ ] Implement displayResult(winner) method
- [ ] Implement clearCards() method
- [ ] Connect UI to Game class

#### Event Handlers
- [ ] Add click handlers for country selection
- [ ] Add click handler for compare button
- [ ] Add click handler for reset button
- [ ] Add change handler for stat selector
- [ ] Test all interactions

**Checkpoint**: Two cards display side-by-side, comparison works, result shows

---

### Phase 4: Core Classes (2-3 hours)

#### SlapableCard Class
- [ ] Create src/core/Card.js
- [ ] Implement Card constructor 
- [ ] Add properties: name, population, gdp, area, flag, etc.
- [ ] Create compareStats(otherCard, statName) method
- [ ] Add getStatValue(statName) helper method
- [ ] Add JSDoc comments
- [ ] Test Card class in console

#### Game Class
- [ ] Create src/core/Game.js
- [ ] Implement Game constructor
- [ ] Add properties: selectedCountries[], currentStat, score
- [ ] Create selectCountry(countryData) method
- [ ] Create compareCountries(stat) method
- [ ] Create reset() method
- [ ] Add game state management
- [ ] Test Game class in console

**Checkpoint**: All core classes work independently in console

---


### Phase 5: Integration & Testing (1 hour)
- [ ] Connect all components together
- [ ] Test complete game flow:
  - [ ] Select two countries
  - [ ] Choose stat to compare
  - [ ] Click compare button
  - [ ] See correct result
  - [ ] Reset and play again
- [ ] Fix any bugs found
- [ ] Test edge cases:
  - [ ] Selecting same country twice
  - [ ] Missing data
  - [ ] Tied stats
- [ ] Verify console has no errors
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Commit Day 1 progress

**Checkpoint**: Complete game loop works end-to-end

---

## Day 2: Map Integration & Polish (6-8 hours)

### Phase 6: World Map Integration (2-3 hours)

#### Map Acquisition
- [ ] Download free SVG world map (SimpleMaps or amCharts)
- [ ] Save to assets/map.svg
- [ ] Review SVG structure (country paths with IDs)
- [ ] Document map license/attribution

#### Map Rendering
- [ ] Create src/ui/MapRenderer.js
- [ ] Load SVG into index.html
- [ ] Add CSS styling in src/styles/map.css:
  - [ ] Map sizing and positioning
  - [ ] Country hover effects
  - [ ] Country active/selected state
  - [ ] Responsive scaling
- [ ] Implement loadMap() method
- [ ] Implement highlightCountry(countryId) method
- [ ] Implement resetMapHighlights() method

#### Map Interaction
- [ ] Add click event listeners to country paths
- [ ] Map SVG country IDs to data country names
- [ ] Handle country selection from map click
- [ ] Update UI when country is clicked
- [ ] Show visual feedback on map
- [ ] Test map clicking triggers card display

#### Country Dropdown (Alternative Selection)
- [ ] Add country dropdown to HTML (top-left)
- [ ] Populate dropdown from countries.json
- [ ] Add change event listener
- [ ] Sync dropdown with map selection
- [ ] Style dropdown for mobile

**Checkpoint**: Map is interactive, clicking countries loads their cards

---

### Phase 7: Slap Mechanic & Animations (2 hours)

#### Slap Interaction
- [ ] Replace simple "Compare" button with slap buttons
- [ ] Add slap button to each card
- [ ] Implement click-to-slap functionality
  - [ ] Visual pull-back effect on mousedown/touchstart
  - [ ] Slap animation on mouseup/touchend
  - [ ] Impact feedback on target card
- [ ] Add CSS transitions for slap animation
- [ ] Test slap feel on desktop
- [ ] Test slap feel on mobile (if available)

#### Animations & Transitions
- [ ] Card appearance animation (slide in or fade in)
- [ ] Result reveal animation
- [ ] Winner highlight effect
- [ ] Smooth transitions between rounds
- [ ] Map highlight transitions
- [ ] Add CSS will-change for performance
- [ ] Test all animations are smooth

**Checkpoint**: Slap interaction feels responsive and satisfying

---

### Phase 8: Error Handling & Edge Cases (1-2 hours)
- [ ] Add error handling for missing data
- [ ] Handle tied statistics gracefully
- [ ] Prevent selecting same country twice
- [ ] Disable buttons during animation
- [ ] Add loading state (if needed)
- [ ] Add user-friendly error messages
- [ ] Validate all user inputs
- [ ] Test all error scenarios
- [ ] Add fallback for missing country images/flags

**Checkpoint**: No crashes, all edge cases handled

---

### Phase 9: UI Polish & Mobile Responsiveness (1-2 hours)

#### Visual Polish
- [ ] Refine color scheme (consistent palette)
- [ ] Improve typography (font sizes, weights, spacing)
- [ ] Add subtle shadows and depth
- [ ] Polish button styles and hover states
- [ ] Add game instructions/rules text
- [ ] Create result messages (correct/incorrect feedback)
- [ ] Add game title/header styling
- [ ] Polish stat selector styling

#### Mobile Optimization
- [ ] Test on Chrome mobile emulation
- [ ] Adjust card sizes for mobile screens
- [ ] Ensure touch targets are 44px minimum
- [ ] Fix map scaling on small screens
- [ ] Test landscape and portrait orientations
- [ ] Adjust font sizes for readability
- [ ] Test dropdown on mobile
- [ ] Verify no horizontal scroll

#### Accessibility
- [ ] Add alt text / aria-labels where needed
- [ ] Ensure keyboard navigation works
- [ ] Test with screen reader (basic)
- [ ] Check color contrast ratios
- [ ] Add focus indicators

**Checkpoint**: Game looks polished and works well on mobile

---

### Phase 10: Final Testing & Deployment (1 hour)

#### Cross-Browser Testing
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (if available)
- [ ] Test on Edge (if available)
- [ ] Test on mobile Chrome (if available)
- [ ] Test on mobile Safari (if available)

#### Performance Check
- [ ] Check load time (<3 seconds)
- [ ] Check bundle size (<500KB total)
- [ ] Verify no memory leaks (DevTools)
- [ ] Test with throttled network (3G simulation)
- [ ] Optimize images if needed

#### Final Bug Fixes
- [ ] Fix any critical bugs found
- [ ] Address console warnings
- [ ] Clean up debug console.logs
- [ ] Remove unused code/comments
- [ ] Format code consistently

#### Documentation
- [ ] Update README with:
  - [ ] How to play instructions
  - [ ] Features list
  - [ ] Tech stack details
  - [ ] Setup instructions
- [ ] Document known issues (if any)
- [ ] Add screenshots (optional)
- [ ] Update ARCHITECTURE.md with decisions made
- [ ] Update FEATURES.md with implemented features
- [ ] Update AI_PROMPTS.md with successful prompts used

#### Deployment
- [ ] Commit final changes
- [ ] Tag release as v0.1.0-mvp
- [ ] Push to GitHub
- [ ] Deploy to GitHub Pages, Netlify, or Vercel
- [ ] Test deployed version
- [ ] Share link and celebrate! 🎉

**Checkpoint**: Game is live and playable

---

## Success Criteria (Must Have)

- ✅ Player can select 2 countries (map or dropdown)
- ✅ Cards display with accurate statistics
- ✅ Player can choose stat to compare
- ✅ Player can "slap" to make selection
- ✅ Game correctly determines winner
- ✅ Game provides clear feedback (correct/incorrect)
- ✅ Player can play multiple rounds
- ✅ Works on mobile browsers
- ✅ No critical bugs
- ✅ Game is deployed and accessible online

---

## Nice to Have (If Time Permits)

- ⭐ Sound effects on slap
- ⭐ Score tracking across rounds
- ⭐ Player name display (auto-generated)
- ⭐ "Fun facts" about countries
- ⭐ Difficulty modes (more countries, harder comparisons)
- ⭐ Smooth card flip animation
- ⭐ Confetti/celebration on correct answer
- ⭐ Share results functionality
- ⭐ PWA manifest (installable)

---

## Blockers & Risks

**Track issues here as they arise:**

- [ ] Issue: _____________________
  - Impact: _____________________
  - Solution: _____________________
  - Status: _____________________

---

## Daily Progress Log

### Day 1 Progress
**Date**: _________
**Hours**: _________
**Completed**:
- 
**Blockers**:
- 
**Notes**:
- 

### Day 2 Progress
**Date**: _________
**Hours**: _________
**Completed**:
- 
**Blockers**:
- 
**Notes**:
- 

---

## Final Status

**Completion Date**: _________
**Total Hours**: _________
**MVP Achieved**: ⬜ Yes / ⬜ No
**Deployed URL**: _________
**Notes**: _________
