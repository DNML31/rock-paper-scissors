# def stock_picker(array)

#   array_product = []
  
#   array.each do |x|
#     price = []
#     price.push(x)
#     array_product.push(price.product(array))
#   end

#   most_value = {}

#   array_product.each do |set|
#     set_difference = {}
#     set_array = []
    
#     set.each do |x|
#       set_difference[set[0][0]] = set_array.push(x[1] - x[0])
#     end

#     set_difference.select do |key, value|
#       most_value[key] = value.max
#       # doesn't show largest value for the first 6 in the original array because
#       # it is overwritten by the second 6.
#     end
#     p set_difference
#   end

#   print "\n"
#   p most_value
# end

# set_difference returns these key:values

# {17=>[0, -14, -11, -8, -2, -9, -11, -16, -7]}
# {3=>[14, 0, 3, 6, 12, 5, 3, -2, 7]}
# {6=>[11, -3, 0, 3, 9, 2, 0, -5, 4]}
# {9=>[8, -6, -3, 0, 6, -1, -3, -8, 1]}
# {15=>[2, -12, -9, -6, 0, -7, -9, -14, -5]}
# {8=>[9, -5, -2, 1, 7, 0, -2, -7, 2]}
# {6=>[11, -3, 0, 3, 9, 2, 0, -5, 4]}  *** there are two 0s here
# {1=>[16, 2, 5, 8, 14, 7, 5, 0, 9]}
# {10=>[7, -7, -4, -1, 5, -2, -4, -9, 0]}

# the 0 element in each value array marks the day that that key can be bought.
# numbers before 0 aren't possible.
# each element AFTER the 0s marks how much can be made

# finding the largest number in each array AFTER the 0s means that is the most
# that can be potentially made. key:value should look like {17=>-2}.
# compare each key:value/array reduction to find largest amount.



  
# should return [1,4] 
# 15 - 3 = 12 profit

# Returns a pair of days representing the best day to buy and the best day to
# sell. Days start at 0.


# first, last, length

def stock_picker(array)

  choices = {}
  array_choices = []
  days_best = nil
  earnings = nil

  array.each_with_index do |element, i|

    element = "Day #{i} - #{element}"
    choices[element] = array.slice(i..array.length)
  end
  
  choices.each do |key, value|
    earnings = (value.max - value[0])
    days_best = "#{key}'s best day earns #{earnings}."
    p days_best
  end
 

end


stock_picker([17,3,6,9,15,8,6,1,10])