# Use bundler to load gems
require 'bundler'

# Load gems from Gemfile
Bundler.require

require_relative 'app'
require_relative 'environment'
require_relative 'models/users'
require_relative 'lib/encode'
require_relative 'lib/functions'

# Start the application
run App