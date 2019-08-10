require 'json'
require 'httparty'
require 'date'
require 'pp'

p '================EXECUTING============================'
#######################################
# The code is soo ugly and inefficient RN :(:(!!!!!!!!!!!!!
# You have to fix it.
######################################
url = 'https://k-blog0130.herokuapp.com/api/v1/posts_list'

response = HTTParty.get(url, format: :plain)
DATA = JSON.parse(response, symbolize_names: true)

posts_array = DATA[:data][:posts]

def find_category(c_id)
  categories_array = DATA[:data][:categories]

  categories_array.each do |category|
    return category[:name] if c_id == category[:id]
  end
end

def find_tags(index)
  post_tags_array = DATA[:data][:post_tags]
  post_tags = post_tags_array[index]
  tags = []

  post_tags.each do |tag|
    tags << tag[:name]
  end
  tags
end

def inline_tags(tags, f)
  tags.each do |tag|
    f.puts "  - #{tag}"
  end
end

def parse_date(date_string)
  DateTime.parse(date_string).strftime("%d/%m/%Y")
end

def create_header(post, f, index)
  f.puts '---'
  f.puts "title: \"#{post[:title]}\""
  f.puts "description: \"#{post[:introduction]}\""
  f.puts 'cover: "assets/"'
  f.puts "category: \"#{find_category(post[:category_id])}\""
  f.puts "tags: "
  inline_tags(find_tags(index), f)
  f.puts 'readTime: '
  f.puts "date: \"#{parse_date(post[:created_at])}\""
  f.puts '---'
end

posts_array.each_with_index do |post, index|
  directory_name = post[:title].split(' ').join('-')
  Dir.mkdir(directory_name) unless File.exist?(directory_name)
  Dir.chdir(directory_name)
  f = File.open('index.md', 'w')
  create_header(post, f, index)
  f.puts post[:content].to_s
  Dir.chdir('..')
end
