json.hoding_id @holding.id
json.extract! @holding, :amount 
json.extract! @holding.asset,:id, :company_name, :ticker_symbol