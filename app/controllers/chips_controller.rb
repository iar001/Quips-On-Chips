class ChipsController < ApplicationController
  before_action :set_chip, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]


  # GET /chips
  def index
    @chips = Chip.all

    render json: @chips
  end

  # GET /chips/1
  def show
    render json: @chip
  end

  # POST /chips
  def create
    @chip = Chip.new(chip_params)

    if @current_user.chips << @chip
      render json: @chip, status: :created, location: @chip
    else
      render json: @chip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chips/1
  def update
    if @chip.user == @current_user
      if @chip.update(chip_params)
        render json: @chip
      else
        render json: @chip.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  # DELETE /chips/1
  def destroy
    if @chip.user == @current_user
      @chip.destroy
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chip
      @chip = Chip.find(params[:id])
      puts @chip
    end

    # Only allow a trusted parameter "white list" through.
    def chip_params
      params.require(:chip).permit(:name, :bag_pic_url, :chip_pic_url)
    end
end
