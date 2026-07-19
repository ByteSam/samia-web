# Execute BASE PRP

Implement a feature using the PRP file.

## PRP File: $ARGUMENTS

## Execution Process

1. **Load PRP**
   - Read the specified PRP file
   - Understand all context and requirements
   - Follow all instructions in the PRP and extend the research if needed
   - Ensure you have all needed context to implement the PRP fully
   - Do more web searches and codebase exploration as needed

2. **ULTRATHINK**
   - Think hard before you execute the plan. Create a comprehensive plan addressing all requirements.
   - Break down complex tasks into smaller, manageable steps using your task tools.
   - Identify implementation patterns from existing code to follow.

3. **Show the plan before executing**
   - Este proyecto tiene una regla explícita: mostrar el plan y esperar aprobación de Daniel antes de tocar código (ver `AGENTS.md`). No saltarse este paso aunque el PRP ya esté aprobado — confirmar el alcance concreto de archivos a tocar.

4. **Execute the plan**
   - Execute the PRP
   - Implement all the code

5. **Validate**
   - Run each validation command (`npm run lint`, `npm run build`)
   - Fix any failures
   - Re-run until all pass

6. **Complete**
   - Ensure all checklist items done
   - Run final validation suite
   - Report completion status
   - Read the PRP again to ensure you have implemented everything

7. **Reference the PRP**
   - You can always reference the PRP again if needed

Note: If validation fails, use error patterns in PRP to fix and retry.
