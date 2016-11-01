module V1
  class SessionsController < ApplicationController
    # skip_before_action :authenticate_user_from_token!

    # POST /v1/login
    def create
      
    end

    private

    def invalid_login_attempt
      warden.custom_failure!
      render json: {error: t('sessions_controller.invalid_login_attempt')}, status: :unprocessable_entity
    end

  end
end