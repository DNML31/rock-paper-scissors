class Account
  attr_reader :name
  attr_reader :balance

  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end

  public

  def deposit(pin_number, amount)
    if pin_number == pin
      puts "Deposited $#{amount}. New balance: $#{@balance += amount}."
    else
      puts pin_error
    end
  end

  def withdraw(pin_number, amount)
    if (amount > @balance && pin_number == pin)
      puts "You don't have enough cheddar."
    elsif pin_number == pin
      puts "Withdrew $#{amount}. New balance: $#{@balance -= amount}."
    else
      puts pin_error
    end
  end

  def display_balance(pin_number)
    if pin_number == pin
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end

  private

  def pin
    @pin = 1234
  end

  def pin_error
    return "Access denied: incorrect PIN."
  end
end

class CheckingAccount < Account ; end

class SavingsAccount < Account

    def display_balance(pin_number)
    if pin_number == pin
      puts "Savings balance: $#{@balance}."
    else
      puts pin_error
    end
  end

end

checking_account = Account.new("cheese",1_000)

checking_account.deposit(1234, 200)
checking_account.withdraw(1234, 800)


savings = SavingsAccount.new("my savings", 9_000)

savings.display_balance(1234)
savings.deposit(1234, 90)
