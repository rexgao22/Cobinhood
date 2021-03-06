class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  before_validation :ensure_session_token!
  
  has_many :holdings,
    foreign_key: :user_id,
    class_name: :Holding

  has_many :assets,
    through: :holdings,
    source: :asset
 
  has_many :transactions,
    foreign_key: :user_id,
    class_name: :Transaction

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user&.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def cal_buying_power(price, amount, order_type)
      if order_type == "buy"
        self.buying_power -= price * amount
      else 
        self.buying_power += price * amount
      end
  end

  def deposite(amount)
    self.buying_power += amount
    save!
  end


  private

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end
end
