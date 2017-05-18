Rails.application.routes.draw do
  namespace :api do
    get 'notes/index'
  end

  namespace :api do
    get 'notes/show'
  end

  namespace :api do
    get 'notes/create'
  end

  namespace :api do
    get 'notes/update'
  end

  namespace :api do
    get 'notes/destroy'
  end

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
  end
end
