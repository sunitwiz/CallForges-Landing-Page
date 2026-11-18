"""Render an HTML file to a PNG with headless Chrome (or Edge / Chromium). No packages to install.

  python3 _blog/tools/render_png.py <in.html> <out.png> <width> <height> [scale]

scale defaults to 2 (sharp on phones and retina screens). Covers use 1: LinkedIn wants exactly 1200x630.
Set CHROME=/path/to/chrome when Chrome is not in a usual place.
"""
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile

PLACES = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
]


def chrome():
    found = os.environ.get('CHROME') or next((p for p in PLACES if os.path.exists(p)), None)
    found = found or next((shutil.which(n) for n in ('google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'msedge') if shutil.which(n)), None)
    if not found:
        raise SystemExit('Chrome not found. Install Google Chrome, or set CHROME=/path/to/chrome.')
    return found


def render(src, out, width, height, scale=2):
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    with tempfile.TemporaryDirectory() as profile:
        done = subprocess.run([chrome(), '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
                               f'--user-data-dir={profile}', f'--force-device-scale-factor={scale}',
                               f'--window-size={width},{height}', '--virtual-time-budget=5000',
                               f'--screenshot={os.path.abspath(out)}', pathlib.Path(src).resolve().as_uri()],
                              capture_output=True, text=True, timeout=120)
    if not os.path.exists(out):
        raise SystemExit(f'Chrome made no image: {done.stderr.strip()[-400:]}')


if __name__ == '__main__':
    if len(sys.argv) not in (5, 6):
        raise SystemExit(__doc__)
    render(sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), float(sys.argv[5]) if len(sys.argv) == 6 else 2)
    print('wrote', sys.argv[2])
