import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', Number(params.id))
      .eq('is_active', true)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { message: '找不到職缺' },
        { status: 404 }
      );
    }

    return NextResponse.json({ job: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: '伺服器錯誤' },
      { status: 500 }
    );
  }
}
