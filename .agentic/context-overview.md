# Context Overview

## Project Name
**Slap The World Around** - A geography-based card comparison game

## Core Concept
A mobile-first browser game where players selects slapable cards from an interactive world map, view slapable cards statistics as collectible cards, and "slaps" cards with more or less intensity. Players don't compete, only cards compete on the number of slaps received.

## Key Features (MVP - 2 Days)
- **Interactive World Map**: Clickable SVG map with country selection
- **Country Cards**: Magic: The Gathering-style cards displaying slapable card stats
- **Slap Mechanic**: Press-and-hold interaction with visual feedback
- **Local Gameplay**: No backend, all client-side

## Target Platform
- Mobile-first (smartphones, tablets)
- Browser-based (no installation required)
- Anonymous play (no accounts needed)

## Development Approach
- **Heavy AI assistance**: GitHub Copilot + conversational AI (check folder /.agentic for details ONLY when needed)
- **Vanilla JavaScript**: No frameworks for maximum simplicity
- **Incremental development**: Test each component immediately
- **2-day timeline**: MVP with core gameplay loop

## User Journey (MVP)
1. Player loads game in browser
2. Sees world map with clickable countries
3. Clicks/taps a country → country list of slapable card appears
4. Selects second country → country list of slapable card appears
5. Chooses which slapable card to view or slap
6. "Slaps" the card they think is higher
8. Play another round

## Out of Scope (MVP)
- ❌ Backend server / API
- ❌ Global rankings / leaderboards
- ❌ User accounts / authentication
- ❌ Persistent scores across sessions
- ❌ Multiplayer functionality
- ❌ Sound effects / advanced animations
- ❌ Real-time data updates

## Success Criteria
- Working game loop (select → compare → feedback → repeat)
- Functional on mobile browsers
- 25+ countries with accurate data
- Smooth interactions and visual feedback
- Completable in 2 days with AI assistance
