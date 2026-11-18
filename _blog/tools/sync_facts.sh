#!/bin/sh
# Copies the app's help-assistant entries (customer-facing) into _blog/facts/.
# Only Sunit has the app repo; run it from the landing repo root when the app changes.
SRC="${1:-../Parallel_Dialer_Service/backend/callforge_call_service/internal/supportknowledge}"
[ -d "$SRC" ] || { echo "No app repo at $SRC"; exit 1; }
mkdir -p _blog/facts && cp "$SRC"/*.md _blog/facts/ && echo "Copied $(ls "$SRC"/*.md | wc -l | tr -d ' ') files to _blog/facts/"
