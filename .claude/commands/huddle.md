# /huddle - Deep Multi-Agent Collaboration Session

Pull together specific team members for an in-depth working session to collaborate on complex problems, design decisions, or feature planning.

## Usage

### Full Team Huddle (All Agents)

```
/huddle <topic or problem>
```

All agents will consider the topic and participate if they have relevant expertise. Agents self-select based on domain relevance.

**Example:**

```
/huddle I want to design the tome unlock system with animations, progression feel, and lore integration
```

**Expected behavior:**

- **gamey-boi**: Detailed progression pacing, unlock frequency, reward psychology
- **fronty-boi**: Animation design, UI components, visual feedback systems
- **story-boi**: Lore integration, narrative moments, flavor text approach
- **designy-boi**: Architecture patterns, state management, separation of concerns
- Agents collaborate and build on each other's ideas

### Targeted Huddle (Specific Agents)

```
/huddle agent1 agent2 agent3 <topic or problem>
```

Only specified agents participate. Use when you know exactly which domains need to collaborate.

**Example:**

```
/huddle fronty-boi gamey-boi story-boi How should tier completion feel as a major milestone?
```

**Expected behavior:**

- **gamey-boi**: Progression impact, reward timing, dopamine hit design
- **fronty-boi**: Visual celebration, animation sequences, UI state changes
- **story-boi**: Narrative weight, revelation pacing, lore delivery
- Cross-domain discussion and iteration

## Difference from /scrum

| Aspect            | /scrum                         | /huddle                                    |
| ----------------- | ------------------------------ | ------------------------------------------ |
| **Team**          | Full team (agents self-select) | Full team OR targeted agents               |
| **Purpose**       | Quick feedback, flag concerns  | Deep collaboration, work through solutions |
| **Length**        | 2-4 sentences per agent        | Paragraphs, detailed discussion            |
| **Depth**         | Surface-level validation       | In-depth problem solving                   |
| **Collaboration** | Parallel independent feedback  | Build on each other's ideas                |
| **Context**       | Minimal                        | Rich, detailed                             |
| **Follow-up**     | Often leads to /1:1 or /huddle | Self-contained working session             |
| **Duration**      | 1-2 minutes to read            | 5-10 minutes to read                       |

**Rule of thumb:**

- Use **/scrum** for: "Does this sound okay?" or "Any concerns?"
- Use **/huddle** for: "Let's design this together" or "How should we approach this?"
- Use **/1:1** for: "I need deep expertise in one domain"

## Agent Behavior in Huddles

### Response Guidelines

**Provide Depth:**

- Multiple paragraphs are encouraged
- Explain reasoning, not just conclusions
- Provide examples and alternative approaches
- Reference relevant patterns, systems, or prior art

**Collaborate Actively:**

- Build on what other agents said
- Identify synergies between domains
- Highlight potential conflicts that need resolution
- Propose integrated solutions

**Ask Clarifying Questions:**

- If the problem is ambiguous, ask before proposing solutions
- Surface assumptions that need user validation
- Identify missing requirements or edge cases

**Provide Concrete Recommendations:**

- Don't just identify problems, propose solutions
- Offer specific implementations or patterns
- Include trade-offs and alternatives
- Explain why you recommend one approach over another

### When to Skip Responding

Skip the huddle if:

- Topic is completely outside your domain
- You have literally nothing meaningful to contribute
- (Don't skip just because another agent covered similar ground—add your unique perspective!)

### Cross-Domain Awareness

**Reference other agents' input:**

- "Building on what fronty-boi said about animations..."
- "I agree with gamey-boi's pacing concern, and from a backend perspective..."
- "secury-boi raised a good point about validation—we should also consider..."

**Identify integration points:**

- "My API design needs to support fronty-boi's UI state transitions"
- "The narrative beats story-boi suggested align well with the tier unlocks I'm recommending"

### Teaching in Huddles

**learny-boi** uses enhanced teaching mode:

- Explain concepts as they arise (5-7 minute depth)
- Provide context for why patterns/approaches work
- Offer to do deeper dive after huddle if needed

## Purpose

Huddles are for:

- **Feature design** - Collaborating on complex features that span multiple domains
- **Architecture decisions** - Working through system design with multiple perspectives
- **Problem solving** - Tackling tricky issues that need cross-functional thinking
- **Planning sessions** - Detailed roadmap or phase planning
- **Design reviews** - In-depth analysis of proposed approaches

Huddles are NOT for:

- Quick validation (use /scrum)
- Deep single-domain work (use /1:1)
- Implementation execution (use /thinky-time after huddle)
- Status updates (normal conversation)

## Examples

### Example 1: Complex Feature Design

````
User: /huddle fronty-boi gamey-boi story-boi designy-boi I want to design the Adventure system with quest chains, demon encounters, and loot drops

gamey-boi: Great question! Let me break down the progression psychology here. Adventure systems in incremental games need to balance:

1. **Frequent small wins** - Regular demon encounters with guaranteed small rewards (exp, minor loot)
2. **Medium-term goals** - Quest chains that span 5-10 adventures, tell a mini-story
3. **Long-term aspirations** - Rare drops (maps, tome fragments) that drive extended engagement

For pacing, I recommend:
- Demon encounters: 80% success rate early, scaling to 60% at higher levels
- Quest chains: Unlock every 5 levels, 3-5 steps each
- Loot drops: Tiered rarity (common 70%, uncommon 25%, rare 5%)

The key is making failure feel like "bad luck" not "I'm not strong enough yet" - that comes from stat training.

fronty-boi: Building on gamey-boi's structure, here's how I'd visualize this:

**Adventure Screen Components:**
1. **Encounter Card** - Animated demon sprite, health indicator, loot preview
2. **Action Buttons** - "Fight" (active) vs "Auto-adventure" (idle unlock)
3. **Quest Tracker** - Persistent sidebar showing current quest chain progress
4. **Loot Toast** - Celebration animation when rare drops occur

For the quest chain UI, I'm thinking a visual progress path (like a literal map path) where completed steps glow and upcoming steps are dimmed. Each step has a small icon indicating the quest type (defeat X demons, reach level Y, etc).

Animation priorities:
- Combat should feel impactful (screen shake, particle effects)
- Loot drops need visual weight (chest opening, item reveal)
- Quest completion deserves a celebration moment

Mobile consideration: Keep the encounter card large enough for touch, auto-adventure toggle prominent.

story-boi: Love the quest chain structure! This is perfect for narrative delivery. Here's how I'd weave story into this:

**Narrative Integration:**
1. **Demon flavor text** - Each demon type has 3-5 randomized encounter descriptions
   - "The shadow demon materializes, drawn to your growing power..."
   - "A flame wraith erupts from the ruins, ancient and furious..."

2. **Quest chain stories** - Each 5-level milestone quest tells a mini-arc
   - Level 5 quest: "Investigate the ruins" (introduces Lost Civilization hints)
   - Level 10 quest: "Track the demon source" (deepens the mystery)
   - Level 15 quest: "Discover the old battlefield" (reveals war history)

3. **Loot discovery moments** - Rare drops trigger story blurbs
   - Finding a map: "The parchment is ancient, marked with symbols you're beginning to recognize..."
   - Tome fragment: "Another piece of the puzzle. The adventurer's notes mentioned this..."

The quest descriptions should be 2-3 sentences, quest completion rewards 4-5 sentences with a small revelation.

designy-boi: From an architecture perspective, let's make sure this is maintainable and testable. Here's how I'd structure this:

**Class Decomposition:**
```typescript
class AdventureEngine {
  // Orchestrates adventures, delegates to subsystems
}

class EncounterGenerator {
  // Spawns demons based on player level, quest context
  // Pure function: input (level, questState) -> output (encounter)
}

class CombatResolver {
  // Deterministic combat calculation
  // Takes player stats + demon stats -> outcome
}

class LootTable {
  // Weighted random drops
  // Separate tables per level range for balance tuning
}

class QuestManager {
  // Tracks quest progress, unlocks, completion
  // Event-driven: emits "questComplete" for UI/story integration
}
````

**Key patterns:**

- **Strategy Pattern** for combat resolution (allows different demon types to have different mechanics)
- **Observer Pattern** for quest events (story-boi's blurbs subscribe to quest completion)
- **Factory Pattern** for encounter generation (creates demons with appropriate stats/loot)

**Svelte 5 Integration:**

```typescript
// Reactive state
const adventureState = $state({
	currentEncounter: null,
	activeQuests: [],
	recentLoot: []
});

// Derived computations
const canAdventure = $derived(player.level >= 3 && !adventureState.currentEncounter);

// Effects for side effects
$effect(() => {
	if (adventureState.currentEncounter?.isComplete) {
		handleLootDrop();
		checkQuestProgress();
	}
});
```

This separation means:

- gamey-boi can tune LootTable and EncounterGenerator without touching UI
- fronty-boi can redesign adventure screen without touching game logic
- story-boi can update quest descriptions in data files
- testy-boi can unit test each system independently

User: How should auto-adventure work when it unlocks?

gamey-boi: Auto-adventure should unlock around level 10-12, after players understand the manual adventure flow. Here's the design:

**Auto-Adventure Mechanics:**

- **Toggle state**: On/Off switch, persists in save
- **Interval**: One adventure every 30-60 seconds (tunable)
- **Smart targeting**: Prioritizes active quest objectives if available
- **Loot accumulation**: Stores loot, shows notification badge
- **Failure handling**: Continues adventuring even on losses (no death spiral)

**Balance consideration**: Auto-adventure should be ~70% as efficient as active play. This rewards active players without punishing idle players. Maybe auto-adventure has slightly lower rare drop rates, or takes longer per adventure.

fronty-boi: For the auto-adventure UI:

**Visual State:**

- **Disabled state** (pre-unlock): Greyed out with lock icon, tooltip explains unlock level
- **Idle state** (unlocked, off): Toggle button, neutral color
- **Active state** (running): Pulsing animation, shows countdown to next adventure
- **Notification state**: Badge count showing accumulated loot

**Loot Review Modal:**
When user clicks the badge, show a modal summarizing what was gained during idle time:

- "While you were away: 15 adventures completed"
- Grouped loot summary (3x common helm, 2x uncommon scroll, etc.)
- XP/gold totals
- Quest progress updates

This gives the satisfying "I came back to rewards" feeling that makes idle games work.

story-boi: Auto-adventure narrative approach:

Instead of individual encounter text, use summary blurbs:

- "You venture forth repeatedly, growing stronger with each battle..."
- "The demons fall before you, one after another. You're becoming formidable."

But when rare events happen during auto-adventure, still deliver the story:

- Quest completion during idle: Full story note still appears
- Rare loot during idle: Discovery blurb still triggers
- Tier unlock during idle: Milestone story moment preserved

Never let automation steal narrative moments—just compress the mundane encounters.

```

### Example 2: Architecture Planning

```

User: /huddle designy-boi backy-boi secury-boi I want to design the cloud save system architecture

designy-boi: Let's start with the system architecture overview, then drill into specifics.

**High-Level Design:**

1. **Frontend**: SvelteKit static site (already in place)
2. **Backend**: Node.js API on K8s cluster (to build)
3. **Storage**: PostgreSQL for user data, Redis for sessions
4. **Auth**: JWT tokens with refresh token rotation
5. **Sync Strategy**: Optimistic local-first with conflict resolution

**Key Architectural Decisions:**

**Decision 1: Local-First Architecture**

- Game state always stored in localStorage (offline-capable)
- Cloud saves are backups + sync, not primary storage
- Benefits: Fast, works offline, no server dependency for gameplay
- Trade-off: Need robust conflict resolution

**Decision 2: Save State Schema**

```typescript
interface CloudSave {
	saveId: string; // UUID for this save
	userId: string; // Owner
	version: number; // Schema version for migrations
	lastModified: Date; // Sync conflict resolution
	checksum: string; // Anti-cheat validation
	gameState: {
		// All game data (exp, level, stats, tomes, etc)
	};
	metadata: {
		deviceId: string; // Which device created this
		clientVersion: string; // Game version
	};
}
```

**Decision 3: Sync Triggers**

- Manual: "Save to Cloud" button
- Auto: Every 5 minutes if changes detected
- Event-based: On tier unlock, tome discovery (milestone moments)

Thoughts before I go deeper into the API design?

backy-boi: Great foundation! Let me detail the API layer and database design.

**API Endpoints:**

```typescript
POST   /api/auth/register         // Create account
POST   /api/auth/login            // Get JWT tokens
POST   /api/auth/refresh          // Rotate refresh token
POST   /api/auth/logout           // Invalidate tokens

GET    /api/saves                 // List user's cloud saves
GET    /api/saves/:id             // Retrieve specific save
POST   /api/saves                 // Create new cloud save
PUT    /api/saves/:id             // Update existing save
DELETE /api/saves/:id             // Delete save
POST   /api/saves/:id/validate    // Anti-cheat check
```

**Database Schema:**

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

CREATE TABLE saves (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  save_name VARCHAR(100),
  game_state JSONB NOT NULL,
  checksum VARCHAR(64) NOT NULL,
  version INTEGER NOT NULL,
  last_modified TIMESTAMP DEFAULT NOW(),
  device_id VARCHAR(100),
  client_version VARCHAR(20),

  INDEX idx_user_saves (user_id, last_modified DESC)
);

CREATE TABLE sync_log (
  id SERIAL PRIMARY KEY,
  save_id UUID REFERENCES saves(id) ON DELETE CASCADE,
  sync_type VARCHAR(20), -- 'manual', 'auto', 'milestone'
  timestamp TIMESTAMP DEFAULT NOW(),

  INDEX idx_save_sync_history (save_id, timestamp DESC)
);
```

**Conflict Resolution Strategy:**

When PUT /api/saves/:id receives an update:

1. Compare `lastModified` timestamps
2. If server newer than client: CONFLICT
   - Return 409 Conflict with server state
   - Client presents merge UI to user
3. If client newer: Accept update
4. If timestamps identical but checksum differs: SUSPICIOUS (possible cheat)

**Performance Considerations:**

- JSONB for game_state allows indexing specific fields if needed
- Sync log useful for debugging sync issues
- Could add save slots (max 3 saves per user) to limit storage

secury-boi: Critical security concerns to address:

**Authentication Security:**

1. **Password Storage**
   - bcrypt with cost factor 12
   - Never log passwords (even hashed)
   - Rate limit login attempts (5 per 15 min per IP)

2. **JWT Token Strategy**
   - Short-lived access tokens (15 minutes)
   - Long-lived refresh tokens (7 days), stored in httpOnly cookie
   - Refresh token rotation on use (invalidate old, issue new)
   - Token revocation list in Redis for logout

3. **API Security**
   - All endpoints HTTPS only
   - CORS restricted to tomeclicker.marks.dev
   - Rate limiting per user (100 req/min for normal ops, 10 req/min for saves)
   - Request size limits (save state max 1MB)

**Anti-Cheat Validation:**

The checksum field needs to validate game state integrity:

```typescript
function generateChecksum(gameState: GameState): string {
	// Server-side validation rules
	const validations = {
		// Exp should match level calculation
		expMatchesLevel: Math.floor(Math.log10(gameState.exp) / 3) + 1 === gameState.level,

		// Stats can't exceed possible training given exp earned
		statsPlausible: calculateMaxPossibleStats(gameState.exp) >= gameState.stats.total,

		// Tome unlocks must match progression requirements
		tomesValid: validateTomeUnlocks(gameState.tomes, gameState.level),

		// Timestamps must be chronologically valid
		timelineValid: gameState.created <= gameState.lastPlayed
	};

	// If any validation fails, checksum won't match
	const stateString = JSON.stringify({ gameState, validations });
	return crypto.createHash('sha256').update(stateString).digest('hex');
}
```

**Data Protection:**

1. **Encryption in Transit**: TLS 1.3 only
2. **Encryption at Rest**: PostgreSQL encryption (LUKS on K8s PVs)
3. **PII Handling**: Email is only PII, never share, allow deletion (GDPR)

**Attack Vectors to Consider:**

- **Replay attacks**: Timestamp validation, nonce in JWT
- **Modified game states**: Checksum validation on server
- **Account enumeration**: Generic error messages on login
- **Brute force**: Rate limiting, account lockout after 10 failures
- **XSS**: Sanitize all user input (save names, etc)
- **SQL injection**: Parameterized queries only (use an ORM)

**Incident Response:**

- Log all auth failures to detect brute force
- Monitor sync_log for unusual patterns (rapid saves = botting?)
- Alerting on checksum validation failures (cheating attempts)

Recommend implementing secury-boi's validation rules BEFORE launching cloud saves to beta.

designy-boi: Bringing it together, here's the implementation roadmap:

**Phase 1: Backend Foundation**

1. Set up Node.js + Express on K8s
2. Implement auth endpoints (register, login, refresh, logout)
3. Database migrations for users table
4. JWT token system with refresh rotation
5. Basic rate limiting and security headers

**Phase 2: Save API**

1. Implement saves endpoints (CRUD)
2. Database migrations for saves + sync_log tables
3. Checksum validation logic
4. Conflict detection (timestamp comparison)

**Phase 3: Frontend Integration**

1. Auth UI (register, login, account management)
2. Cloud save UI (list, create, load, delete)
3. Sync button + auto-sync logic
4. Conflict resolution UI

**Phase 4: Security Hardening**

1. Implement all secury-boi's recommendations
2. Security audit
3. Penetration testing
4. Rate limiting tuning

**Phase 5: Launch**

1. Beta testing with small group
2. Monitor sync_log for issues
3. Gather feedback on conflict resolution UX
4. Full launch

This aligns with PROPOSAL.md Phase 3. Should take 3-4 weeks of focused work.

```

## Tips for Effective Huddles

1. **Come prepared**: Share relevant context, prior decisions, constraints
2. **Be specific**: "How should we design X?" is better than "Tell me about X"
3. **Encourage collaboration**: Ask agents to build on each other's ideas
4. **Stay engaged**: Follow up on interesting points, ask clarifying questions
5. **Document outcomes**: Use /debrief after to persist important decisions
6. **Lead to action**: Huddles should end with clear next steps

## After the Huddle

Common next steps:
- **/debrief** - Persist decisions and context to agent files
- **/thinky-time** - Implement what was designed in the huddle
- **/1:1** - Deep dive with one agent on a specific aspect
- **Normal work** - Execute based on huddle outcomes

## Agent Roster

Available agents for targeted huddles:
- **staffy-boi**: Project coordination, cross-functional planning, roadmapping
- **fronty-boi**: UI/UX, Svelte components, animations, accessibility
- **gamey-boi**: Game design, progression, balance, player psychology
- **story-boi**: Narrative design, lore, worldbuilding, flavor text
- **docy-boi**: Documentation strategy, technical writing, information architecture
- **backy-boi**: Backend APIs, database design, data modeling, scalability
- **sre-boi**: Infrastructure, Kubernetes, CI/CD, monitoring, reliability
- **testy-boi**: Testing strategy, test architecture, QA processes, validation
- **secury-boi**: Security architecture, threat modeling, auth, anti-cheat
- **learny-boi**: Technical explanations, teaching, debugging guidance, mentorship
- **designy-boi**: Software architecture, design patterns, system design, OOP

## Source of Truth References

Agents reference these documents during huddles:
- **design/OUTLINE.md** - Game progression, mechanics, complete design vision
- **design/tomes.yaml** - All 50 Tomes structure and metadata
- **design/tiers.yaml** - Tome tier hierarchy and progression system
- **design/PROPOSAL.md** - Technical roadmap, modernization phases, infrastructure plans
- **CLAUDE.md** - Development guidelines, architecture decisions, workflow standards
- **README.md** - Project overview, setup instructions, current state
```
