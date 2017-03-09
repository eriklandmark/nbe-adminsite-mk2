# Load all models
Dir["./models/*.rb"].each {|model| require model}

# Used during local development (on your own machine)
configure :development do

  puts "*******************"
  puts "* DEVELOPMENT ENV *"
  puts "*******************"

  # Use SQLite
  DataMapper.setup(:default, "sqlite:///#{Dir.pwd}/database/app-dev.sqlite")

  # Enable pretty printing of Slim-generated HTML (for debugging)
  Slim::Engine.set_options pretty: true, sort_attrs: false

end

# Used during production (on Heroku), when your application is 'live'
configure :production do

  puts "******************"
  puts "* PRODUCTION ENV *"
  puts "******************"

  # Use Postgresql
  DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://rgbcdcilyjwlwk:65ab5f749f3f47c5c98c54c8c006060bf0f5ad4425e05c094de23fc59e128fb1@ec2-54-163-233-89.compute-1.amazonaws.com/d6d4gm7ess63k9")


end

# Used when running tests (rake test:[acceptance|models|routes])
configure :test do

  # Use SQLite db in RAM (for speed & since we do not need to save data between test runs
  DataMapper.setup(:default, 'sqlite::memory:')

end

DataMapper.finalize.auto_upgrade!