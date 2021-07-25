if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_auth_shoppawatch", domain: :all, tld_length: 2, same_site: :lax
else 
  Rails.application.config.session_store :cookie_store, key: "_auth_shoppawatch"
end