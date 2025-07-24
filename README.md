# 🛠️ Idle Reincarnator Modding Guide

Welcome to the official **Modding Guide** for *Idle Reincarnator* - your complete resource for creating custom content for the game.

## 🌐 Live Guide
[View the live version of this guide](https://ryuse.github.io/idle-reincarnator-modding/)

## 📂 Repository Contents

### 📚 Guide Content
- `index.html` - The complete modding guide with dark/light mode toggle
- `dark-mode.css` - Stylesheet for the dark/light theme system
- `dark-mode.js` - JavaScript for theme switching functionality

### 🎮 Game Resources
- `/game_assets` - Official game assets for reference
  - `/jobs` - All job-related assets and configurations
  - `/trainings` - Training system assets
  - `/skills` - Skill definitions and assets
  - ...and other game systems

### 🛠️ Example Mods
- `/example_mod` - Ready-to-use modding examples
  - Basic job implementation
  - Custom skill creation
  - Complete mod structure examples

## 🚀 Getting Started with Modding

1. **Create a Mod Folder**: %APPDATA%/Roaming/my_mods/[Your_Mod_Name]/
2. **Basic Structure**:
```bash
your_mod/
├── mod.json           # Mod metadata
├── preview.png        # Optional preview image
├── jobs/              # Job content
│   ├── data.json
│   └── [category]/
│       ├── content.json
│       └── images/
├── trainings/         # Training content
└── ...                # Other content types
```
3. Start Modding:

    Copy examples from /example_mod

    Reference game assets in /game_assets

    Follow the comprehensive guide at live version

🤝 Contributing

Contributions to improve the modding guide are welcome! Please:

    Fork the repository

    Create your feature branch

    Commit your changes

    Push to the branch

    Open a pull request