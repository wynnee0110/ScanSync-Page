# ScanSync Landing Page & Download Portal

A clean, minimalist white download page for **ScanSync** — the offline-first attendance tracking and QR scanner app.

## Features

- **Clean Minimalist Architecture**: Focused solely on clear app delivery without clutter.
- **Platform Options**:
  - **Android**: Direct APK download (`v1.2`, ~145 MB).
  - **iOS**: Marked as "Coming Soon" with in-development notice.
- **Core Highlights**: Offline SQLite storage, smart student ID year parsing, duplicate prevention, and Supabase cloud sync.
- **Android Install Guide**: 3 clear steps for sideloading and granting camera permissions.
- **Brand Identity**: Features the official logo (`assets/Logo.png`) across navbar, favicon, and footer.

## Directory Structure

```text
scansync-page/
├── index.html        # Main landing page
├── style.css         # Minimalist stylesheet
├── app.js            # Mobile nav & FAQ accordion
├── assets/
│   ├── Logo.png      # Official brand logo
│   └── images/       # Supporting image assets
├── downloads/
│   └── scansync.apk  # Android APK package
└── README.md
```

## Running Locally

Preview locally with Python:

```bash
cd /home/wayne/Documents/GITREPO/scansync-page
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) in your browser.
# ScanSync-Page
