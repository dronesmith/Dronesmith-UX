module v1
	class SessionSerializer < ActiveModel::Serializer
	attributes :email, :token_type, :user_id, :token

    def user_id
      object.id
    end

    def token_type
      'Bearer'
    end

  end
end