class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?
    
    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def required_logged_in
        unless logged_in?
          render json: { base: ["Need to log in!"] }, status: 401
        end
    end
    
    def require_logged_out
      render json: ["Need to log out!"], status: 403 if logged_in?
    end

    def login!(user)
      @current_user = user
      session[:session_token] = user.reset_session_token!
    end
    
    def logged_in?
      !!current_user
    end
    
    def logout!
      current_user.reset_session_token! if logged_in?
      session[:session_token] = nil
      @current_user = nil
    end
end
