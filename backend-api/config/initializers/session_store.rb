if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_auth_shoppawatch", domain: "shoppawatch.com"
else 
  Rails.application.config.session_store :cookie_store, key: "_auth_shoppawatch"
end