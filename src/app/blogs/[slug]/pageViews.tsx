import { Text } from '@components/core';
import { SupabaseAdmin } from '@utils/supabase/client';

interface PageViewsProps {
  slug: string;
}

export async function PageViews({ slug }: PageViewsProps) {
  const { data } = await SupabaseAdmin.from('counter')
    .select('views')
    .match({ slug })
    .single();

  const views = data?.views ?? 1;

  return (
    <Text size="4">
      {views} View{views > 1 ? 's' : ''}
    </Text>
  );
}
