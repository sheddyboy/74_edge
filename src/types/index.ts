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
  monthly_cc: AdditionalField | null;
  monthly_re: AdditionalField | null;
  display_on_web: AdditionalField | null;
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

export interface AdditionalFieldsResponse {
  id: number;
  additional_fields: AdditionalField[];
  created_at: Date;
  field_type: string;
  name: string;
  position: number;
  project_id: number;
  type: string;
  updated_at: Date;
}

export interface AdditionalField {
  id: number;
  brokerage_id: string | null;
  contact_id: string | null;
  contract_id: string | null;
  created_at: Date;
  inventory_id: number;
  name: string;
  position: string | null;
  project_id: number;
  standardized_field_id: number;
  team_member_id: string | null;
  updated_at: Date;
  value: string;
}
