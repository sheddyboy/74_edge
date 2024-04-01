export interface InventoryResponse {
  id: number;
  accepted_at: Date | null;
  accepted_contract_id: string;
  active_contracts_count: number;
  area: number;
  area_unit: string;
  bathrooms: string;
  bedrooms: string;
  building: string;
  created_at: Date;
  estimated_closing_date: string;
  estimated_completion: string;
  estimated_move_in: string;
  exposures: any[];
  exterior_area: number | null;
  exterior_type: string;
  floor: number;
  floorplan_id: number | null;
  floorplan: FloorPlanResponse | null;
  interested_count: number;
  kind: string;
  lease: boolean;
  leasing_term: string;
  line: string;
  offer_at: Date | null;
  origin: string;
  parking_stall_count: number | null;
  parking_stall_numbers: any[];
  price: number;
  price_per_area: number;
  project_id: number;
  rescissions_count: number;
  sold_at: Date | null;
  status_id: number;
  storage_unit_count: number | null;
  storage_unit_numbers: any[];
  strata_lot: string;
  unit: string;
  updated_at: Date;
}

export interface FloorPlanResponse {
  id: number;
  color: string;
  contacts: {
    interested: any[];
    purchased: any[];
  };
  contracts: any[];
  created_at: Date;
  file: {
    url: string;
  };
  file_name: string;
  image: string;
  interested_count: number;
  inventory: InventoryResponse[];
  name: string;
  project_id: number;
  purchased_count: number;
  updated_at: Date;
}
