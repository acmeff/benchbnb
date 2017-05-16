@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :description, :lng, :lat, :id
  end
end
