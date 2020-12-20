Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update] do 
      resources :assets, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :assets, only: [:show]
    resources :holdings, only: [:create, :update, :destroy]
    resources :transactions, except: [:index, :show, :create]
    get '/assets/search/:searchbar', to:'assets#search', as: 'search_assets'
  end
  root to: "staticpages#root"
  # match "*path", to: "welcome#index", via: [:get]
end
