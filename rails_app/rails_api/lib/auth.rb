require 'jwt'

class Auth

  ALGORITHM ='HS256'



exp = Time.now.to_i + 4 * 3600
exp_payload = { :data => 'data', :exp => exp }


  def self.issue(exp_payload)
    JWT.encode(exp_payload, auth_secret, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, auth_secret, true, {algorithm: ALGORITHM}).first
  end

  def self.auth_secret
    ENV["AUTH_SECRET"]
  end

end
