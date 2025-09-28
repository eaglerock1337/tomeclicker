export interface Upgrade {
    id: string;
    name: string;
    description: string;
    effect: string;
    baseCost: number;
    costMultiplier: number;
    maxLevel: number;
    currentLevel: number;
    effectType: 'clickMultiplier' | 'levelUp';
    effectValue: number;
}

export class Game {
    public name: string;
    public tickrate: number;
    public exp: number;
    public tick: number;
    public text: string;
    public menu: string;
    public clickMultiplier: number;
    public upgrades: { [key: string]: Upgrade };

    constructor(name?: string) {
        this.name = name || 'A Stranger';
        this.tickrate = 1000;
        this.exp = 0;
        this.tick = 0;
        this.text = "click me";
        this.menu = "practice";
        this.clickMultiplier = 1.0;
        this.upgrades = this.initializeUpgrades();
    }

    private initializeUpgrades(): { [key: string]: Upgrade } {
        return {
            'better-training': {
                id: 'better-training',
                name: 'Better Training',
                description: 'Improve your practice technique for more EXP per click',
                effect: '+10% EXP per click',
                baseCost: 10,
                costMultiplier: 1.5,
                maxLevel: 10,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 0.1
            },
            'focused-practice': {
                id: 'focused-practice',
                name: 'Focused Practice',
                description: 'Deep concentration yields greater rewards',
                effect: '+20% EXP per click',
                baseCost: 25,
                costMultiplier: 1.6,
                maxLevel: 8,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 0.2
            },
            'mental-discipline': {
                id: 'mental-discipline',
                name: 'Mental Discipline',
                description: 'Master your mind to unlock greater potential',
                effect: '+30% EXP per click',
                baseCost: 50,
                costMultiplier: 1.7,
                maxLevel: 6,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 0.3
            },
            'level-up': {
                id: 'level-up',
                name: 'Level Up',
                description: 'Purchase your next level directly',
                effect: 'Advance to next level',
                baseCost: 1000,
                costMultiplier: 10,
                maxLevel: 99,
                currentLevel: 0,
                effectType: 'levelUp',
                effectValue: 1
            }
        };
    }

    /** Derivative Getters */

    get level() {
        return Math.floor(Math.log10(this.exp) / 3) + 1;
    }

    /** Upgrade Methods */

    getUpgradeCost(upgradeId: string): number {
        const upgrade = this.upgrades[upgradeId];
        if (!upgrade) return 0;
        return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.currentLevel));
    }

    canAffordUpgrade(upgradeId: string): boolean {
        const cost = this.getUpgradeCost(upgradeId);
        return this.exp >= cost;
    }

    canPurchaseUpgrade(upgradeId: string): boolean {
        const upgrade = this.upgrades[upgradeId];
        if (!upgrade) return false;

        // Special requirements
        if (upgradeId === 'level-up' && this.exp < 1000) return false;

        return this.canAffordUpgrade(upgradeId) && upgrade.currentLevel < upgrade.maxLevel;
    }

    purchaseUpgrade(upgradeId: string): boolean {
        if (!this.canPurchaseUpgrade(upgradeId)) return false;

        const upgrade = this.upgrades[upgradeId];
        const cost = this.getUpgradeCost(upgradeId);

        this.exp -= cost;
        upgrade.currentLevel++;

        // Apply upgrade effects
        if (upgrade.effectType === 'clickMultiplier') {
            this.clickMultiplier += upgrade.effectValue;
        } else if (upgrade.effectType === 'levelUp') {
            // Level up is handled by increasing exp to the next level threshold
            const nextLevelExp = Math.pow(10, (this.level * 3));
            this.exp = Math.max(this.exp, nextLevelExp);
        }

        return true;
    }

    getClickValue(): number {
        return Math.floor(this.clickMultiplier);
    }

    /** Conditionals */

    showHeader() {
        return this.exp > 10;
    }

    showMenu() {
        return this.exp > 50;
    }

    showUpgrades() {
        return this.exp >= 100;
    }
};
