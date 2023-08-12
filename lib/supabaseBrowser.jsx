// import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
//
// const supabaseBrowser = createPagesBrowserClient();
//
// export default () => supabaseBrowser;

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

const supabaseBrowser = createBrowserSupabaseClient();

export default () => supabaseBrowser;
