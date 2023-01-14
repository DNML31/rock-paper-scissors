require 'csv'
require 'google/apis/civicinfo_v2'
require 'erb'
require 'date'
require 'time'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5, '0')[0..4]
end

def clean_phone_number(homephone)
  phone = homephone.to_s.gsub(/[()-.\s+]/,'')

  if phone.length < 10
    'N/A'
  elsif phone.length == 11
    if phone[0] == '1'
      phone[1..-1]
    else
      'N/A'
    end
  else
    phone.rjust(10)[0..9]
  end
end

def time_target

  contents = CSV.open('event_attendees.csv',
    headers: true,
    header_converters: :symbol
  )
  
  hours = []
  contents.each do |row|
    DateTime.new
    hours.push(DateTime.strptime(row[:regdate], "%m/%d/%Y %k:%M").hour)
  end

  count = {}
  count = hours.tally
  count.values.max    # [1, 3, 2, 2, 1,...1] => [3]
  busiest_hour = count.key(count.values.max)
  puts "The most registered hour is #{busiest_hour}."

end

def day_target 

  days = []
  contents = CSV.open('event_attendees.csv',
    headers: true,
    header_converters: :symbol
  )

  day_num = {
    0 => 'Sunday', 1 => 'Monday', 2 => 'Tuesday', 3 => 'Wednesday',
    4 => 'Thursday', 5 => 'Friday', 6 => 'Saturday'
  }

  contents.each do |row|
    Date.new
    days.push(Date.strptime(row[:regdate], "%m/%d/%Y %k:%M").wday)
  end

  day_count = {}
  day_count = days.tally
  day_count.values.max

  busiest_day = day_count.key(day_count.values.max)
  puts "The most registered day is #{day_num[busiest_day]}."

end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    legislators = civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    ).officials
  rescue
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def save_thank_you_letter(id, form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"

  File.open(filename, 'w') do |file|
    file.puts form_letter
  end
end

puts "Event Manager Initialized!\n\n"

contents = CSV.open(
  'event_attendees.csv',
  headers: true,
  header_converters: :symbol
)

template_letter = File.read('form_letter.erb')
erb_template = ERB.new template_letter

contents.each do |row|
  # id = row[0]

  # name = row[:first_name]

  # zipcode = clean_zipcode(row[:zipcode])
  # p zipcode

  # legislators = legislators_by_zipcode(zipcode)

  # form_letter = erb_template.result(binding)

  # save_thank_you_letter(id, form_letter)

end

time_target
day_target