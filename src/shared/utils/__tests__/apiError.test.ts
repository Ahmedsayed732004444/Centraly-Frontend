import { describe, it, expect } from 'vitest';
import axios from 'axios';
import { getApiErrorMessage } from '../apiError';

describe('getApiErrorMessage', () => {
  it('uses fallback for unknown errors', () => {
    expect(getApiErrorMessage('x', 'فشل')).toBe('فشل');
  });

  it('reads Error.message', () => {
    expect(getApiErrorMessage(new Error('network'))).toBe('network');
  });

  it('reads the description from the real backend errors:[code,description] shape', () => {
    const axiosError = new axios.AxiosError('fail');
    axiosError.response = {
      data: { errors: ['Some.UntranslatedCode', 'غير مصرح'] },
      status: 400,
      statusText: 'Bad Request',
      headers: {},
      config: { headers: new axios.AxiosHeaders() },
    };

    expect(getApiErrorMessage(axiosError, 'fallback')).toBe('غير مصرح');
  });

  it('prefers the ERROR_TRANSLATIONS entry over the raw description when the code is known', () => {
    const axiosError = new axios.AxiosError('fail');
    axiosError.response = {
      data: { errors: ['Product.NotFound', 'Product not found'] },
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: { headers: new axios.AxiosHeaders() },
    };

    expect(getApiErrorMessage(axiosError, 'fallback')).toBe('المنتج غير موجود');
  });
});
