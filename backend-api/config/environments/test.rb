Rails.application.configure do
  # Basic test environment settings
  config.cache_classes = false
  config.action_view.cache_template_loading = true
  config.eager_load = false

  # Public file server settings
  config.public_file_server.enabled = true
  config.public_file_server.headers = {
    'Cache-Control' => "public, max-age=#{1.hour.to_i}"
  }

  # Caching behavior
  config.consider_all_requests_local = true
  config.action_controller.perform_caching = false
  config.cache_store = :null_store

  # Error handling
  config.action_dispatch.show_exceptions = false
  config.action_controller.allow_forgery_protection = false

  # Active Storage settings
  config.active_storage.service = :test
  config.active_storage.service_configurations = {
    test: {
      service: "Disk",
      root: Rails.root.join("tmp/storage")
    }
  }

  # URL options for tests
  Rails.application.routes.default_url_options[:host] = 'localhost:3000'

  # Action Mailer settings
  config.action_mailer.perform_caching = false
  config.action_mailer.delivery_method = :test

  # Miscellaneous settings
  config.active_support.deprecation = :stderr
end