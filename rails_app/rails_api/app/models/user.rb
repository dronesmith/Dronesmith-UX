class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
  has_secure_token
  # after_create :update_access_token!  
  

end
# user = User.new
# user.save
# user.token # => "pX27zsMN2ViQKta1bGfLmVJE"
# user.regenerate_token # => true