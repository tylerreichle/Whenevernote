Rails.application.routes.draw do

  namespace :api do
    get 'tags/create'
  end

  namespace :api do
    get 'tags/index'
  end

  namespace :api do
    get 'tags/destroy'
  end

  get 'tags_controller/create'

  get 'tags_controller/index'

  get 'tags_controller/destroy'

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :notes, except: [:new, :edit]
    resources :notebooks, except: [:new, :edit]
  end
end
