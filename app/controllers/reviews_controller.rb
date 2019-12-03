class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show index_by_chips]


  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @chip = Chip.find(params[:chip_id])
    @review.chip = @chip
    if @current_user.reviews << @review
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def index_by_chips
    @chip = Chip.find(params[:chip_id])
    @reviews = @chip.reviews
    render json: @reviews, include: :chip, status: :ok
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.user == @current_user
      if @review.update(review_params)
        render json: @review
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  # DELETE /reviews/1
  def destroy
    if @review.user == @current_user
      @review.destroy
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
      puts @review
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:cost, :taste, :guilt, :review)
    end
end
