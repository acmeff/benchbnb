# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

Bench.create(description: 'bench one', lat: 37.766489, lng: -122.417001, seating: 2)
Bench.create(description: 'bench two', lat: 37.780465, lng: -122.404126, seating: 2)
Bench.create(description: 'bench three', lat: 37.792980, lng: -122.407731, seating: 2)
Bench.create(description: 'bench four', lat: 37.803865, lng: -122.416851, seating: 2)
Bench.create(description: 'bench five', lat: 37.798643, lng: -122.449467, seating: 2)
Bench.create(description: 'bench six', lat: 37.792675, lng: -122.474873, seating: 2)
Bench.create(description: 'bench seven', lat: 37.784942, lng: -122.498562, seating: 2)
