import { RequestType } from '@shared/enums/request-type';
import { Processor } from '@shared/enums/processor';

export interface BasePaymentRecord {
  id: string;
  client_id: string;
  filter_id?: string;
  request_type: RequestType;
  request_status: string;
  gsi1_sk: string;
  tdu_correlation_id?: string;
  created: string;
  last_modified: string;
  errors?: TDUServiceError[];
  reference_id: string;
  paid_date?: string;
}

export interface TDUServiceError {
  processor: Processor;
  code?: string;
  type?: string;
  message?: string;
}
