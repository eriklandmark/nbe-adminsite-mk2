def check_database(user:, pass:)
  u = Users.first(:email => user)
  if u != nil
    return BCrypt::Password.new(u.password) == pass
  else
    p user + " doesn't exist"
  end
  false
end

def get_token
  scopes =  ['https://www.googleapis.com/auth/analytics.readonly']
  authorization = Google::Auth.get_application_default(scopes)
  auth_client = authorization.dup
  auth_client.sub = 'nbemovieproductions@gmail.com'
  token = auth_client.fetch_access_token!["access_token"]
  if token == nil || token == ""
    p "Failed to get key."
  else
    p "Got key from google!"
    token.to_s
  end
end

def save_personal_key(user:, key:)
  u = Users.first(:email => user)
  if u.update(:personal_key => key)
    p "Saved personal key for " + user
    true
  else
    p "Failed to save personal key for " + user
    u.errors.each do |e|
      puts "Problem: " + e.to_s
    end
    false
  end
end

def delete_personal_key(user:)
  u = Users.first(:email => user)
  if u != nil
    if u.update(:personal_key => "no_key")
      p "Deleted personal key for " + user
      return true
    else
      p "Failed to delete personal key for " + user
      u.errors.each do |e|
        puts "Problem: " + e.to_s
      end
      return false
    end
  else
    p "Failed to delete personal_key: User not found!"
  end
end

def get_personal_key(user:)
  u = Users.first(:email => user)
  if u != nil
    u.personal_key
  end
end