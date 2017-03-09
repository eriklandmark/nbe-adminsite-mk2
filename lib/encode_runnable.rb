require 'bcrypt'
require 'securerandom'
require_relative 'encode'
require_relative '../lib/functions'

if ARGV[0] == "-c"
  ARGV.clear
  puts "Check password!"
  while true do
    print "Write Password: "
    oldPass = gets.chomp
    print "User password: "
    pass = gets.chomp
    puts check(oldPass, pass)
    puts ""
  end
elsif ARGV[0] == "-n"
  ARGV.clear
  puts "Create new password!"
  while true do
    print "Write new Password: "
    pass = gets.chomp
    enc_pass = encode_password(pass)
    puts "Encyrpted Pass: " + enc_pass
    puts "Salt: " + enc_pass.salt
    puts "Length: " + enc_pass.length.to_s
    puts ""
  end
else
  p "Must have argument '-n' or '-c'!"
  while true do end
end