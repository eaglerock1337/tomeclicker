# /scrum - Quick Full-Team Standup

Get quick, collaborative feedback from the entire team on an idea, decision, or approach. All agents participate based on their domain relevance.

## Usage

```
/scrum <topic or question>
```

All agents will consider the topic and chime in if they have relevant domain expertise or concerns to share. Agents self-select based on relevance.

**Example:**

```
/scrum I'm thinking of adding a cloud save feature using JWT tokens and localStorage encryption
```

**Expected behavior:**

- **secury-boi**: Brief note on JWT best practices, localStorage encryption approach
- **sre-boi**: Quick comment on backend deployment considerations
- **backy-boi**: API design pattern suggestion
- **testy-boi**: Testing strategy note
- (Other agents stay silent if not relevant)

**Note:** For targeted collaboration with specific agents, use **/huddle agent1 agent2 <topic>** instead.

## Agent Behavior in Scrums

### Response Guidelines

**Initial Scrum Feedback (Be Concise):**

- 2-4 sentences maximum
- Get to the point quickly
- Flag concerns, don't solve them

**Follow-Up Questions (Provide Depth):**

- If user asks follow-up questions during the scrum, provide detailed answers
- User may drill down into specific concerns - respond with appropriate depth
- Balance: Start concise, expand when user asks

**Self-Select (Full Team Scrums):**

- Only respond if you have relevant expertise
- Don't stretch to be helpful if topic is outside your domain
- It's okay for only 1-2 agents to respond

**Stay in Your Lane:**

- Focus on your domain expertise
- Don't duplicate what other agents said
- Offer unique perspective from your specialization

**Defer to Specialists:**

- If you have a concern outside your domain, mention it briefly and suggest consulting the relevant agent
- Example: "Looks good from UX perspective. You might want to run this by secury-boi for auth implications."

### When to Skip Responding

Skip the scrum if:

- Topic is outside your domain
- Another agent already covered your perspective
- You have no concerns or meaningful input
- The ask is too vague to provide useful feedback

### Teaching in Scrums

**learny-boi** uses quickstart mode in scrums:

- Brief explanations (2-3 minutes of reading)
- Link to concepts for deeper learning
- Offer to do immersive session if user interested

## Purpose

Scrums are for:

- **Quick validation** of ideas before implementation
- **Spotting concerns** early from multiple perspectives
- **Fast feedback** from the entire team (2-4 sentences per agent)
- **Sanity checking** technical approaches

Scrums are NOT for:

- Deep collaboration (use /huddle for targeted multi-agent working sessions)
- Deep implementation planning (use /thinky-time)
- Learning sessions (use /1:1 with learny-boi)
- Code reviews (mention in PR comments)
- Detailed debugging (normal conversation flow)

## Examples

### Example 1: Architecture Decision

```
User: /scrum I want to refactor the Game class into separate StateMachine, ProgressionEngine, and SaveManager classes

designy-boi: Great decomposition! Consider Strategy pattern for ProgressionEngine to swap unlock conditions. Make sure StateMachine events are well-typed.

testy-boi: This will make unit testing much easier. Test each class in isolation before integration tests.

learny-boi: This is an application of the Single Responsibility Principle (SRP). Want a quick walkthrough of the SOLID principles?
```

### Example 2: UI Decision

```
User: /scrum Should stat training have a cooldown or cost scaling?

fronty-boi: From UX perspective, cost scaling is clearer than cooldown timers. Players understand "next upgrade costs X" better than countdown displays.

gamey-boi: Cost scaling creates interesting choice pressure. Cooldowns can feel frustrating in idle games. Recommend exponential cost scaling (1.15x multiplier).

designy-boi: Cost scaling also makes the progression curve tunable without code changes - just adjust the multiplier in a config file.
```

### Example 3: Security Concern

```
User: /scrum Planning to store user passwords in localStorage for offline play

secury-boi: STOP. Never store passwords in localStorage - it's accessible to any XSS attack. Use session tokens with httpOnly cookies, or better yet, delegate auth to a service like Auth0.

learny-boi: This touches on the browser security model. Want a quick overview of localStorage vs cookies vs session storage?
```

## Tips for Effective Scrums

1. **Be specific**: "Should I use X or Y for Z?" is better than "How should I do Z?"
2. **Provide context**: Mention which phase you're in, what you're trying to achieve
3. **Need targeted collaboration?**: Use **/huddle agent1 agent2 <topic>** for deep work with specific agents
4. **Follow up separately**: If a scrum reveals a big concern, use **/huddle** or **/1:1** for deeper discussion
5. **Don't overuse**: Scrums are for quick checks, not every decision

## Agent Roster

All agents available for scrum participation:

- **staffy-boi**: Project coordination, task planning
- **fronty-boi**: UI/UX, Svelte, styling
- **gamey-boi**: Game design, balance, progression
- **story-boi**: Narrative, lore, writing
- **docy-boi**: Documentation, communication
- **backy-boi**: Backend, APIs, databases
- **sre-boi**: Infrastructure, deployment, monitoring
- **testy-boi**: Testing, QA, CI/CD
- **secury-boi**: Security, auth, anti-cheat
- **learny-boi**: Teaching, explanations, debugging guidance
- **designy-boi**: Design patterns, architecture, OOP principles

## Source of Truth References

Agents may reference these documents when providing scrum feedback:

- **design/OUTLINE.md** - Game progression, mechanics, stats system
- **design/tomes.yaml** - All 50 Tomes structure and metadata
- **design/tiers.yaml** - Tome tier hierarchy and progression
- **design/PROPOSAL.md** - Technical roadmap and phases
- **CLAUDE.md** - Development guidelines and architecture
