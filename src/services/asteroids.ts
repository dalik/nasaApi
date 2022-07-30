import { AxiosResponse } from "axios";
import { api, apiKey, baseURL } from "./api";

interface Asteroids {
  element_count: number
  links: Links
  near_earth_objects: {
    [id: string]: Asteroid
  }
}

export interface Asteroid {
  links: Links
  id: string
  neo_reference_id: string
  name: string
  nasa_jpl_url: string
  absolute_magnitude_h: number
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: CloseApproachDaum[]
  is_sentry_object: boolean
}

interface Links {
  self: string
}

interface EstimatedDiameter {
  kilometers: Kilometers
  meters: Meters
  miles: Miles
  feet: Feet
}

interface Kilometers {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface Meters {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface Miles {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface Feet {
  estimated_diameter_min: number
  estimated_diameter_max: number
}

interface CloseApproachDaum {
  close_approach_date: string
  close_approach_date_full: string
  epoch_date_close_approach: number
  relative_velocity: RelativeVelocity
  miss_distance: MissDistance
  orbiting_body: string
}

interface RelativeVelocity {
  kilometers_per_second: string
  kilometers_per_hour: string
  miles_per_hour: string
}

interface MissDistance {
  astronomical: string
  lunar: string
  kilometers: string
  miles: string
}


export function fetchAsteroids(date: string): Promise<AxiosResponse<Asteroids>> {
  return api.get(
    `${baseURL}/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`
  );
}
