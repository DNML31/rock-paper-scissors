puts "How old are you?"
age = gets.chomp

puts "In 10 years you will be #{age.to_i + 10} years old."
puts "In 20 years you will be #{age.to_i + 20} years old."
puts "In 30 years you will be #{age.to_i + 30} years old."
puts "In 40 years you will be #{age.to_i + 40} years old."

puts "What's your first name?"
first_name = gets.chomp

puts "What's your last name?"
last_name = gets.chomp

10.times do
  puts first_name + " " + last_name
end
