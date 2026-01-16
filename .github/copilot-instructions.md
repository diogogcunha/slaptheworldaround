# AGENTIC DEVELOPER INSTRUCTIONS

## Create AI-optimized project structure with documentation

Set up modular file structure: src/core/, src/ui/, src/data/, src/utils/, src/styles/
Create docs/ARCHITECTURE.md with high-level design decisions
Create docs/FEATURES.md with detailed feature specifications
Create docs/AI_PROMPTS.md with reusable prompt templates for common tasks
Keep individual files small (150-300 lines) to fit AI context windows
## Establish documentation and code conventions for AI context

Add JSDoc comments to all classes and public methods (AI uses these for understanding)
Document data structures at top of files with example JSON
Include usage examples in comments for complex functions
Use highly descriptive variable/function names (renderCountryCard vs render)
Add file-level comments explaining purpose and dependencies

## Define sequential prompting workflow for Day 1-2 development

Break each feature into atomic prompts (16 prompts total across 2 days)
Day 1: Setup → Data generation → Core classes → Basic UI (8 prompts)
Day 2: Map integration → Animations → Polish → Testing (8 prompts)
Each prompt outputs one file or one feature, test immediately before next prompt
Store successful prompt patterns in docs/AI_PROMPTS.md

## Implement manual checkpoints and validation gates

After each AI-generated component: test functionality, review naming, check edge cases
Manual review required for: architecture decisions, UX design, state management, data accuracy
Verify AI-generated country data against Wikipedia/World Bank sources
Maintain checklist in docs/CHECKPOINTS.md for quality control

## Set up AI-friendly testing and debugging workflows

Create tests/manual-tests.html for visual verification
Use debugging prompt template: "Here's code + error + expected behavior → step-by-step debug"
Keep browser console open, test after each AI output
Use code review prompts before integrating components