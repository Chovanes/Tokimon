json.array!(@trainers) do |trainer|
  json.extract! trainer, :id, :trname, :trlevel
  json.url trainer_url(trainer, format: :json)
end
