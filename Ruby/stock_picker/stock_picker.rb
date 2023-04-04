def stock_picker(array)

  choices = {}
  days_best = {}
  earnings = []
  earned = "".to_i
  buy = "".to_i
  sell = "".to_i
  final = []

  array.each_with_index do |element, i|

    element = "Day #{i} - #{element}"
    choices[element] = array.slice(i..array.length)
  
    choices.each do |key, value|

      earnings = (value.max - value[0])
      days_best[key] = earnings

    end
    
  end

  days_best = days_best.each_value do |value|

    if value > earned
      earned = value.to_i
    end

    buy = days_best.rassoc(earned)

  end

  day_1 = buy[0]
  # for first value of final []
  final.push(day_1.slice(4).to_i)
  # for second value of final []
  final.push(array.index(day_1.slice(-1).to_i + earned.to_i))

  p final
end

stock_picker([17,3,6,9,15,8,6,1,10])
