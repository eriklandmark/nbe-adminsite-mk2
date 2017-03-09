class App < Sinatra::Base
  get '/' do
    redirect '/login'
  end

  get '/login' do
    erb :index
  end
end