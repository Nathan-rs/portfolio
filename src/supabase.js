import {createClient} from '@supabase/supabase-js'

const supabaseURL = 'https://aypzhsvnbnswvzldnejd.supabase.co'
const supabaseANONKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5cHpoc3ZuYm5zd3Z6bGRuZWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzgzNjEsImV4cCI6MjA1ODE1NDM2MX0.tYyosbHYg7ewOrWY8Mune5vRQFSDk5Y8eI4V4LYrNnU'

export const supabase = createClient(supabaseURL, supabaseANONKEY)