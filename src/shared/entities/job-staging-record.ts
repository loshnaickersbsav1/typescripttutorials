export interface JobStagingRecord {
  id: string;
  missing_record?: string;
  missing_record_error?: string;
  batch_name: string;
  batch_start_time: string;
  error?: string;
  ttl?: number;
  reference_id?: string;
}
