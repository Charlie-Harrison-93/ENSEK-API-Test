export interface Energy {
  electric: Electric
  gas: Gas
  nuclear: Nuclear
  oil: Oil
}

export interface Electric {
  energy_id: number
  price_per_unit: number
  quantity_of_units: number
  unit_type: string
}

export interface Gas {
  energy_id: number
  price_per_unit: number
  quantity_of_units: number
  unit_type: string
}

export interface Nuclear {
  energy_id: number
  price_per_unit: number
  quantity_of_units: number
  unit_type: string
}

export interface Oil {
  energy_id: number
  price_per_unit: number
  quantity_of_units: number
  unit_type: string
}