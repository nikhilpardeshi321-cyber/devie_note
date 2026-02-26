export interface DeviceNote {
  id: number;
  device_id: number;
  note: string;
  created_at: string; // ISO timestamp
  created_by: string;
}
