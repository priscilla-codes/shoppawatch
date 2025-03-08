class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  include ActionController::Cookies

  private

    def set_csrf_cookie
      cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end
