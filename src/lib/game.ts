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
    public lifetimeExp: number;
    public level: number;
    public tick: number;
    public menu: string;
    public clickMultiplier: number;
    public upgrades: { [key: string]: Upgrade };
    public saveIntegrity: string;
    public lastValidation: number;
    private _validationKey: string;

    constructor(name?: string) {
        this.name = name || 'A Stranger';
        this.tickrate = 1000;
        this.exp = 0.0;
        this.lifetimeExp = 0.0;
        this.level = 1;
        this.tick = 0;
        this.menu = 'practice';
        this.clickMultiplier = 1.0;
        this.upgrades = this.initializeUpgrades();
        this.saveIntegrity = 'valid';
        this.lastValidation = Date.now();
        this._validationKey = this.generateValidationKey();
        this.startIntegrityMonitoring();
        this.recalculateClickMultiplier();
    }

    recalculateClickMultiplier() {
        this.clickMultiplier = 1.0;

        // Add additive upgrades first
        for (const upgrade of Object.values(this.upgrades)) {
            if (upgrade.effectType === 'clickMultiplier' && upgrade.id !== 'transcendent-focus') {
                this.clickMultiplier += upgrade.effectValue * upgrade.currentLevel;
            }
        }

        // Apply multiplicative Transcendent Focus (5x per level)
        const transcendentFocus = this.upgrades['transcendent-focus'];
        if (transcendentFocus && transcendentFocus.currentLevel > 0) {
            this.clickMultiplier *= Math.pow(5, transcendentFocus.currentLevel);
        }
    }

    updateClickText() {
        // Check if ready to level up
        if (this.canLevelUp()) {
            return 'level up available';
        }

        // Check if any upgrades are available
        if (this.showUpgrades()) {
            for (const upgrade of Object.values(this.upgrades)) {
                if (this.canPurchaseUpgrade(upgrade.id)) {
                    return 'upgrade available';
                }
            }
        }

        // Show click me only at the very beginning
        if (this.lifetimeExp === 0) {
            return 'click me';
        }

        // After first click, just show empty text
        return '';
    }

    migrateUpgrades(savedUpgrades: { [key: string]: Upgrade }) {
        // Get fresh upgrade definitions
        const freshUpgrades = this.initializeUpgrades();

        // Preserve current levels from saved upgrades
        for (const upgradeId in freshUpgrades) {
            if (savedUpgrades[upgradeId]) {
                freshUpgrades[upgradeId].currentLevel = savedUpgrades[upgradeId].currentLevel;
            }
        }

        this.upgrades = freshUpgrades;
    }

    initializeUpgrades(): { [key: string]: Upgrade } {
        return {
            'basic-training': {
                id: 'basic-training',
                name: 'Basic Training',
                description: 'Learn fundamental practice techniques',
                effect: '+50% EXP per click',
                baseCost: 50,
                costMultiplier: 1.15,
                maxLevel: 100,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 0.5
            },
            'focused-practice': {
                id: 'focused-practice',
                name: 'Focused Practice',
                description: 'Deep concentration yields greater rewards',
                effect: '+100% EXP per click',
                baseCost: 16000,  // Approx cost of 90th Basic Training
                costMultiplier: 1.15,
                maxLevel: 100,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 1.0
            },
            'mental-discipline': {
                id: 'mental-discipline',
                name: 'Mental Discipline',
                description: 'Master your mind to unlock greater potential',
                effect: '+150% EXP per click',
                baseCost: 5200000,  // Approx cost of 90th Focused Practice
                costMultiplier: 1.15,
                maxLevel: 100,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 1.5
            },
            'advanced-techniques': {
                id: 'advanced-techniques',
                name: 'Advanced Techniques',
                description: 'Complex methods for exponential growth',
                effect: '+200% EXP per click',
                baseCost: 1700000000,  // Approx cost of 90th Mental Discipline
                costMultiplier: 1.15,
                maxLevel: 100,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 2.0
            },
            'mastery-training': {
                id: 'mastery-training',
                name: 'Mastery Training',
                description: 'Achieve perfect form and technique',
                effect: '+250% EXP per click',
                baseCost: 555000000000,  // Approx cost of 90th Advanced Techniques
                costMultiplier: 1.15,
                maxLevel: 100,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 2.5
            },
            'transcendent-focus': {
                id: 'transcendent-focus',
                name: 'Transcendent Focus',
                description: 'Reach beyond normal limitations',
                effect: '5x total EXP per click',
                baseCost: 1000,
                costMultiplier: 1.1,  // Lower multiplier, additive cost
                maxLevel: 25,
                currentLevel: 0,
                effectType: 'clickMultiplier',
                effectValue: 5.0  // This value is not used for transcendent focus anymore
            }
        };
    }

    /** Integrity Monitoring */

    private generateValidationKey(): string {
        if (typeof btoa === 'undefined') {
            // Fallback for server-side rendering
            return (
                Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            );
        }
        return btoa(
            Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        );
    }

    private startIntegrityMonitoring() {
        // Disable integrity monitoring for now
        return;
    }

    private calculateExpectedClickMultiplier(): number {
        let expected = 1.0;
        for (const upgrade of Object.values(this.upgrades)) {
            if (upgrade.effectType === 'clickMultiplier') {
                expected += upgrade.effectValue * upgrade.currentLevel;
            }
        }
        return expected;
    }

    private markIntegrityViolation(reason: string) {
        this.saveIntegrity = `compromised-${reason}-${Date.now()}`;
        console.warn(`Game integrity violation detected: ${reason}`);
    }

    addExp(amount: number) {
        this.exp += amount;
        this.lifetimeExp += amount;
    }

    /** Level System */

    getLevelUpCost(): number {
        return 10000 * Math.pow(100, this.level - 1);
    }

    canLevelUp(): boolean {
        return this.exp >= this.getLevelUpCost();
    }

    levelUp(): boolean {
        if (!this.canLevelUp()) return false;
        this.exp -= this.getLevelUpCost();
        this.level++;
        return true;
    }

    /** Upgrade Methods */

    getUpgradeCost(upgradeId: string): number {
        const upgrade = this.upgrades[upgradeId];
        if (!upgrade) return 0;

        // Special handling for Transcendent Focus (multiplicative cost like level ups)
        if (upgradeId === 'transcendent-focus') {
            return upgrade.baseCost * Math.pow(100, upgrade.currentLevel);
        }

        return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.currentLevel));
    }

    canAffordUpgrade(upgradeId: string): boolean {
        const cost = this.getUpgradeCost(upgradeId);
        return this.exp >= cost;
    }

    canPurchaseUpgrade(upgradeId: string): boolean {
        const upgrade = this.upgrades[upgradeId];
        if (!upgrade) return false;

        return this.canAffordUpgrade(upgradeId) && upgrade.currentLevel < upgrade.maxLevel;
    }

    purchaseUpgrade(upgradeId: string): boolean {
        if (!this.canPurchaseUpgrade(upgradeId)) return false;

        const upgrade = this.upgrades[upgradeId];
        const cost = this.getUpgradeCost(upgradeId);

        this.exp -= cost;
        upgrade.currentLevel++;

        // Recalculate click multiplier after purchase
        this.recalculateClickMultiplier();

        return true;
    }

    getClickValue(): number {
        return this.clickMultiplier;
    }

    /** Conditionals */

    showHeader() {
        return this.lifetimeExp >= 10;
    }

    showMenu() {
        return this.lifetimeExp >= 50;
    }

    showUpgrades() {
        return this.lifetimeExp >= 50;
    }

    /** Save/Load System */

    private generateSaveHash(data: string): string {
        // Simple hash for save validation - not cryptographically secure but detects tampering
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
            const char = data.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash.toString(36) + this._validationKey;
    }

    private encryptSave(data: string): string {
        // Simple XOR encryption - not secure but obfuscates the data
        const key = 'tomeclicker-save-key';
        let encrypted = '';
        for (let i = 0; i < data.length; i++) {
            encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }

        if (typeof btoa === 'undefined') {
            // Fallback for server-side rendering
            return Buffer.from(encrypted).toString('base64');
        }
        return btoa(encrypted);
    }

    private decryptSave(encryptedData: string): string {
        try {
            let encrypted: string;
            if (typeof atob === 'undefined') {
                // Fallback for server-side rendering
                encrypted = Buffer.from(encryptedData, 'base64').toString();
            } else {
                encrypted = atob(encryptedData);
            }

            const key = 'tomeclicker-save-key';
            let decrypted = '';
            for (let i = 0; i < encrypted.length; i++) {
                decrypted += String.fromCharCode(encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length));
            }
            return decrypted;
        } catch {
            throw new Error('Invalid encrypted save data');
        }
    }

    exportSave(encrypted = true): string {
        const saveData = {
            name: this.name,
            exp: this.exp,
            lifetimeExp: this.lifetimeExp,
            level: this.level,
            clickMultiplier: this.clickMultiplier,
            upgrades: this.upgrades,
            saveIntegrity: this.saveIntegrity,
            lastValidation: this.lastValidation,
            version: '0.1.0',
            timestamp: Date.now()
        };

        const jsonData = JSON.stringify(saveData);

        if (encrypted) {
            const hash = this.generateSaveHash(jsonData);
            const encryptedData = this.encryptSave(jsonData);
            return JSON.stringify({
                encrypted: true,
                data: encryptedData,
                hash: hash,
                version: '0.1.0'
            });
        } else {
            return JSON.stringify({
                ...saveData,
                encrypted: false,
                warning: 'This save is not eligible for leaderboard participation'
            });
        }
    }

    importSave(saveString: string): { success: boolean; warning?: string; error?: string } {
        try {
            const saveWrapper = JSON.parse(saveString);
            let saveData;
            let warning = '';

            if (saveWrapper.encrypted === false) {
                // Unencrypted save - mark as compromised
                saveData = saveWrapper;
                this.saveIntegrity = 'unencrypted-import';
                warning =
                    'This save is not eligible for leaderboard participation due to unencrypted import.';
            } else if (saveWrapper.encrypted === true) {
                // Encrypted save - skip hash validation for now
                const decryptedData = this.decryptSave(saveWrapper.data);
                saveData = JSON.parse(decryptedData);
            } else {
                return { success: false, error: 'Invalid save format.' };
            }

            // Validate save data structure
            if (!this.validateSaveData(saveData)) {
                return { success: false, error: 'Save data is invalid or corrupted.' };
            }

            // Load the save data
            this.name = saveData.name;
            this.exp = saveData.exp;
            this.lifetimeExp = saveData.lifetimeExp;
            this.level = saveData.level || 1;

            // Migrate upgrades: preserve levels but update definitions
            this.migrateUpgrades(saveData.upgrades);

            this.saveIntegrity = saveData.saveIntegrity || this.saveIntegrity;
            this.lastValidation = Date.now();

            // Recalculate click multiplier from upgrades
            this.recalculateClickMultiplier();

            return { success: true, warning };
        } catch (error) {
            return { success: false, error: `Failed to import save: ${error}` };
        }
    }

    private validateSaveData(data: any): boolean {
        return (
            typeof data.name === 'string' &&
            typeof data.exp === 'number' &&
            typeof data.lifetimeExp === 'number' &&
            (typeof data.level === 'number' || data.level === undefined) &&
            typeof data.clickMultiplier === 'number' &&
            typeof data.upgrades === 'object' &&
            data.exp <= data.lifetimeExp
        );
    }

    saveToCookies(): void {
        if (typeof document === 'undefined') return;
        try {
            const saveData = this.exportSave(true);
            const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `tomeclicker_save=${encodeURIComponent(saveData)}; expires=${expires}; path=/; SameSite=Lax`;
        } catch (error) {
            console.error('Failed to save to cookies:', error);
        }
    }

    loadFromCookies(): boolean {
        if (typeof document === 'undefined') return false;
        try {
            const cookies = document.cookie.split(';');
            for (const cookie of cookies) {
                const [name, value] = cookie.trim().split('=');
                if (name === 'tomeclicker_save' && value) {
                    const result = this.importSave(decodeURIComponent(value));
                    if (result.success) {
                        return true;
                    } else {
                        console.error('Failed to load save from cookies:', result.error);
                        return false;
                    }
                }
            }
            return false;
        } catch (error) {
            console.error('Error loading from cookies:', error);
            return false;
        }
    }

    saveToLocalStorage(): void {
        if (typeof localStorage === 'undefined') return;
        try {
            const saveData = this.exportSave(true);
            localStorage.setItem('tomeclicker_save', saveData);
            console.log('✅ Saved to localStorage');
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    }

    loadFromLocalStorage(): boolean {
        if (typeof localStorage === 'undefined') return false;
        try {
            const saveData = localStorage.getItem('tomeclicker_save');
            console.log('Loading from localStorage:', saveData ? 'Found data' : 'No data');
            if (saveData) {
                const result = this.importSave(saveData);
                if (result.success) {
                    console.log('✅ Loaded from localStorage successfully');
                    return true;
                } else {
                    console.error('Failed to load save from localStorage:', result.error);
                    return false;
                }
            }
            return false;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return false;
        }
    }

    autoSave(): void {
        console.log('AutoSave triggered - Current state:', { exp: this.exp, lifetimeExp: this.lifetimeExp });
        // Try both localStorage and cookies for redundancy
        this.saveToLocalStorage();
        this.saveToCookies();
    }
}
