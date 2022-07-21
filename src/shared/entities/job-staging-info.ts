export interface JobStagingInfo {
  id: string[];
  job_name: string;
  missing_records?: string[];
  errors: string[];
  missing_records_errors?: string[];
}

