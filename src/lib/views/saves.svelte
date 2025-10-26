<script lang="ts">
    import { Download, Upload, Save, AlertTriangle, CheckCircle } from 'lucide-svelte';
    import type { Game } from '$lib/game';
    import type { Config } from '$lib/config';

    interface Props {
        game: Game;
        config: Config;
    }

    let { game = $bindable(), config = $bindable() }: Props = $props();

    let importText = $state('');
    let message = $state('');
    let messageType = $state<'success' | 'warning' | 'error'>('success');
    let showMessage = $state(false);
    let showResetConfirm = $state(false);

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
            game = game; // Force reactivity to update UI
            game.autoSave(); // Auto-save after successful import
        } else {
            showMessageFor(result.error || 'Failed to import save', 'error');
        }
    }

    function saveToFile() {
        try {
            game.autoSave(); // This saves to both localStorage and cookies
            showMessageFor('Game saved to browser storage!', 'success');
        } catch (error) {
            showMessageFor('Failed to save game', 'error');
        }
    }

    function loadFromFile() {
        try {
            // Try localStorage first, then cookies
            const loadedFromLocalStorage = game.loadFromLocalStorage();
            const loadedFromCookies = !loadedFromLocalStorage ? game.loadFromCookies() : false;

            if (loadedFromLocalStorage || loadedFromCookies) {
                const source = loadedFromLocalStorage ? 'localStorage' : 'cookies';
                showMessageFor(`Game loaded from ${source}!`, 'success');
                game = game; // Force reactivity
            } else {
                showMessageFor('No save found in browser storage', 'warning');
            }
        } catch (error) {
            showMessageFor('Failed to load game', 'error');
        }
    }

    function confirmHardReset() {
        showResetConfirm = true;
    }

    function cancelReset() {
        showResetConfirm = false;
    }

    function performHardReset() {
        try {
            // Clear localStorage
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem('tomeclicker_save');
            }

            // Clear cookies
            if (typeof document !== 'undefined') {
                document.cookie = 'tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            }

            // Use the Game class's hard reset method
            game.hardReset(false); // Don't preserve name

            // Force Svelte reactivity
            game = game;

            showResetConfirm = false;
            showMessageFor('Game has been completely reset!', 'success');
        } catch (error) {
            showMessageFor('Failed to reset game', 'error');
        }
    }

    // Auto-save every 30 seconds
    setInterval(() => {
        game.autoSave();
    }, 30000);
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
                <button class="save-btn" onclick={saveToFile}>
                    <Save size={20}/> Save Now
                </button>
                <button class="load-btn" onclick={loadFromFile}>
                    <Upload size={20}/> Load Game
                </button>
            </div>
        </div>

        <div class="save-section">
            <h2>Export Save File</h2>
            <p>Download your save file to backup or transfer between devices.</p>
            <div class="button-group">
                <button class="export-btn encrypted" onclick={exportEncrypted}>
                    <Download size={20}/> Export (Encrypted)
                </button>
                <button class="export-btn unencrypted" onclick={exportUnencrypted}>
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
            <button class="import-btn" onclick={importSave} disabled={!importText.trim()}>
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

        <div class="save-section danger-section">
            <h2>Danger Zone</h2>
            <p>Permanently delete all progress and start over from the beginning.</p>
            <button class="danger-btn" onclick={confirmHardReset}>
                <AlertTriangle size={20}/> Hard Reset
            </button>
        </div>
    </div>

    {#if showResetConfirm}
        <div class="modal-overlay">
            <div class="modal">
                <h3>Confirm Hard Reset</h3>
                <p>This will permanently delete ALL your progress, including:</p>
                <ul>
                    <li>All EXP and levels</li>
                    <li>All upgrades</li>
                    <li>All save data</li>
                    <li>Browser storage</li>
                </ul>
                <p><strong>This action cannot be undone!</strong></p>
                <div class="modal-buttons">
                    <button class="cancel-btn" onclick={cancelReset}>Cancel</button>
                    <button class="confirm-reset-btn" onclick={performHardReset}>
                        <AlertTriangle size={20}/> Confirm Reset
                    </button>
                </div>
            </div>
        </div>
    {/if}
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
        box-sizing: border-box;
        overflow-wrap: break-word;
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
        max-width: 100%;
        padding: 0.8rem;
        font-family: JetBrains Mono, monospace;
        font-size: 0.9em;
        background-color: var(--bg);
        color: var(--text);
        border: 2px solid var(--text);
        border-radius: 8px;
        resize: vertical;
        box-sizing: border-box;
        word-wrap: break-word;
        overflow-wrap: break-word;
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

    .danger-section {
        border-color: var(--red) !important;
    }

    .danger-section h2 {
        color: var(--red);
    }

    .danger-btn {
        background-color: var(--red);
        color: var(--bg);
        border-color: var(--red);
        width: 100%;
        margin-top: 1rem;
    }

    .danger-btn:hover {
        background-color: var(--text);
        border-color: var(--text);
        color: var(--bg);
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        background-color: var(--alt-bg);
        border: 2px solid var(--red);
        border-radius: 10px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        text-align: left;
        color: var(--text);
    }

    .modal h3 {
        color: var(--red);
        margin-bottom: 1rem;
        font-family: Lato, sans-serif;
        font-weight: 300;
    }

    .modal ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
    }

    .modal-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }

    .cancel-btn {
        background-color: var(--text);
        color: var(--bg);
        border-color: var(--text);
        flex: 1;
    }

    .confirm-reset-btn {
        background-color: var(--red);
        color: var(--bg);
        border-color: var(--red);
        flex: 1;
    }

    .cancel-btn:hover {
        background-color: var(--green);
        border-color: var(--green);
    }

    .confirm-reset-btn:hover {
        background-color: var(--text);
        border-color: var(--text);
    }
</style>