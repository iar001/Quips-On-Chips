Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :reviews
  resources :chips
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/chips/:chip_id/reviews', to: 'reviews#index_by_chips'
  post '/chips/:chip_id/reviews', to: 'reviews#create'
  put '/chips/:chip_id/reviews', to: 'reviews#update'

  get '/chips/:chip_id/users/:user_id/reviews', to: 'reviews#index_by_chip_and_user'
  put '/chips/:chip_id/:user_id/reviews', to: 'reviews#update_review'
end
