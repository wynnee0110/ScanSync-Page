/**
 * ScanSync Landing Page
 * Basic Minimalist Architecture
 */

/**
 * CONFIGURATION
 * 
 * To host the 126 MB APK externally (recommended via GitHub Releases):
 * 1. Upload your 'scansync.apk' to your GitHub Release assets.
 * 2. Paste the direct download link in 'apkDownloadUrl' below:
 *    e.g. 'https://github.com/wynnee0110/icpep-scansync/releases/latest/download/scansync.apk'
 * 
 * If left empty or null, it defaults to the local 'downloads/scansync.apk'.
 */
const CONFIG = {
  apkDownloadUrl: 'https://github.com/wynnee0110/ScanSync-Page/releases/tag/1.0/scansync-v1.0.0.apk' // e.g. 'https://github.com/wynnee0110/icpep-scansync/releases/latest/download/scansync.apk'
};

document.addEventListener('DOMContentLoaded', () => {
  initDownloadLinks();
  initMobileNav();
  initFAQAccordion();
  initDownloadFeedback();
});

/* Configure download URLs based on CONFIG */
function initDownloadLinks() {
  const btnAndroid = document.getElementById('btnDownloadAndroid');
  if (btnAndroid && CONFIG.apkDownloadUrl) {
    btnAndroid.href = CONFIG.apkDownloadUrl;
  }
}

/* Mobile Navigation Drawer */
function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  if (items[0]) {
    items[0].classList.add('active');
  }
}

function showToast(message) {
  const toast = document.getElementById('toastMessage');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* Download Feedback */
function initDownloadFeedback() {
  const btnAndroid = document.getElementById('btnDownloadAndroid');

  if (btnAndroid) {
    btnAndroid.addEventListener('click', () => {
      showToast('Downloading ScanSync APK for Android...');
    });
  }
}
