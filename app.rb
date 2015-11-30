require 'bundler'

Bundler.require

get '/' do
  p 'Hello World!'
end

get '/index'do
  p 'This is the index page!'
  erb :index
end
