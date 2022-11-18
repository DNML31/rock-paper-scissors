def caesar_cipher(string, num)

  cipher = {
    "a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5, "f" => 6,
    "g" => 7, "h" => 8, "i" => 9, "j" => 10, "k" => 11, "l" => 12,
    "m" => 13, "n" => 14, "o" => 15, "p" => 16, "q" => 17, 
    "r" => 18, "s" => 19, "t" => 20, "u" => 21, "v" => 22,
    "w" => 23, "x" => 24, "y" => 25, "z" => 26
  }

  void = ["!", ".", ",", " ", "?"]

  cap_index = []
  chars_array = []

  # breaks apart the string to individual characters and gets cipher value
  string.chars do |char|
    if void.include?(char)
      chars_array.push(char)
    elsif cipher.include?(char)
      chars_array.push(cipher[char])
    elsif cipher.include?(char.downcase)
      cap_index.push(string.index(char))
      chars_array.push(cipher[char.downcase])
    elsif
      chars_array.push(cipher[char])
    end
  end

  new_numbers = []
  
  # change cipher value with num variable
  chars_array.map do |x|
    if void.include?(x)
      new_numbers.push(x)
    else
      x = x.to_i + num
      if x > 26
        # x = (num - 26)
        # x
        new_numbers.push(x - 26)
      else
        new_numbers.push(x)
      end  
    end
  end
  
  final = []
  
  # convert new cipher value (number) to letters and put into new array
  new_numbers.map do |y|
    if void.include?(y)
      final.push(y)
    else
      final.push(cipher.key(y))
    end
  end
    
  cap_index.each do |cap|
    cap = cap.to_i
    final[cap] = final[cap].upcase
  end
  
  final_string = final.join("")

  p final
  p final_string

end


# caesar_cipher("xyz XYZ", 5)

caesar_cipher("What a string!", -5)



