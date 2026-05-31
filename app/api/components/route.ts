import { NextResponse } from 'next/server';
import { components, getComponentsByGroupset } from '@/lib/data/components';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const groupsetId = searchParams.get('groupset_id');

  if (groupsetId) {
    return NextResponse.json(getComponentsByGroupset(groupsetId));
  }

  return NextResponse.json(components);
}
