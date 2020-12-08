Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :assets, only: [:show]
    resources :holdings, only: [:create, :update, :destroy]
    get '/assets/search/:searchbar', to:'assets#search', as: 'search_assets'
  end
  root to: "staticpages#root"
end
