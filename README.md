# ❤️ Memory Gallery

A beautiful mobile-first memory website that automatically loads photos and videos directly from GitHub Releases.

No database. No folders. No JSON files.
Just upload your memories to GitHub Releases and they will appear automatically.

---

## ✨ Features

* 📱 Mobile-only full screen design
* ❤️ Romantic memory theme
* 🌌 Animated star background
* 💖 Floating heart effects
* 🎨 Different beautiful fonts for each memory
* 📸 Auto-detect images
* 🎥 Auto-detect videos
* ▶️ Auto-play videos when visible
* ⏸️ Pause videos when scrolling away
* 🔄 Automatically loads new GitHub Release assets
* 🚫 Hides all original file names
* ✨ Generates random beautiful captions
* 🚀 Works with GitHub Pages
* ⚡ No backend required

---

# 📂 Project Structure

```
memory-gallery/
│
├── index.html      # Main website
├── style.css       # Design and animations
├── script.js       # GitHub API auto loader
└── README.md
```

---

# 🚀 Installation

## 1. Create a GitHub Repository

Example:

```
memory-gallery
```

Upload these files:

```
index.html
style.css
script.js
README.md
```

---

## 2. Configure GitHub Repository

Open:

```
script.js
```

Change:

```javascript
const USERNAME = "YOUR_GITHUB_USERNAME";
const REPOSITORY = "YOUR_REPOSITORY_NAME";
```

Example:

```javascript
const USERNAME = "john";
const REPOSITORY = "memory-gallery";
```

Save and push the changes.

---

# 🌐 Enable GitHub Pages

Go to:

```
Repository
   ↓
Settings
   ↓
Pages
   ↓
Build and Deployment
   ↓
Source: Deploy from branch
```

Select:

```
Branch: main
Folder: /root
```

Click:

```
Save
```

After a few minutes your website will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY
```

---

# 📸 Adding New Memories

Go to:

```
GitHub Repository
    ↓
Releases
    ↓
Create a new release
    ↓
Upload files into Assets
```

Supported image formats:

* JPG
* JPEG
* PNG
* WEBP
* GIF
* AVIF

Supported video formats:

* MP4
* WEBM
* MOV
* M4V

Example Release:

```
Summer Trip 2026

Assets:
- beach.jpg
- sunset.png
- party.mp4
- friends.mov
```

After refreshing the website:

```
❤️ Beautiful random quote

[Full-screen photo]


✨ Another memory

[Auto-playing video]
```

File names are never shown to visitors.

---

# 🎬 Video Recommendations

For best performance:

## Resolution

Recommended:

* 720p
* 1080p

Avoid:

* 4K videos

---

## Format

Best choice:

```
MP4 (H.264)
```

---

## Length

Recommended:

* 5 seconds to 2 minutes

Long videos may load slowly on mobile networks.

---

# ⚡ How Automatic Updates Work

```
Upload Media
       ↓
GitHub Release Assets
       ↓
GitHub API
       ↓
Memory Gallery
       ↓
Beautiful Full Screen Feed
```

No code changes are needed after the initial setup.

---

# 🔒 Privacy

This project uses GitHub Releases API.

For your friends to access the memories:

```
Repository must be Public
```

If you want private memories, you can modify the project to use a GitHub access token and a private API connection.

---

# 📈 GitHub API Limits

For public repositories:

```
60 requests per hour per visitor
```

The website only requests release data, so normal personal usage usually stays within this limit.

---

# 🎨 Future Ideas

* 🎵 Background music
* 💬 Friend comments
* ❤️ Like button
* 📅 Memory timeline
* 🌎 Location memories
* 🔐 Password protection
* 📥 Download button
* 🌙 More themes
* 🎆 More animations

---

# ❤️ Made for Memories

> "Photos capture moments. Memories capture feelings."

Share your best moments with your friends forever.

⭐ If you love this project, add more memories and keep your story growing.
