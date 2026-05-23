source "https://rubygems.org"

# Use Jekyll 4.3.4 (Stable) to avoid the bug in the very new Jekyll 4.4/sass-embedded
gem "jekyll", "4.3.4"

# Fix for Apple Silicon (M1/M2/M3) if you ever run locally
gem "eventmachine", "1.3.0.dev.1"

# Required for Ruby 3.0+ (used by GitHub Actions)
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end
