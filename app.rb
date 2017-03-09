class App < Sinatra::Base

  ENV['GOOGLE_APPLICATION_CREDENTIALS'] = './credentials/credentials.json'

  enable :sessions
  set :session_secret, 'nbe'

  helpers do
    def has_level_2?
      return authorized? && Users.first(:email => params["requesting_user"]).clearence_level == 2
    end

    def authorized?
      if session[:personal_key] != "" &&
          session[:personal_key] != "no_key" &&
          session[:personal_key] == get_personal_key(user: session[:user]) &&
          session[:level] != nil &&
          session[:theme] != nil
        return true
      else
        return false
      end
    end
  end

  get '/' do
    redirect '/login'
  end

  get '/login' do
    if authorized?
      erb :main_page
    else
      erb :index
    end
  end

  post '/login' do
    if check_database(user: params["email"], pass: params["password"])
      puts "Logged in user: " + params["email"]
      session[:user] = params["email"]
      user = Users.first(:email => params["email"])
      session[:level] = user.clearence_level
      session[:theme] = user.theme
      p_key = SecureRandom.hex(20)
      session[:personal_key] = p_key
      save_personal_key(user: params["email"], key: p_key)

      session[:google_access_key] = get_token

      erb :main_page
    end
  end

  post '/check-user' do
    if check_database(user: params["email"], pass: params["password"])
      "true"
    else
      "false"
    end
  end

  get '/logout' do
    if !authorized?
      erb :denial_or_notfound
    else
      p "Logged out User: " + session[:user]
      delete_personal_key(user: session[:user])
      session[:user] = ""
      session[:level] = ""
      session[:google_access_key] = ""
      session[:theme] = 0
      redirect '/login'
    end
  end
end