class Holding < ApplicationRecord
  validates :user_id, :asset_id, presence: true
  validates :user_id, uniqueness: { scope: :asset_id }
  validates :amount, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :user,
             foreign_key: :user_id,
             class_name: :User,
             optional: true

  belongs_to :asset,
             foreign_key: :asset_id,
             class_name: :Asset,
             optional: true

  def purchase(amount, type)
    if type == "sell"
        self.amount -= sell_amount
    else
        self.amout -= buy_amount
    end
    save!
  end

end
