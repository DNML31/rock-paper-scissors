class Computer
  @@users = {}

  def initialize(username, password)
    @username = username
    @password = password
    @files = {}
    @@users [username] = password
  end

  def create(filename)
    time = Time.now
    @files["#{filename}"] = time
    puts "New file '#{filename}' created at #{time} by #{@username}."
  end

  def Computer.get_users
    return @@users
  end

  def Computer.get_names
    return @files
  end

end

my_computer = Computer.new("dnml","where's my jump?")
bill = Computer.new("Bill", "password")

puts Computer.get_users

my_computer.create("my favorite foods")


