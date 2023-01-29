Rails.application.routes.draw do
  root to: "static_files#index"
  get '/signin', to: "static_files#index"
  get '/signup', to: "static_files#index"
  get '/products/*path', to: "static_files#index"
  get '/cart', to: "static_files#index"
  get '/checkout', to: "static_files#index"
  
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
      resources :products, only: [:index, :show] do
        collection { get :search }
      end
      resources :carts do
        collection do
          get "get_cart"
          post "add_item"
          put "update_item"
          delete "remove_item"
        end
      end
    end
  end
end
