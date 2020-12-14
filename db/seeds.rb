# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ company_name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Holding.destroy_all
User.destroy_all
Asset.destroy_all



Asset.create({ company_name: "Apple", ticker_symbol: "AAPL" })
Asset.create({ company_name: "Amazon", ticker_symbol: "AMZN" })
Asset.create({ company_name: "Twitter", ticker_symbol: "TWTR" })
Asset.create({ company_name: "Microsoft", ticker_symbol: "MSFT" })
Asset.create({ company_name: "Citigroup", ticker_symbol: "C" })
Asset.create({ company_name: "Cisco", ticker_symbol: "CSCO" })
Asset.create({ company_name: "Alphabet", ticker_symbol: "GOOGL" })
Asset.create({ company_name: "Chevron", ticker_symbol: "CVX" })
Asset.create({ company_name: "Costco", ticker_symbol: "COST" })
Asset.create({ company_name: "Comcast", ticker_symbol: "CMCSA" })
Asset.create({ company_name: "Carvana", ticker_symbol: "CVNA" })
Asset.create({ company_name: "Carnival", ticker_symbol: "CCL" })
Asset.create({ company_name: "Charter Communications", ticker_symbol: "CHTR" })
Asset.create({ company_name: "AMD", ticker_symbol: "AMD" })
Asset.create({ company_name: "Alibaba", ticker_symbol: "BABA" })
Asset.create({ company_name: "American Airlines", ticker_symbol: "AAL" })
Asset.create({ company_name: "AT&T", ticker_symbol: "T" })
Asset.create({ company_name: "Boeing", ticker_symbol: "BA" })
Asset.create({ company_name: "Bank of America", ticker_symbol: "BAC" })
Asset.create({ company_name: "Berkshire Hathaway", ticker_symbol: "BRK.B" })
Asset.create({ company_name: "Disney", ticker_symbol: "DIS" })
Asset.create({ company_name: "DocuSign", ticker_symbol: "DOCU" })
Asset.create({ company_name: "Delta Air Lines", ticker_symbol: "DAL" })
Asset.create({ company_name: "Draftkings", ticker_symbol: "DKNG" })
Asset.create({ company_name: "Deere", ticker_symbol: "DE" })
Asset.create({ company_name: "Datadog", ticker_symbol: "DDOG" })
Asset.create({ company_name: "Etsy", ticker_symbol: "ETSY" })
Asset.create({ company_name: "eBay", ticker_symbol: "EBAY" })
Asset.create({ company_name: "Estee Lauder", ticker_symbol: "EL" })
Asset.create({ company_name: "Ford Motor", ticker_symbol: "F" })
Asset.create({ company_name: "Facebook", ticker_symbol: "FB" })
Asset.create({ company_name: "Fastly", ticker_symbol: "FSLY" })
Asset.create({ company_name: "FedEx", ticker_symbol: "FDX" })
Asset.create({ company_name: "Fiserv", ticker_symbol: "FISV" })
Asset.create({ company_name: "Fidelity National Information", ticker_symbol: "FIS" })
Asset.create({ company_name: "Wells Fargo", ticker_symbol: "WFC" })
Asset.create({ company_name: "Gilead Sciences", ticker_symbol: "GILD" })
Asset.create({ company_name: "Goldman Sachs", ticker_symbol: "GS" })
Asset.create({ company_name: "Honeywell", ticker_symbol: "HON" })
Asset.create({ company_name: "Hilton Worldwide", ticker_symbol: "HLT" })
Asset.create({ company_name: "Halliburton", ticker_symbol: "HAL" })
Asset.create({ company_name: "Humana", ticker_symbol: "HUM" })
Asset.create({ company_name: "Booking Holdings", ticker_symbol: "BKNG" })
Asset.create({ company_name: "Intel", ticker_symbol: "INTC" })
Asset.create({ company_name: "Tesla", ticker_symbol: "TSLA" })
Asset.create({ company_name: "IBM", ticker_symbol: "IBM" })
Asset.create({ company_name: "Jacobs Engineering", ticker_symbol: "J" })
Asset.create({ company_name: "JD.com", ticker_symbol: "JD" })
Asset.create({ company_name: "JPMorgan Chase", ticker_symbol: "JPM" })
Asset.create({ company_name: "Johnson & Johnson", ticker_symbol: "JNJ" })
Asset.create({ company_name: "Johnson Controls", ticker_symbol: "JCI" })
Asset.create({ company_name: "Kellogg", ticker_symbol: "K" })
Asset.create({ company_name: 'Kohl\'s', ticker_symbol: "KSS" })
Asset.create({ company_name: "KLA", ticker_symbol: "KLAC" })
Asset.create({ company_name: "Keysight Technologies", ticker_symbol: "KEYS" })
Asset.create({ company_name: "Kroger", ticker_symbol: "KR" })
Asset.create({ company_name: "Kimberly-Clark", ticker_symbol: "KMB" })
Asset.create({ company_name: "Keurig Dr Pepper", ticker_symbol: "KDP" })
Asset.create({ company_name: "Kodak", ticker_symbol: "KODK" })
Asset.create({ company_name: "Kraft Foods", ticker_symbol: "KHC" })
Asset.create({ company_name: 'Lowe\'s', ticker_symbol: "LOW" })
Asset.create({ company_name: "Livongo", ticker_symbol: "LVGO" })
Asset.create({ company_name: "Lam Research", ticker_symbol: "LRCX" })
Asset.create({ company_name: "Lyft", ticker_symbol: "LYFT" })
Asset.create({ company_name: "Lululemon", ticker_symbol: "LULU" })
Asset.create({ company_name: "Lockheed", ticker_symbol: "LMT" })
Asset.create({ company_name: "Linde", ticker_symbol: "LIN" })
Asset.create({ company_name: "Eli Lilly", ticker_symbol: "LLY" })
Asset.create({ company_name: 'Macy\'s', ticker_symbol: "M" })
Asset.create({ company_name: "Mastercard", ticker_symbol: "MA" })
Asset.create({ company_name: "Moderna", ticker_symbol: "MRNA" })
Asset.create({ company_name: "Micron Technology", ticker_symbol: "MU" })
Asset.create({ company_name: 'McDonald\'s', ticker_symbol: "MCD" })
Asset.create({ company_name: "Merck", ticker_symbol: "MRK" })
Asset.create({ company_name: "NVIDIA", ticker_symbol: "NVDA" })
Asset.create({ company_name: "Netflix", ticker_symbol: "NFLX" })
Asset.create({ company_name: "Novavax", ticker_symbol: "NVAX" })
Asset.create({ company_name: "NIO", ticker_symbol: "NIO" })
Asset.create({ company_name: "Nikola", ticker_symbol: "NKLA" })
Asset.create({ company_name: "Nike", ticker_symbol: "NKE" })
Asset.create({ company_name: "Newmont", ticker_symbol: "NEM" })
Asset.create({ company_name: "Norwegian Cruise Line", ticker_symbol: "NCLH" })
Asset.create({ company_name: "Occidental Petroleum", ticker_symbol: "OXY" })
Asset.create({ company_name: "Okta", ticker_symbol: "OKTA" })
Asset.create({ company_name: 'Ollie\'s Bargain Outlet', ticker_symbol: "OLLI" })
Asset.create({ company_name: 'O\'Reilly Auto Parts', ticker_symbol: "ORLY" })
Asset.create({ company_name: "Old Dominion Freight Line", ticker_symbol: "ODFL" })
Asset.create({ company_name: "PayPal", ticker_symbol: "PYPL" })
Asset.create({ company_name: "Pinduoduo", ticker_symbol: "PDD" })
Asset.create({ company_name: "Procter & Gamble", ticker_symbol: "PG" })
Asset.create({ company_name: "Pfizer", ticker_symbol: "PFE" })
Asset.create({ company_name: "Plug Power", ticker_symbol: "PLUG" })
Asset.create({ company_name: "Pinterest", ticker_symbol: "PINS" })
Asset.create({ company_name: "Penn National Gaming", ticker_symbol: "PENN" })
Asset.create({ company_name: "Qualcomm", ticker_symbol: "QCOM" })
Asset.create({ company_name: "Quidel", ticker_symbol: "QDEL" })
Asset.create({ company_name: "Qorvo", ticker_symbol: "QRVO" })
Asset.create({ company_name: "Qiagen", ticker_symbol: "QGEN" })
Asset.create({ company_name: "Ryder", ticker_symbol: "R" })
Asset.create({ company_name: "Roku", ticker_symbol: "ROKU" })
Asset.create({ company_name: "Royal Caribbean Group", ticker_symbol: "RCL" })
Asset.create({ company_name: "Rocket Companies", ticker_symbol: "RKT" })
Asset.create({ company_name: "Raytheon Technologies", ticker_symbol: "RTX" })
Asset.create({ company_name: "Regeneron", ticker_symbol: "REGN" })
Asset.create({ company_name: "RingCentral", ticker_symbol: "RNG" })
Asset.create({ company_name: "Ross", ticker_symbol: "ROST" })
Asset.create({ company_name: "Shopify", ticker_symbol: "SHOP" })
Asset.create({ company_name: "Square", ticker_symbol: "SQ" })
Asset.create({ company_name: "Sorrento Therapeutics", ticker_symbol: "SRNE" })
Asset.create({ company_name: "Sea Limited", ticker_symbol: "SE" })
Asset.create({ company_name: "Target", ticker_symbol: "TGT" })
Asset.create({ company_name: "Teladoc Health", ticker_symbol: "TDOC" })
Asset.create({ company_name: "T-Mobile", ticker_symbol: "TMUS" })
Asset.create({ company_name: "United Airlines", ticker_symbol: "UAL" })
Asset.create({ company_name: "Uber", ticker_symbol: "UBER" })
Asset.create({ company_name: "UnitedHealth", ticker_symbol: "UNH" })
Asset.create({ company_name: "UPS", ticker_symbol: "UPS" })
Asset.create({ company_name: "Union Pacific", ticker_symbol: "UNP" })
Asset.create({ company_name: "Visa", ticker_symbol: "V" })
Asset.create({ company_name: "Verizon", ticker_symbol: "VZ" })
Asset.create({ company_name: "Varian", ticker_symbol: "VAR" })
Asset.create({ company_name: "Wayfair", ticker_symbol: "W" })
Asset.create({ company_name: "Walmart", ticker_symbol: "WMT" })
Asset.create({ company_name: "Wynn Resorts", ticker_symbol: "WYNN" })
Asset.create({ company_name: "Wix.com", ticker_symbol: "WIX" })
Asset.create({ company_name: "Workhorse", ticker_symbol: "WKHS" })
Asset.create({ company_name: "Workday", ticker_symbol: "WDAY" })
Asset.create({ company_name: "Walgreens", ticker_symbol: "WBA" })
Asset.create({ company_name: "Western Digital", ticker_symbol: "WDC" })
Asset.create({ company_name: "United States Steel", ticker_symbol: "X" })
Asset.create({ company_name: "Xilinx", ticker_symbol: "XLNX" })
Asset.create({ company_name: "Xcel Energy", ticker_symbol: "XEL" })
Asset.create({ company_name: "Exxon Mobil", ticker_symbol: "XOM" })
Asset.create({ company_name: "Yandex", ticker_symbol: "YNDX" })
Asset.create({ company_name: "Yum!", ticker_symbol: "YUM" })
Asset.create({ company_name: "Zillow", ticker_symbol: "Z" })
Asset.create({ company_name: "Zoom", ticker_symbol: "ZM" })
Asset.create({ company_name: "Zscaler", ticker_symbol: "ZS" })
Asset.create({ company_name: "Zoetis", ticker_symbol: "ZTS" })
Asset.create({ company_name: "Zynga", ticker_symbol: "ZNGA" })
Asset.create({ company_name: "Zendesk", ticker_symbol: "ZEN" })
Asset.create({ company_name: "ZoomInfo", ticker_symbol: "ZI" })
Asset.create({ company_name: "Zebra Technologies", ticker_symbol: "ZBRA" })

User.create({ id: 19, username: "Admin", password: "helloWorld" })
Holding.create({ user_id: 19, asset_id: 1, amount: 0 })
Holding.create({ user_id: 19, asset_id: 3, amount: 6 })
Holding.create({ user_id: 19, asset_id: 5, amount: 0 })
Holding.create({ user_id: 19, asset_id: 7, amount: 0 })
Holding.create({ user_id: 19, asset_id: 20, amount: 34 })
Holding.create({ user_id: 19, asset_id: 30, amount: 12 })
