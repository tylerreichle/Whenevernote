class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password,
            :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initalize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = Bcrypt::Password.create(password)
  end

  def is_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
  end

  def find_by_credentials(user_sign_in, password)
    @user = User.find_by(username: user_sign_in)
    @user = User.find_by(email: user_sign_in) if @user.nil?
    return @user if @user && @user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token
    @self.session_token ||= SecureRandom::urlsafe_base64(16)
  end
end
