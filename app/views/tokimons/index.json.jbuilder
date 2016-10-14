json.array!(@tokimons) do |tokimon|
  json.extract! tokimon, :id, :tname, :tweight, :theight, :fly, :fight, :fire, :water, :electric, :ice, :dark, :psychic, :total, :trainer_id
  json.url tokimon_url(tokimon, format: :json)
end
