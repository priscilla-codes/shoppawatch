Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :home
      resources :products, only: [:show]
    end
  end
end
