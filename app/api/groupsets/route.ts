import { NextResponse } from 'next/server';
import { groupsets } from '@/lib/data/groupsets';

export async function GET() {
  return NextResponse.json(groupsets);
}
