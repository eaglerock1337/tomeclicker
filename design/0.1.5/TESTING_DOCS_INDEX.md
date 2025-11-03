# Testing Documentation Index

All testing guidance for v0.1.5 game rebalancing is organized below.

---

## Quick Navigation

### If you have 5 minutes

Read: **TESTING_QUICK_START.md**

- TL;DR summary of the approach
- Three key assertion patterns
- Quick fixes for failing tests

### If you have 30 minutes

Read in order:

1. **TESTING_QUICK_START.md** (overview)
2. **ANSWERS_TO_YOUR_QUESTIONS.md** (your specific questions)
3. **REWRITTEN_TEST_EXAMPLES.md** (code examples)

### If you have 2 hours

Complete: **IMPLEMENTATION_CHECKLIST.md**

- Step-by-step walkthrough
- 8 phases with estimated time
- Success criteria at the end

### If you need complete reference

Study: **TESTING_STRATEGY_V0.1.5.md**

- Full philosophy and framework
- All patterns and anti-patterns
- Complete test examples
- Advanced techniques

---

## Document Guide

### 1. TESTING_QUICK_START.md (13KB)

**Best for:** Getting started immediately

**Contains:**

- Quick problem/solution overview
- Three assertion patterns (brittle → flexible)
- Builder API cheat sheet
- Test templates to copy
- Common mistakes to avoid

**Time to read:** 15-20 minutes
**Action items:** Medium (shows quick fixes)

---

### 2. TESTING_STRATEGY_V0.1.5.md (17KB)

**Best for:** Deep understanding

**Contains:**

- Test philosophy (behaviors vs. numbers)
- Test classification guide (keep/modify/remove)
- Parametric builder pattern (complete implementation)
- Stat EXP system testing strategies
- Training economics testing
- Multi-level upgrade testing
- Resilience patterns

**Time to read:** 30-45 minutes
**Action items:** Comprehensive (complete reference)

---

### 3. ANSWERS_TO_YOUR_QUESTIONS.md (19KB)

**Best for:** Your specific concerns

**Contains:**

- Direct answer to all 7 questions you asked:
  1. Test philosophy (numbers vs. behaviors)
  2. Builder flexibility
  3. Test coverage strategy (unit vs. integration)
  4. Resilient assertions
  5. Fixing failing tests
  6. Keep/modify/remove guidance
  7. New tests to add
- Root cause analysis of each failing test
- Step-by-step fix instructions
- Classification table
- Implementation guidance

**Time to read:** 25-35 minutes
**Action items:** High priority (addresses your concerns)

---

### 4. REWRITTEN_TEST_EXAMPLES.md (Detailed)

**Best for:** Seeing before/after code

**Contains:**

- Example 1: Training award test (brittle → flexible)
- Example 2: Training cost test (specific → relationship)
- Example 3: Stat level-up detection
- Example 4: Multi-level upgrade tests
- Rewriting patterns for each scenario

**Time to read:** 20-30 minutes
**Action items:** High (shows exact code to copy)

---

### 5. IMPLEMENTATION_CHECKLIST.md (13KB)

**Best for:** Step-by-step execution

**Contains:**

- 8 phases of implementation
- 70-110 minutes total time estimate
- Exact instructions for each phase
- Commit message examples
- Troubleshooting guide
- Success criteria

**Time to read:** 10-15 minutes (skim)
**Action items:** Very high (follow sequentially)

**Phases:**

1. Understand (15 min)
2. Prepare (5 min)
3. Fix one test (20 min)
4. Verify flexibility (10 min)
5. Review other tests (15 min)
6. Commit changes (5 min)
7. Document learning (10 min)
8. Optional builders (30 min)

---

### 6. TESTING_GUIDANCE_SUMMARY.md (11KB)

**Best for:** Overview and roadmap

**Contains:**

- Summary of all documents provided
- Core concept explanation
- Implementation roadmap
- Key principles
- Failing test analysis
- How tests survive tuning
- Test classification guide
- Success criteria

**Time to read:** 10-15 minutes
**Action items:** Medium (shows big picture)

---

### 7. TESTING_DOCS_INDEX.md (This file)

**Best for:** Navigation

**Contains:**

- Document overview
- Quick navigation guide
- Time estimates
- What each document covers

---

## Code Files

### parametric-idle-action-builder.ts

Location: `/tests/helpers/parametric-idle-action-builder.ts`

**Contains:**

- `ParametricIdleActionBuilder` - Ready to use
- `IdleActionManagerBuilder` - Backwards compatible

**Usage:**

```typescript
import { ParametricIdleActionBuilder } from '../../helpers/parametric-idle-action-builder';

const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10)
	.withStatLevelCostOf(1, 100)
	.build();
```

---

## Reading Recommendation

### For Someone New to the Strategy

1. Start: TESTING_QUICK_START.md (15 min)
2. Read: ANSWERS_TO_YOUR_QUESTIONS.md (25 min)
3. Study: REWRITTEN_TEST_EXAMPLES.md (25 min)
4. Action: IMPLEMENTATION_CHECKLIST.md (70 min)
   **Total:** ~135 minutes to understand and implement

### For Someone Familiar with Testing

1. Skim: TESTING_QUICK_START.md (5 min)
2. Reference: TESTING_STRATEGY_V0.1.5.md (20 min)
3. Action: IMPLEMENTATION_CHECKLIST.md (70 min)
   **Total:** ~95 minutes

### For Someone in a Hurry

1. Read: ANSWERS_TO_YOUR_QUESTIONS.md (25 min)
2. Copy: REWRITTEN_TEST_EXAMPLES.md (10 min)
3. Do: IMPLEMENTATION_CHECKLIST.md phases 1-6 (50 min)
   **Total:** ~85 minutes to functional solution

---

## Key Concept Summary

### The Problem

Tests break when game constants change because they check exact values:

```typescript
expect(trainingReward).toBe(10); // Breaks if constant changes
```

### The Solution

Use parametric builders + behavior assertions:

```typescript
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10) // Parametric
	.build();

expect(result.shouldContinue).toBe(true); // Behavior
```

### Why It Works

- Tests control game constants (not assertions)
- Tests validate behaviors (not specific numbers)
- When user tunes numbers, update builder config, not test logic

---

## Questions Answered

| Question                                            | Document                                             |
| --------------------------------------------------- | ---------------------------------------------------- |
| How do I know whether to test numbers or behaviors? | TESTING_STRATEGY_V0.1.5.md § 1                       |
| How do I make my builders flexible?                 | ANSWERS_TO_YOUR_QUESTIONS.md § Q2                    |
| Should I write unit or integration tests?           | ANSWERS_TO_YOUR_QUESTIONS.md § Q3                    |
| How do tests survive number tuning?                 | TESTING_QUICK_START.md § 7                           |
| What's wrong with the failing test?                 | ANSWERS_TO_YOUR_QUESTIONS.md § Q5                    |
| Which tests should I keep vs. modify?               | ANSWERS_TO_YOUR_QUESTIONS.md § Q6                    |
| What new tests should I add?                        | ANSWERS_TO_YOUR_QUESTIONS.md § Q7                    |
| How do I actually implement this?                   | IMPLEMENTATION_CHECKLIST.md                          |
| Show me before/after code                           | REWRITTEN_TEST_EXAMPLES.md                           |
| Where do I start?                                   | TESTING_QUICK_START.md + IMPLEMENTATION_CHECKLIST.md |

---

## Implementation Roadmap

### Week 1: Understand & Implement

- [ ] Read TESTING_QUICK_START.md
- [ ] Read ANSWERS_TO_YOUR_QUESTIONS.md
- [ ] Follow IMPLEMENTATION_CHECKLIST.md phases 1-6
- [ ] Fix idle-action-manager tests
- [ ] Commit changes

### Week 2: Expand Pattern

- [ ] Create ParametricUpgradeBuilder
- [ ] Create ParametricStatsBuilder
- [ ] Rewrite upgrade-manager tests
- [ ] Rewrite stats-manager tests
- [ ] Verify 100% test pass rate

### Week 3: Document & Verify

- [ ] Write tuning documentation for user
- [ ] Test with actual number changes
- [ ] Verify pre-commit hooks still work
- [ ] Document lessons learned
- [ ] Prepare for next phase

---

## Success Criteria

After implementing this strategy, verify:

- [ ] All 334+ tests pass
- [ ] Change TRAINING_REWARD constant without test breaks
- [ ] Change stat EXP costs without test breaks
- [ ] Add new game mechanic without test rewrites
- [ ] Team understands the pattern
- [ ] User can tune game safely

---

## Common Starting Points

**"My test is failing and I don't know why"**
→ See ANSWERS_TO_YOUR_QUESTIONS.md § Q5 (Fix failing tests)

**"I want to understand the philosophy"**
→ See TESTING_STRATEGY_V0.1.5.md § 1 (Test Philosophy)

**"Show me working code"**
→ See REWRITTEN_TEST_EXAMPLES.md (4 complete examples)

**"Tell me exactly what to do"**
→ See IMPLEMENTATION_CHECKLIST.md (step-by-step)

**"I need quick answers"**
→ See TESTING_QUICK_START.md (TL;DR format)

**"I have specific questions"**
→ See ANSWERS_TO_YOUR_QUESTIONS.md (Q&A format)

---

## Document Size Reference

| Document                     | Size  | Read Time | Purpose         |
| ---------------------------- | ----- | --------- | --------------- |
| TESTING_QUICK_START.md       | 13KB  | 15-20 min | Get started     |
| TESTING_STRATEGY_V0.1.5.md   | 17KB  | 30-45 min | Deep learning   |
| ANSWERS_TO_YOUR_QUESTIONS.md | 19KB  | 25-35 min | Your concerns   |
| REWRITTEN_TEST_EXAMPLES.md   | ~10KB | 20-30 min | Code examples   |
| IMPLEMENTATION_CHECKLIST.md  | 13KB  | 10-15 min | Execution guide |
| TESTING_GUIDANCE_SUMMARY.md  | 11KB  | 10-15 min | Overview        |

**Total:** ~83KB of documentation
**Time to master:** 90-180 minutes depending on depth needed

---

## Related Files (Already Provided)

- `/tests/helpers/parametric-idle-action-builder.ts` - Ready to use builder
- `CLAUDE.md` - Project context and architecture (existing)
- `TESTING_STRATEGY_V0.1.5.md` - Complete strategy guide (new)

---

## Getting Help

### If tests still fail after implementation:

1. Check IMPLEMENTATION_CHECKLIST.md § Troubleshooting
2. Verify parametric-idle-action-builder.ts is imported
3. Ensure vi.useFakeTimers() is properly managed

### If you don't understand a concept:

1. See ANSWERS_TO_YOUR_QUESTIONS.md for direct Q&A
2. See REWRITTEN_TEST_EXAMPLES.md for working examples
3. See TESTING_STRATEGY_V0.1.5.md for complete reference

### If you want to see variations:

1. See TESTING_QUICK_START.md § 2 (Three Assertion Patterns)
2. See REWRITTEN_TEST_EXAMPLES.md § Summary (Rewriting Patterns)
3. See TESTING_STRATEGY_V0.1.5.md § 5 (Builder API Reference)

---

## Next Action

**If you have 15 minutes:** Read TESTING_QUICK_START.md
**If you have 60 minutes:** Read TESTING_QUICK_START.md + ANSWERS_TO_YOUR_QUESTIONS.md
**If you have 120 minutes:** Follow IMPLEMENTATION_CHECKLIST.md

---

**Start here: TESTING_QUICK_START.md**
