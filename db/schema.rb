# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_19_233951) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string "company_name", null: false
    t.string "ticker_symbol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_name"], name: "index_assets_on_company_name", unique: true
    t.index ["ticker_symbol"], name: "index_assets_on_ticker_symbol", unique: true
  end

  create_table "holdings", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "asset_id", null: false
    t.integer "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "asset_id"], name: "index_holdings_on_user_id_and_asset_id", unique: true
  end

  create_table "transactions", force: :cascade do |t|
    t.string "user_id", null: false
    t.string "asset_id", null: false
    t.float "price", null: false
    t.integer "num_assets", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "order_type", null: false
    t.index ["user_id", "asset_id"], name: "index_transactions_on_user_id_and_asset_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.integer "buying_power", default: 5000, null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
