import { NextResponse } from 'next/server';
import { checkCompatibility } from '@/lib/compatibility-engine';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const groupsetId = searchParams.get('groupset_id');

  if (!groupsetId) {
    return NextResponse.json({ error: 'groupset_id is required' }, { status: 400 });
  }

  const result = checkCompatibility(groupsetId);
  if (!result) {
    return NextResponse.json({ error: 'Groupset not found' }, { status: 404 });
  }

  return NextResponse.json(result);
}
