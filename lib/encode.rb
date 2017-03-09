def encode_password(pass)
  return BCrypt::Password.create(pass.to_s, cost: 10)
end

def check(oldPass, pass)
  return BCrypt::Password.new(oldPass) == pass
end