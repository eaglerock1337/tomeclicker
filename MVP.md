# Pre Phase-1.5 MVP

I want to have a nice MVP to get us going before all the refactors and cleanup we have planned. I basically want 30-minutes of semi-polished active gameplay, plus an extra 1-2 hours of idle gameplay for training stats. Here's what I want changed:

## Color revamp

For fronty-boi, I want to adjust the color schemes with the following tasks:

- Remove all non-Bob Ross colors (e.g. Graphite)
- Please leave Prussian Blue as-is for now
- Make green/yellow/red colors for highlighting stand out in all other themes
- Ensure the progress bar in the navbar has appropriate colors (not just blue as it is now)
- Make the white theme lighter colors overall (very white light mode, medium/dark grey dark mode)
- Make the dark theme darker overall (off-white and gray light mode, very black dark mode)
- Change the button for Dark Mode into a Mode selector which allows "Light", "System", and "Dark
- Default the user to their system color at start
- Save the user's color and display preferences in game state and in the cookies
- Ensure buttons in settings menu don't collide with one another
- When pages first unlock, have them have a green icon to indicate the player hasn't visited it yet (similar to when an upgrade is available)

## Upgrades page layout

Some layout fixes for fronty-boi:

- Major and minor upgrades should take up the same space
- Have upgrade two-across in mobile/narrow mode, and more in full desktop mode (maybe 4? whatever would leverage the space)
- Ensure upgrade info panel in Desktop Mode lines up with the upgrades for continuity
- Note that mobile/narrow mode otherwise looks great thanks to the recent fixes

## Game upgrades

I need gamey-boi to balance the start of the gameplay

- Right now, upgrades are all doing the same thing, I want to move away from that
- Having a variety of upgrades is important to make the grind feel meaningful
- The upgrades should have a satisfying curve to kick off the game
- Start only with click upgrades, but then loop in idle upgrades upon Level 2
- Introduce exp stat upgrades upon Level 3 unlock
- Make transcendent focus instead into some kind of discipline upgrade that boosts all progress and is a satisfying mid-level upgrade
- Unlock Adventure page upon level 3 as well, but display the stats required (and your current stats)
- When reached, Adventures should be unlocked, but we will have a splash page for now that says you've finished the game demo and more is to come

## Training page

We will need a training page too to handle the next step of gameplay:

- On mobile, it should have a training icon with status bar below it, with a dropdown for which training to do
- On desktop, all of this should display on the screen at once (maybe have the options to the right hand side)
- Clicking will bump this up, but barely anything to start
- Multiple upgrades should unlock to help improve this (upgrade progress bar per click, progress bar speed, exp per completion, etc. some that affect individual stats, some that affect all)
- Stat training should curve up to level 100, and training should eventually taper off in favor of actual adventuring (once unlocked)
- Training stats costs EXP and a selected training action won't move its progress bar without paying the exp
- Blocked idle actions should make the icon for that page red
- Upon Level 2, this should only have one action that gives you exp passively
- Upon Level 3, stat upgrade actions will be unlocked
- Once Adventure mode is unlocked, training should still be useful, but only as a failsafe option (no danger of damage/loss of exp), and can be used to train weak stats if needed
- Upgrade idea at higher levels: training mode becomes more effective for how weak your weakest stat is to your strongest one...an upgradeable option to slowly make training useful in context at higher levels

## Adventure plans

- For now, we just have an Adventure page that unlocks upon Level 3
- This will introduce your player stats, which can be viewed on the stats page once unlocked
- Adventure page will show a splash screen when first unlocked that basically tells you that you need to train to upgrade your stats
- Once stats are satisfied, this should unlock the Meditation menu which will give you an unlock
- For now, once Adventure Mode is unlocked, let's have the demo end there and say "you've unlocked everything so far, more to come"

## Meditation page

- This page will be used for meditating on all the different Tomes techniques in the future
- Upon getting Level 3 and satisfying your stats (all at stat level 5+), this will become unlocked
- This should also have an icon for the meditation you're doing that you can click to speed it up, just like with Training
- This will have many idle actions that can be taken
- "Meditate on your Future" will be the first action that when completed unlocks Adventure Mode
- Once that's done, it disappears (like all one-time meditations will, but you can view completed below with a checkbox option)
- First permanent meditation should be "Disassociate" and will show up after "Meditate on the Future" is complete...have some funny-ish flavor text about taking a mental health day...levels into that will increase the amount of idle offline progress you can make it lets you have a few minutes of extra time once first unlocked and at low levels, but over time, this will grow and get upgraded to 12 hours
- Upgrades page should feature meditation upgrades too once that page is unlocked (active, idle progress, etc.)
- Upgrading meditation should be a much slower thing to get over time, since this will persist through the entire game

## Stats page

We also need a stats page that shows all the player info:

- This should be the page for stats nerds to enjoy, and it should show a lot of player info
- Display different things as they become part of the game (e.g. RPG stats upon Level 3, etc.)
- I think it should also have submenus for viewing quality-of-life achievements that are unlocked over time, but don't need those now
- The info in the Settings page should be moved here
- Settings page should have a button for changing your name tho
- Setting your name should set a story event ("You don't remember who you were before, but now you are EagleRock, destined for greater things." or something like that that fits the narrative)

## Practice page fixes

- The clicking on mobile phones (tested specifically on iOS) make the button flash...I want to avoid that and only have the size effect
- Have some helpful text display underneath when one upgrade is available, more than one upgrade is available, or when a major upgrade is available (level-up or discipline)
- Clicking on this page shouldn't cancel out idle actions like I was thinking earlier

## About page

- Display game info (tomeclicker v0.1.0 alpha, copyright notice (EagleRock as my name))
- Display build info (branch and short sha) in some way that would look nice even for non-developers
- Link to github repo for the curious
- More will get added over time, but that's enough fo rnow

## Story page fixes

Layout looks good, but I propose the following fixes:

- It should be higher vertically. Let it go farther down on Desktop mode and fill up the view on mobile
- Keep nav buttons as-is, but change the header to include "Chapter X" as well as chapter titlel
- The chapter gets populated with the story as you unlock
- First chapter will be something like "Your Awakening" and have all the early stuff
- Chapter 2 starts with Adventure Mode so we won't need to worry about that for now
- Remove total chapter display and don't display the total number of chapters, since you'll unlock them over time
- Header should instead be "Your Awakening" in bold with "Chapter 1" below it.

## Start of the story

story-boi will need to help me out here:

- Story should happen at certain major events (more at the start...one at each level, upon unlocking pages or finishing certain important meditations)
- The story should unlock and appear as the events come unlocked
- The first event should be at 50 exp when you unlock more pages and basically lets you know that you're practicing...it should give off the vibe that you're practicing for an adventurous life, but you really don't know what you're doing, but practice will eventually make perfect.
- For setting the player's name, maybe let's check if the player set their name in the settings once they clicked the first Discipline upgrade...if so, just pop up the story that says you discovered your name, otherwise prompt the user first in a popup?
- I want the story to give a few blurbs during the first few levels of content...Chapter 2 starts Adventuring, so Chapter 1 should mostly be about you figuring stuff out and giving clues as to what each action will help you with in the future ("You come across a spot that looks like it would be perfect for meditating.", but in the story narrative voice)

## Wrapping up

This should hopefully give me enough gameplay to make this viable enough for me to want to publish to marks.dev. Let's see if we can get a working MVP without too much lift before we do our major refactors.
