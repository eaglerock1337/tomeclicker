/**
 * Story Content Loader
 *
 * Loads and parses story entries from YAML configuration.
 * Converts YAML trigger definitions to TypeScript TriggerCondition types.
 */

import type { StoryEntry, TriggerCondition } from '$lib/managers/story-manager';
import storyContentYaml from './story-content.yaml?raw';

/**
 * YAML structure for story content file
 */
interface StoryContentYaml {
	chapters: ChapterYaml[];
}

interface ChapterYaml {
	id: number;
	title: string;
	description: string;
	entries: EntryYaml[];
}

interface EntryYaml {
	id: string;
	text: string;
	trigger: TriggerYaml;
	title?: string;
}

type TriggerYaml = Record<string, any>;

/**
 * Parse YAML content into StoryEntry objects
 *
 * @returns Array of story entries with unlocked/acknowledged state initialized to false
 */
export function loadStoryEntries(): StoryEntry[] {
	// Parse YAML content
	const data = parseYaml(storyContentYaml) as StoryContentYaml;

	if (!data?.chapters) {
		console.warn('No chapters found in story-content.yaml');
		return [];
	}

	// Flatten chapter entries into single array with chapter metadata
	const entries: StoryEntry[] = [];

	for (const chapter of data.chapters) {
		if (!chapter.entries || chapter.entries.length === 0) {
			continue;
		}

		for (const entry of chapter.entries) {
			entries.push({
				id: entry.id,
				chapter: chapter.id,
				title: entry.title || chapter.title, // Use entry title if provided, otherwise chapter title
				text: entry.text,
				trigger: parseTrigger(entry.trigger),
				unlocked: false, // Initialize as locked
				acknowledged: false, // Initialize as unread
				timestamp: undefined // Will be set when unlocked
			});
		}
	}

	return entries;
}

/**
 * Parse YAML string into JavaScript object
 * Uses simple YAML parser (no external dependencies)
 */
function parseYaml(yamlContent: string): any {
	// For now, use a simple YAML parser
	// TODO: Consider using js-yaml library for more robust parsing
	try {
		// Remove comments
		const lines = yamlContent.split('\n').filter((line) => !line.trim().startsWith('#'));
		const cleaned = lines.join('\n');

		// Use JSON.parse with YAML-to-JSON conversion
		// This is a simplified approach - for production, use js-yaml
		return parseYamlSimple(cleaned);
	} catch (error) {
		console.error('Failed to parse story-content.yaml:', error);
		return null;
	}
}

/**
 * Simple YAML parser (subset of YAML spec)
 * Handles basic structures used in story-content.yaml
 *
 * Note: This is a minimal implementation for our specific YAML format.
 * For production, consider using js-yaml library.
 */
function parseYamlSimple(yamlContent: string): any {
	const lines = yamlContent.split('\n');
	const root: any = {};
	const stack: any[] = [{ indent: -1, obj: root }];

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const trimmed = line.trimEnd();

		if (!trimmed || trimmed.startsWith('#')) continue;

		// Calculate indentation level
		const indent = line.length - line.trimStart().length;
		const content = line.trim();

		// Pop stack until we find the right parent
		while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
			stack.pop();
		}

		const parent = stack[stack.length - 1].obj;

		// Handle different YAML structures
		if (content.startsWith('- ')) {
			// Array item
			const itemContent = content.substring(2).trim();

			if (!Array.isArray(parent)) {
				console.warn(`Expected array at line ${i + 1}`);
				continue;
			}

			if (itemContent.includes(':')) {
				// Object item
				const obj: any = {};
				parent.push(obj);
				stack.push({ indent, obj });

				// Parse the key-value on the same line
				const [key, ...valueParts] = itemContent.split(':');
				const value = valueParts.join(':').trim();
				if (value) {
					obj[key.trim()] = parseValue(value);
				}
			} else {
				// Simple value
				parent.push(parseValue(itemContent));
			}
		} else if (content.includes(':')) {
			// Key-value pair
			const colonIndex = content.indexOf(':');
			const key = content.substring(0, colonIndex).trim();
			const valueStr = content.substring(colonIndex + 1).trim();

			if (!valueStr) {
				// Object or array follows
				const nextLine = lines[i + 1];
				if (nextLine && nextLine.trim().startsWith('- ')) {
					// Array follows
					parent[key] = [];
					stack.push({ indent, obj: parent[key] });
				} else {
					// Object follows
					parent[key] = {};
					stack.push({ indent, obj: parent[key] });
				}
			} else {
				// Simple value
				parent[key] = parseValue(valueStr);
			}
		}
	}

	return root;
}

/**
 * Parse a YAML value (string, number, boolean)
 */
function parseValue(value: string): any {
	// Remove quotes
	if (
		(value.startsWith('"') && value.endsWith('"')) ||
		(value.startsWith("'") && value.endsWith("'"))
	) {
		return value.substring(1, value.length - 1);
	}

	// Parse numbers
	if (/^-?\d+$/.test(value)) {
		return parseInt(value, 10);
	}
	if (/^-?\d+\.\d+$/.test(value)) {
		return parseFloat(value);
	}

	// Parse booleans
	if (value === 'true') return true;
	if (value === 'false') return false;
	if (value === 'null') return null;

	// String
	return value;
}

/**
 * Convert YAML trigger object to TypeScript TriggerCondition union type
 */
function parseTrigger(triggerYaml: TriggerYaml): TriggerCondition {
	const type = triggerYaml.type;

	switch (type) {
		// Simple thresholds
		case 'exp':
			return { type: 'exp', threshold: triggerYaml.threshold };
		case 'lifetimeExp':
			return { type: 'lifetimeExp', threshold: triggerYaml.threshold };
		case 'level':
			return {
				type: 'level',
				threshold: triggerYaml.threshold,
				operator: triggerYaml.operator || 'gte'
			};

		// Upgrades
		case 'upgradeOwned':
			return { type: 'upgradeOwned', upgradeId: triggerYaml.upgradeId };
		case 'upgradeLevel':
			return { type: 'upgradeLevel', upgradeId: triggerYaml.upgradeId, level: triggerYaml.level };

		// Stats
		case 'statLevel':
			return { type: 'statLevel', stat: triggerYaml.stat, level: triggerYaml.level };
		case 'allStatsLevel':
			return { type: 'allStatsLevel', level: triggerYaml.level };
		case 'anyStatLevel':
			return { type: 'anyStatLevel', level: triggerYaml.level };
		case 'totalStats':
			return { type: 'totalStats', total: triggerYaml.total };

		// Feature unlocks
		case 'adventureUnlocked':
			return { type: 'adventureUnlocked' };
		case 'questingUnlocked':
			return { type: 'questingUnlocked' };
		case 'tomesUnlocked':
			return { type: 'tomesUnlocked' };
		case 'nameSet':
			return { type: 'nameSet' };

		// Adventure system
		case 'adventureCompleted':
			return { type: 'adventureCompleted', count: triggerYaml.count };
		case 'chestOpened':
			return { type: 'chestOpened', count: triggerYaml.count };
		case 'itemDuplicate':
			return { type: 'itemDuplicate', count: triggerYaml.count };
		case 'gearMaxed':
			return { type: 'gearMaxed' };

		// Prestige/Retreat system
		case 'maxLevelReached':
			return { type: 'maxLevelReached', level: triggerYaml.level };
		case 'retreatAvailable':
			return { type: 'retreatAvailable' };
		case 'retreatCompleted':
			return { type: 'retreatCompleted', count: triggerYaml.count };
		case 'previousMaxReached':
			return { type: 'previousMaxReached' };

		// Quest system
		case 'questCompleted':
			return {
				type: 'questCompleted',
				count: triggerYaml.count,
				questLevel: triggerYaml.questLevel
			};

		// Tome system
		case 'tomeChapter':
			return { type: 'tomeChapter', tomeId: triggerYaml.tomeId, chapter: triggerYaml.chapter };
		case 'tomeCompleted':
			return { type: 'tomeCompleted', tomeId: triggerYaml.tomeId };

		// Composite conditions
		case 'all':
			return {
				type: 'all',
				conditions: triggerYaml.conditions.map((c: TriggerYaml) => parseTrigger(c))
			};
		case 'any':
			return {
				type: 'any',
				conditions: triggerYaml.conditions.map((c: TriggerYaml) => parseTrigger(c))
			};

		// Manual unlock
		case 'manual':
			return { type: 'manual', eventId: triggerYaml.eventId };

		default:
			console.warn(`Unknown trigger type: ${type}`);
			return { type: 'manual' }; // Default to manual unlock if unknown type
	}
}
