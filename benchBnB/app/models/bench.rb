class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
# {
#   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
#   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
# }
    
    nelat = bounds['northEast']['lat'].to_f
    swlat = bounds['southWest']['lat'].to_f
    nelng = bounds['northEast']['lng'].to_f
    swlng = bounds['southWest']['lng'].to_f
    benches = Bench.all.select do |bench|
      bench.lat.between?(swlat, nelat) && bench.lng.between?(swlng, nelng)
    end

    return benches
  end
end
