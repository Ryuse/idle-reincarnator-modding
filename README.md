# 🛠️ Idle Reincarnator Modding Guide

Welcome to the official **Modding Guide** for *Idle Reincarnator*. This guide will walk you through the steps to create your own mod and add custom content to the game.

---

## 📦 How to Create a Mod

1. Launch the game and go to the **Mods** section.
2. Click **Create Mod**.
3. Navigate to your mod folder: %APPDATA%/Roaming/my_mods//[Your Mod Name]
4. Start editing the files in this folder to add your content.

---

## ✨ What Can You Add?

You can add the following content types:
- Jobs
- Trainings
- Skills
- Explorations
- Spells
- Items
- Temporal Skills
- Technologies
- Civilization Levels

---

## 📁 Folder Structure

Each mod should follow this structure:
[Your Mod Folder]/

│

├── mod.json # Mod metadata

├── preview.png # Optional preview image for mod UI

│

├── <action_folder>/ # e.g., jobs/, trainings/, spells/, etc.

│ ├── data.json

│ └── <action_type>/ # Custom content by type

│     └── content.json

│     └── images/

│         └── <content_id>.png

│

├── <another_action_folder>/

│ ├── ...

> 📌 **Tip:** See `example_mod/` for working examples.

---

## ⚙️ Effects Reference

### 🧠 Overall Effects
These apply broadly to gameplay:
- `level_up_cap`
- `before_max_level_exp_multiplier`
- `exp_required_percentage_reduction`
- `renown_multiplier`
- `daily_gold_gain`
- `lifespan_multiplier`
- `lifespan_day_increase`
- `lifespan_year_increase`
- `gamespeed_multiplier`
- `happiness_multiplier`
- `boss_danger_reduction_per_defeat`
- `temporal_essence_rebirth_needed_reduction`
- `temporal_essence_rebirth_gain_multiplier`
- `exploration_speed_multiplier`
- `fundamentals_exploration_speed_multiplier`
- `defense_exploration_speed_multiplier`
- `combat_exploration_speed_multiplier`
- `scavenging_exploration_speed_multiplier`
- `fishing_exploration_speed_multiplier`
- `constructing_exploration_speed_multiplier`
- `excavating_exploration_speed_multiplier`
- `exploring_exploration_speed_multiplier`
- `social_exploration_speed_multiplier`
- `arcane_exploration_speed_multiplier`
- `danger_multiplier`
- `job_action_increase`
- `training_action_increase`
- `lifespan_increase_per_day`
- `lifespan_decrease_per_day`
- `danger_decrease`
- `spell_slots`

### 🎯 Specific Effects
Apply to individual actions or systems:
- `exp_gain`
- `exp_multiplier`
- `level_increase`

### 💼 Job Effects
- `income_multiplier`
- `passive_income_multiplier`

### 🧬 Lifestyle Effects
- `expenses_multiplier`

---

## 📚 Need Examples?

Check out the `game_assets/` folder in your game installation for real content examples used by the base game.

---

Happy modding! 🚀
