<script lang="ts">
    import { Download, Upload, Save, AlertTriangle, CheckCircle } from 'lucide-svelte';
    import type { Game } from '$lib/game';
    import type { Config } from '$lib/config';

    export let game: Game;
    export let config: Config;

    let importText = '';
    let message = '';
    let messageType: 'success' | 'warning' | 'error' = 'success';
    let showMessage = false;

    function showMessageFor(msg: string, type: 'success' | 'warning' | 'error', duration = 3000) {
        message = msg;
        messageType = type;
        showMessage = true;
        setTimeout(() => {
            showMessage = false;
        }, duration);
    }

    function exportEncrypted() {
        try {
            const saveData = game.exportSave(true);
            navigator.clipboard.writeText(saveData);
            downloadFile(saveData, 'tomeclicker-save-encrypted.json');
            showMessageFor('Encrypted save exported and copied to clipboard!', 'success');
        } catch (error) {
            showMessageFor('Failed to export save', 'error');
        }
    }

    function exportUnencrypted() {
        try {
            const saveData = game.exportSave(false);
            navigator.clipboard.writeText(saveData);
            downloadFile(saveData, 'tomeclicker-save-unencrypted.json');
            showMessageFor('Unencrypted save exported (not leaderboard eligible)', 'warning');
        } catch (error) {
            showMessageFor('Failed to export save', 'error');
        }
    }

    function downloadFile(content: string, filename: string) {
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function importSave() {
        if (!importText.trim()) {
            showMessageFor('Please paste save data first', 'error');
            return;
        }

        const result = game.importSave(importText.trim());

        if (result.success) {
            showMessageFor(result.warning || 'Save imported successfully!', result.warning ? 'warning' : 'success');
            importText = '';
            game.autoSave(); // Auto-save after successful import
        } else {
            showMessageFor(result.error || 'Failed to import save', 'error');
        }
    }

    function saveToFile() {
        try {
            game.saveToCookies();
            showMessageFor('Game saved to browser storage!', 'success');
        } catch (error) {
            showMessageFor('Failed to save game', 'error');
        }
    }

    function loadFromFile() {
        try {
            const loaded = game.loadFromCookies();
            if (loaded) {
                showMessageFor('Game loaded from browser storage!', 'success');
            } else {
                showMessageFor('No save found in browser storage', 'warning');
            }
        } catch (error) {
            showMessageFor('Failed to load game', 'error');
        }
    }

    // Auto-save every 30 seconds
    setInterval(() => {
        game.autoSave();
    }, 30000);

    /** temporary hack for svelte errors since it's not used yet */
    config = config;
</script>

<div class="saves">
    <h1>saves</h1>

    {#if showMessage}
        <div class="message {messageType}">
            {#if messageType === 'success'}
                <CheckCircle size={20}/>
            {:else if messageType === 'warning'}
                <AlertTriangle size={20}/>
            {:else}
                <AlertTriangle size={20}/>
            {/if}
            {message}
        </div>
    {/if}

    <div class="saves-layout">
        <div class="save-section">
            <h2>Browser Storage</h2>
            <p>Your game automatically saves to browser storage every 30 seconds.</p>
            <div class="button-group">
                <button class="save-btn" on:click={saveToFile}>
                    <Save size={20}/> Save Now
                </button>
                <button class="load-btn" on:click={loadFromFile}>
                    <Upload size={20}/> Load Game
                </button>
            </div>
        </div>

        <div class="save-section">
            <h2>Export Save File</h2>
            <p>Download your save file to backup or transfer between devices.</p>
            <div class="button-group">
                <button class="export-btn encrypted" on:click={exportEncrypted}>
                    <Download size={20}/> Export (Encrypted)
                </button>
                <button class="export-btn unencrypted" on:click={exportUnencrypted}>
                    <Download size={20}/> Export (Unencrypted)
                </button>
            </div>
            <p class="note">
                <strong>Encrypted:</strong> Eligible for leaderboards, tamper-resistant<br>
                <strong>Unencrypted:</strong> Editable but not leaderboard eligible
            </p>
        </div>

        <div class="save-section">
            <h2>Import Save File</h2>
            <p>Paste save data below to import from a file or another device.</p>
            <textarea
                bind:value={importText}
                placeholder="Paste your save data here..."
                rows="8"
            ></textarea>
            <button class="import-btn" on:click={importSave} disabled={!importText.trim()}>
                <Upload size={20}/> Import Save
            </button>
        </div>

        <div class="save-section">
            <h2>Save Status</h2>
            <div class="status-info">
                <p><strong>Save Integrity:</strong> {game.saveIntegrity}</p>
                <p><strong>Last Validation:</strong> {new Date(game.lastValidation).toLocaleString()}</p>
                <p><strong>Current EXP:</strong> {game.exp.toLocaleString()}</p>
                <p><strong>Lifetime EXP:</strong> {game.lifetimeExp.toLocaleString()}</p>
            </div>
        </div>
    </div>
</div>

<style>
    .saves {
        color: var(--text);
        background-color: var(--bg);
        font-size: 1em;
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        padding: 1rem;
        text-align: center;
        height: 100%;
        overflow-y: auto;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1);
    }

    h1 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    h2 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 0.5rem;
        color: var(--blue);
    }

    .message {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .message.success {
        background-color: var(--green);
        color: var(--bg);
    }

    .message.warning {
        background-color: var(--yellow);
        color: var(--bg);
    }

    .message.error {
        background-color: var(--red);
        color: var(--bg);
    }

    .saves-layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .save-section {
        background-color: var(--alt-bg);
        border: 2px solid var(--text);
        border-radius: 10px;
        padding: 1.5rem;
        text-align: left;
    }

    .button-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        padding: 0.8rem 1rem;
        border: 2px solid;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-height: 48px;
    }

    .save-btn, .load-btn {
        background-color: var(--blue);
        color: var(--bg);
        border-color: var(--blue);
    }

    .save-btn:hover, .load-btn:hover {
        background-color: var(--text);
        border-color: var(--text);
    }

    .export-btn.encrypted {
        background-color: var(--green);
        color: var(--bg);
        border-color: var(--green);
    }

    .export-btn.unencrypted {
        background-color: var(--yellow);
        color: var(--bg);
        border-color: var(--yellow);
    }

    .export-btn:hover {
        background-color: var(--text);
        border-color: var(--text);
        color: var(--bg);
    }

    .import-btn {
        background-color: var(--text);
        color: var(--bg);
        border-color: var(--text);
        width: 100%;
        margin-top: 1rem;
    }

    .import-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .import-btn:not(:disabled):hover {
        background-color: var(--green);
        border-color: var(--green);
    }

    textarea {
        width: 100%;
        min-height: 120px;
        padding: 0.8rem;
        font-family: JetBrains Mono, monospace;
        font-size: 0.9em;
        background-color: var(--bg);
        color: var(--text);
        border: 2px solid var(--text);
        border-radius: 8px;
        resize: vertical;
    }

    .note {
        font-size: 0.9em;
        opacity: 0.8;
        margin-top: 1rem;
    }

    .status-info {
        font-size: 0.9em;
        line-height: 1.6;
    }

    .status-info p {
        margin: 0.5rem 0;
    }
</style>