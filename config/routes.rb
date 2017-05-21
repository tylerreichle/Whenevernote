Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :notes, except: [:new, :edit]
    resources :notebooks, except: [:new, :edit]
  end
end
