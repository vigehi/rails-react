# frozen_string_literal: true

class StaticsController < ApplicationController
  def index; end

  def greeting
    @greetings = Greeting.all.sample.message
    render json: { status: 'SUCCESS', message: 'Messages Loaded', greeting: @greetings }, status: :ok
  end
end
