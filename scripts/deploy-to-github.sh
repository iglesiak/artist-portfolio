#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-artist-portfolio}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required. Install with: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub first:"
  gh auth login -h github.com -p https -w
fi

echo "Creating repository: $REPO_NAME"
gh repo create "$REPO_NAME" \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Artist portfolio website built with React"

echo "Enabling GitHub Pages..."
gh api "repos/{owner}/{repo}/pages" \
  -X POST \
  -f build_type=workflow \
  -f source[branch]=main \
  -f source[path]=/ 2>/dev/null || true

echo ""
echo "Done! Repository: $(gh repo view --json url -q .url)"
echo "GitHub Pages will deploy automatically after the workflow runs."
echo "Site URL: https://$(gh api user -q .login).github.io/$REPO_NAME/"
