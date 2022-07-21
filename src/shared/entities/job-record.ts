export interface JobRecord {
  id: string;
  job_name: string;
  total_records: number;
  records: string[];
  missing_records?: string[];
  errors: string[];
  missing_records_errors?: string[];
  file_etag?: string;
  file_name: string;
  file_version_id: string;
  start_time: string;
  emailed?: string;
}
