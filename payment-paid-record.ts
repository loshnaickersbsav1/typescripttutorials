import { BasePaymentRecord } from './base-payment-record';


export interface PaymentPaidRecord extends BasePaymentRecord {
  reference_id: string;
  client_id: string;
  paid_date: string;
  bank_account_code: string;
  payment_number: string;
  total_amount: number;
}
