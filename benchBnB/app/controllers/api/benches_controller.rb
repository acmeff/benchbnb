class Api::BenchesController < ApplicationController
  def index
    # debugger
    if params[:filters][:bounds]
      @benches = Bench.in_bounds(params[:filters][:bounds])
    else
      @benches = Bench.all
    end
    if params[:filters][:min_seating] || params[:filters][:max_seating]
      min = params[:filters][:min_seating].to_i
      max = params[:filters][:max_seating].to_i
      @benches = @benches.select do |bench|
        bench.seating.between?(min, max)
      end
    end
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :create
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lng, :lat, :filters, :seating)
  end
end
