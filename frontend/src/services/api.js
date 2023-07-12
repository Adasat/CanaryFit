
import axios from 'axios'
import { useEffect, useState } from 'react';

export const api = axios.create({
  baseURL: 'http://localhost:27020/api',
  timeout: 3000,
});


