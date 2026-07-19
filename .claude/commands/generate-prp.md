# Create PRP

## Feature file: $ARGUMENTS

Generate a complete PRP for general feature implementation with thorough research. Ensure context is passed to the AI agent to enable self-validation and iterative refinement. Read the feature file first to understand what needs to be created, how the examples provided help, and any other considerations.

The AI agent only gets the context you are appending to the PRP and training data. Assume the AI agent has access to the codebase and the same knowledge cutoff as you, so it's important that your research findings are included or referenced in the PRP. The agent has WebSearch capabilities, so pass URLs to documentation and examples.

## Research Process

1. **Codebase Analysis**
   - Search for similar features/patterns in `src/app/` and `src/components/`
   - Identify files to reference in the PRP
   - Note existing conventions: card-soft/card-soft-tint/card-soft-dark, btn-pill, chip, Reveal, Instrument Serif + Inter, terracota/dorado/tinta/arena palette
   - Check `AGENTS.md` for project rules before writing any code (Next.js 16 has breaking changes vs. training data — read `node_modules/next/dist/docs/` first)

2. **External Research**
   - Search for similar features/patterns online
   - Library documentation (include specific URLs)
   - Implementation examples (GitHub/StackOverflow/blogs)
   - Best practices and common pitfalls

3. **User Clarification** (if needed)
   - Specific patterns to mirror and where to find them?
   - Integration requirements and where to find them?

## PRP Generation

Using `PRPs/templates/prp_base.md` as template:

### Critical Context to Include and pass to the AI agent as part of the PRP
- **Documentation**: URLs with specific sections
- **Code Examples**: Real snippets from this codebase (`src/components/LeadForm.tsx` is a good reference for client components with forms)
- **Gotchas**: Next.js 16 / Turbopack quirks, library version issues
- **Patterns**: Existing approaches to follow (see `docs/00-decisiones-vigentes.md` for product decisions already made)

### Implementation Blueprint
- Start with pseudocode showing approach
- Reference real files for patterns
- Include error handling strategy
- List tasks to be completed to fulfill the PRP in the order they should be completed

### Validation Gates (Must be Executable)
```bash
# Lint
npm run lint

# Build (also runs TypeScript checks)
npm run build
```

*** CRITICAL AFTER YOU ARE DONE RESEARCHING AND EXPLORING THE CODEBASE BEFORE YOU START WRITING THE PRP ***

*** ULTRATHINK ABOUT THE PRP AND PLAN YOUR APPROACH THEN START WRITING THE PRP ***

## Output
Save as: `PRPs/{feature-name}.md`

## Quality Checklist
- [ ] All necessary context included
- [ ] Validation gates are executable by AI
- [ ] References existing patterns (card-soft, btn-pill, chip, Reveal)
- [ ] Clear implementation path
- [ ] Error handling documented
- [ ] Respeta las reglas de `AGENTS.md`: no inventar precios/URLs/testimonios, siempre mostrar el plan antes de ejecutar

Score the PRP on a scale of 1-10 (confidence level to succeed in one-pass implementation using Claude Code).

Remember: The goal is one-pass implementation success through comprehensive context.
