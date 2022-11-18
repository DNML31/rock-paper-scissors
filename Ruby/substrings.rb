dictionary = ["below","down","go","going","horn","how","howdy","it","i","low",
  "own","part","partner","sit"]

def substrings(string, dictionary)

  result = Hash.new(0)
  
  dictionary.each do |element|

    count = string.downcase.scan(element)
    result[element] = count.length
    
  end

  p result.select {|key, value| value > 0}

end

substrings("Howdy partner, sit down! How's it going?", dictionary)
substrings("below", dictionary)
