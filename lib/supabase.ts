import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey || supabaseAnonKey);

export type Job = {
  id: number;
  title: string;
  country: string;
  category: string;
  salary_min: number;
  salary_max: number;
  location: string;
  shift: string;
  deadline: string | null;
  description: string;
  is_active: boolean;
  created_at: string;
};

export type Agency = {
  id: number;
  name: string;
  country: string;
  services: string;
  description: string;
  is_verified: boolean;
  created_at: string;
};
