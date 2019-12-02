Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :reviews
  resources :chips
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/chips/:id/reviews', to: 'chips#index_by_reviews'
end
