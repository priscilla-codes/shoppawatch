Rails.application.routes.draw do
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
          delete "destroy" 
        end
      end
      post 'create_payment_intent', to: 'payments#create_payment_intent'
    end
  end
end
