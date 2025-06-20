import { NextResponse } from 'next/server';
import { supabase } from '~/lib/supabase';

export async function GET() {
  try {
    const { data: sigma, error } = await supabase
      .from('sigma')
      .select('*');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data:sigma });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Can I hab orduh prease?', data: body });
} 