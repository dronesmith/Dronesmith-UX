class SiteMailer < ApplicationMailer
  include SendGrid

  default :from => 'support@dronesmith.io'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def mail_password_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Your new password' )
  end

  def mail_signup_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => "Welcome to the Dronesmith community")
  end


end
