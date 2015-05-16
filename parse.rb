file = File.new(ARGV[0], "r")
json = File.open("data.json", "w")
contents = file.read.split "\n"

lineRegex = /^Sit/
dayRegex = /^Day ([0-9]+)/

toFile = "["
firstDay = true
firstInstruct = true
contents.each do |line|
  if line =~ lineRegex
    line = line.tr("\\", "").tr("\"", "\'")
    if !firstInstruct
      toFile = toFile + ","
    end
    toFile = toFile + "\"" + line + "\""
    firstInstruct = false
    puts firstInstruct
  elsif line=~ dayRegex
    firstInstruct = true
    if !firstDay
      toFile = toFile +']},'
    end
    toFile = toFile + "{day: #{$1}, instructions: [" 
    firstDay = false
  end
end
toFile = toFile + "]}]"
puts toFile
json.puts toFile
json.close