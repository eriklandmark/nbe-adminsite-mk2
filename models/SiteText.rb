class SiteText
  include DataMapper::Resource

  property :id, Serial
  property :name_id, String, :required => true
  property :text, Text, :required => true, :lazy => false
end