Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:new, :create, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
