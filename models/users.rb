class Users
  include DataMapper::Resource

  property :id, Serial
  property :email, String, :required => true
  property :password, Text, :required => true, :lazy => false
  property :clearence_level, Integer, :default => 1
  property :theme, Integer, :default => 1
  property :personal_key, String
end