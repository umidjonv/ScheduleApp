import { HttpHeaders } from '@angular/common/http';

export interface ApiResponse<T> {
  success: boolean;
  data : T;
  error: string;
}
