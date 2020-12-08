Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: {format: :json} do 
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destory]
    resources :assets, only: [:show]
    resources :holdings, only: [:create, :update, :destroy]
    get '/assets/search/:searchbar', to:'assets#search'
  end
  root to: "staticpages#root"
end
